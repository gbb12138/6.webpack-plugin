const { SyncBailHook } = require("tapable");

/**
 * 当事件回调函数的返回值不是undefined的时候，停止后续事件的执行
 */
const hook = new SyncBailHook(["name", "age"]);

hook.tap("1", (name, age) => { // 注册回调函数
    console.log(1, name, age);  // 1 zhufeng 10
});

hook.tap("2", (name, age) => {
    console.log(2, name, age);  // 2 zhufeng 10
    return 2;
});

hook.tap("3", (name, age) => {
    console.log(3, name, age);  // 3 zhufeng 10
    return 3;
});

hook.call("zhufeng", 10); // 触发回调
