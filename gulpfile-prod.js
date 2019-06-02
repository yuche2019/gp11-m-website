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

}

function copyimages() {

}

function copyicons() {

}



//编译JS模块
function packjs() {
    return src('./src/app.js')
        .pipe(webpackStream({
            mode: 'production',//开发环境  production 生产环境
            entry: {//入口
                app: './src/app.js'
            },
            output: {//出口
                filename: '[name].js',  //[name] = app   入口的key
                path: path.resolve(__dirname, './dev/')//绝对路径
            },
            //将ES6-ES8 代码转换成 ES5
            module: {
                rules: [
                    {
                        test: /\.m?js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env']//预设，相当于ES6转成ES5的字典
                                
                            }
                        }
                    }
                ]
            } 
        }))
        .pipe(dest('./dev/scripts'))
}

function revColl() {
    return src(['./rev/**/*.json', './dist/*.html'])
}

function packCSS() {
    return src('./src/styles/app.scss')
        .pipe(gulpSass().on('error', guloSass.logError))
        .pipe(dest('./dev/styles'))
}

// gulp.task('default',gulp.series('copyhtml'))
//私有任务和公有任务，公有任务需要在exports里显式的定义
exports.webserver = series(webserver)
exports.default = series( parallel(packjs, packCSS,copylibs,copyimages,copyicons), copyhtml, rev)
