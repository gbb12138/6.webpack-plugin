const { SyncHook } = require("tapable");

/**
 * SyncHook是一个类，参数是一个数组，用来指定回调函数的参数列表，里面的变量名没有用，但是数组的长度有用
 * @type {SyncHook<unknown, void, UnsetAdditionalOptions>}
 */
const hook = new SyncHook(["name", "age"]);

hook.tap("1", (name, age) => { // 注册回调函数
    console.log(1, name, age);  // 1 zhufeng 10
    return 1;  // 不关心返回值
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
