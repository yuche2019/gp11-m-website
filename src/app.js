const Name = require('./controllers/name') //commonjs的模块化

//import{ name } from './controllers/name' //ES6的模块化


async function getName() {
    console.log(name)
    const name = await Name.getName()
    console.log(name)
}
getName