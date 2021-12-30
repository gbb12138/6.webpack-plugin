let { AsyncSeriesBailHook } = require("tapable");
let queue = new AsyncSeriesBailHook(["name"]);
console.time("cost");

/** 串行保险钩子
 * 只要有一个返回了不为 undefined 的值就直接结束
 */
queue.tapPromise("1", function (name) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log(1);
            resolve();
        }, 1000);
    });
});
queue.tapPromise("2", function (name, callback) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(2);
            reject("失败了");
        }, 2000);
    });
});
queue.tapPromise("3", function (name, callback) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log(3);
            resolve();
        }, 3000);
    });
});
queue.promise("zhufeng").then(
    (data) => {
        console.log(data);
        console.timeEnd("cost");
    },
    (error) => {
        console.log(error);
        console.timeEnd("cost");
    }
);
