let { AsyncSeriesWaterfallHook } = require("tapable");


let queue = new AsyncSeriesWaterfallHook(["name"]);
console.time("cost");
queue.tapPromise("1", function (name) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log(name, 1);
            resolve('A');
        }, 1000);
    });
});
queue.tapPromise("2", function (data) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log(data, 2);
            resolve('B');
        }, 2000);
    });
});
queue.tapPromise("3", function (data) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log(data, 3);
            resolve('C');
        }, 3000);
    });
});
queue.promise("zhufeng").then((data) => {
    console.log(data)
    console.timeEnd("cost");
});
