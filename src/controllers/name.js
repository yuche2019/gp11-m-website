module.exports = 'zhaoqian'
//export const name = 'zhaoqian'

module.exports = {
    name: 'zhaoqian',
    getName: ()=>{
        return new Promise((reject, resolve)=>{
            setTimeout(() =>{
                resolve('guoshihao')
            },2000)
        })
    }
}