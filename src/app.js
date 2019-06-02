//const Name = require('./controllers/name') //commonjs的模块化

//import{ name } from './controllers/name' //ES6的模块化


const indexTpl = require('./views/index.html')

const renderedIndexTpl = template.render(indexTpl, {})

document.querySelector('#app').innerHTML = renderedIndexTpl