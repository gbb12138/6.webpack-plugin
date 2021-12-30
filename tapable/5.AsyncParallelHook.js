const {AsyncParallelHook} = require("tapable");

/**
 * 异步并行执行钩子
 * 同时执行所有异步回调函数，执行全部的回调后，再执行callAsync的回调
 */
const hook = new AsyncParallelHook(['name']);

// 通过tapAsync注册， 每个回调函数需要添加callback回调
// hook.tapAsync("1", (name, callback) => { // 注册回调函数
//     setTimeout(() => {
//         console.log(1);
//         callback();
//     }, 1000)
// });
// hook.tapAsync("2", (name, callback) => { // 注册回调函数
//     setTimeout(() => {
//         console.log(2);
//         callback();
//     }, 2000)
// });
// hook.tapAsync("3", (name, callback) => { // 注册回调函数
//     setTimeout(() => {
//         console.log(3);
//         callback();
//     }, 3000)
// });

// 通过tapPromise注册， 每个回调函数返回一个promise对象
hook.tapPromise('1', (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(1);
            resolve()
        }, 1000)
    })
})
hook.tapPromise('2', (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(2);
            resolve()
        }, 2000)
    })
})
hook.tapPromise('3', (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(3);
            resolve()
        }, 3000)
    })
})

// hook.callAsync('zf', (err) => {
//     console.log(err);
// })

hook.promise('zf').then(err => {
    console.log(err);
})
