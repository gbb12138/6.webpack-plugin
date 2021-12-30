const { SyncLoopHook } = require("tapable");
//当回调函数返回非undefined值的时候会停止调用后续的回调

/**
 * 当有一个回调函数的返回值不是undefined，就重头开始执行，如果没有返回值才执行下一个
 * @type {SyncLoopHook<unknown, UnsetAdditionalOptions>}
 */
let hook = new SyncLoopHook(["name", "age"]);
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
hook.tap("1", (name, age) => {
    console.log(1, "counter1", counter1);
    if (++counter1 === 1) {
        counter1 = 0;
        return;
    }
    return true;
});
hook.tap("2", (name, age) => {
    console.log(2, "counter2", counter2);
    if (++counter2 === 2) {
        counter2 = 0;
        return;
    }
    return true;
});
hook.tap("3", (name, age) => {
    console.log(3, "counter3", counter3);
    if (++counter3 === 3) {
        counter3 = 0;
        return;
    }
    return true;
});
hook.call("zhufeng", 10);
