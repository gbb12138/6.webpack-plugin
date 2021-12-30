const {AsyncParallelBailHook} = require("tapable");

/**
 *   保险的异步并行执行钩子
     有一个任务返回值不为空就直接结束
     对于promise来说，resolve还reject并没有区别
     区别在于你是否传给它们的参数
 * @type {AsyncParallelBailHook<unknown, unknown, UnsetAdditionalOptions>}
 */
const hook = new AsyncParallelBailHook(['name']);

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
            resolve('B')
        }, 2000)
    })
})
hook.tapPromise('3', (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(3);
            resolve("C")
        }, 3000)
    })
})
hook.promise('zf').then(err => {
    console.log('done');
})
