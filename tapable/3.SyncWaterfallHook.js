const { SyncWaterfallHook } = require("tapable");

/**
 * 上一个回调函数的结果作为下一个回调函数的参数
 */
const hook = new SyncWaterfallHook(["name", "age"]);

hook.tap("1", (name, age) => { // 注册回调函数
    console.log(1, name, age);  // 1 zhufeng 10
    return 'A';
});

hook.tap("2", (name, age) => {
    console.log(2, name, age);  // 2 zhufeng 10
    return 'B';
});

hook.tap("3", (name, age) => {
    console.log(3, name, age);  // 3 zhufeng 10
    return 'C';
});

hook.call("zhufeng", 10); // 触发回调
