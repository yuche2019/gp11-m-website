// const gulp = require('gulp')


const {
    src,
    dest,
    series,
    parallel//实现任务并行
    } = require('gulp')

const path = require('path')//引入nodejs内置的路径工具包
const rev = require('gulp-rev')
const revCollector = require ('gulp-rev-collector')
const webpackStream = require('webpack-stream')
const gulpSass = require('gulp-sass')

//拷贝 index.html 到 dev 根目录下
//任务的回调一定要有返回值，返回值全部都是异步操作
//如果无返回值，需要调用一个callback
// gulp.task('copyhtml',(cb) => {
//     gulp.src('./index.html')
//         .pipe(gulp.dest('./dev/'))
//     cb()    
// })
function copyhtml() {
    return src('./*.html')
        .pipe(dest('./dev/'))
}

function copylibs() {
    return src('./src/libs/**/*')
    .pipe(dest('./dist/libs'))
}

function copyimages() {
    return src('./src/images/**/*')
    .pipe(dest('./dist/images'))
}

function copyicons() {
    return src('./src/icons/**/*')
    .pipe(dest('./dist/icons'))
}



//编译JS模块
function packjs() {
    return src('./src/**/*')
        .pipe(webpackStream({
            mode: 'production',//生产环境
            entry: {//入口
                app: './src/app.js'
            },
            output: {//出口
                filename: '[name].js',  //[name] = app   入口的key
                path: path.resolve(__dirname, './dist/')//绝对路径
            },
            //将ES6-ES8 代码转换成 ES5
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env'],//预设，相当于ES6转成ES5的字典
                                plugins: ['@babel/plugin-transform-runtime']
                            }
                        }
                    },
                    {
                        test: /\.html$/,
                        loader: 'string-loader'
                    }
                ]
            } 
        }))
        .pipe(rev())
        .pipe(dest('./dist/scripts'))
        .pipe(rev.manifest())
        .pipe(dest('./dist/scripts'))
}

function revColl() {
    return src(['./rev/**/*.json', './dist/*.html'])
        .pipe(revCollector())
        .pipe(dest('./dist'))
}

function packCSS() {
    return src('./src/styles/app.scss')
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(rev())
        .pipe(dest('./dist/styles'))
        .pipe(rev.manifest())
        .pipe(dest('./rev/styles'))
}

// gulp.task('default',gulp.series('copyhtml'))
//私有任务和公有任务，公有任务需要在exports里显式的定义
exports.default = series( parallel(packjs, packCSS,copylibs,copyimages,copyicons), copyhtml, revColl)
