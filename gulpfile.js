// const gulp = require('gulp')


const {
    src,
    dest,
    series,
    parallel,//实现任务并行
    watch
    } = require('gulp')

const gulpwebserver = require('gulp-webserver')
const webpackStream = require('webpack-stream')
const path = require('path')//引入nodejs内置的路径工具包
const gulpSass = require('gulp-sass')
const proxy = require('http-proxy-middleware')
const del = require('del')

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
        .pipe(dest('./dev/libs'))
}

function copyimages() {
    return src('./src/images/**/*')
        .pipe(dest('./dev/images'))
}

function copyicons() {
    return src('./src/icons/**/*')
        .pipe(dest('./dev/icons'))
}

//启动一个server
// gulp.task('webserver', () => {
//     return gulp.src('./dev')
//         .pipe(webserver({
//             livereload: true,
//             // directiryLising: true,
//             open: true,
//             host: 'localhost',
//             port: 8080
//         }))
// })

function webserver() {
    return src('./dev')
        .pipe(gulpwebserver({
            livereload: true,
            // directiryLising: true,
            open: true,
            host: 'localhost',
            port: 8080,
            middleware: [
                proxy('/api',{
                    target: 'https://m.lagou.com',
                    changeOrigin: true,//访问不同的域名，需要配置成true
                    pathRewrite: {
                        '^/api': ''
                    }
                })
            ]
        }))
}

//编译JS模块
function packjs() {
    return src('./src/app.js')
        .pipe(webpackStream({
            mode: 'development',//开发环境  production 生产环境
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
                        test: /\.js$/,
                        exclude: /(node_modules)/,//定义编译时要排除的文件夹
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env'],//预设，相当于ES6转成ES5的字典
                                plugins: ['@babel/plugin-transform-runtime']
                            }
                        }
                    },
                    {
                        test: /\.atr$/,
                        loader: 'string-loader'
                    }
                ]
            } 
        }))
        .pipe(dest('./dev/scripts'))
}

function packCSS() {
    return src('./src/styles/app.scss')
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(dest('./dev/styles'))
}

function clear(target) {
    return function() {
        return del(target)
    }
}

function watcher() {
    watch('./src/libs/**/*', series(clear('./dev/libs'), copylibs))
    watch('./src/images/**/*', series(clear('./dev/images'), copyimages))
    watch('./src/icons/**/*', series(clear('./dev/icons'), copyicons))
    watch('./*.html', series(clear('./dev/*.html'), copyhtml))
    watch('./src/style/**/*',series(packCSS))
    watch(['./src/**/*','!src/libs/**/*','!src/images/**/*','!src/icons','!src/style/**/*'], series(packjs))
}

// function watcher() {
//     watch('./src/libs/**/*', series(clear('./dev/libs'), copylibs))
//     watch('./src/images/**/*', series(clear('./dev/images'), copyimages))
//     watch('./src/icons/**/*', series(clear('./dev/icons'), copyicons))
//     watch('./*.html', series(clear('./dev/*.html'), copyhtml))
//     watch('./src/styles/**/*', series(packCSS))
//     watch(['./src/**/*', '!src/libs/**/*', '!src/icons/**/*', '!src/images/**/*', '!src/styles/**/*'], series(packjs))
//   }

// gulp.task('default',gulp.series('copyhtml'))
//私有任务和公有任务，公有任务需要在exports里显式的定义
exports.webserver = series(webserver)
exports.default = series( parallel(packjs, packCSS,copylibs,copyimages,copyicons), copyhtml, webserver,watcher)
