# tapable
## SyncHook
- 1. SyncHook：是一个类，参数是一个数组，用来指定回调函数的参数列表，里面的变量名没有用，但是数组的长度有用, 先注册的先执行
- 2. SyncBailHook：当事件回调函数的返回值不是undefined的时候，停止后续事件的执行
- 3. SyncWaterfallHook：上一个回调函数的结果作为下一个回调函数的参数
- 4. SyncLoopHook: 不停的循环执行回调函数，直到函数结果等于 undefined, 每次循环都是从头开始循环
- 5. AsyncParallelHook 异步并行执行钩子
- 6. AsyncParallelBailHook: 带保险的异步并行执行钩子,有一个任务返回值不为空就直接结束,对于promise来说，resolve还reject并没有区别,区别在是否传给它们的参数
- 7. AsyncSeriesHook: 异步串行钩子,任务一个一个执行,执行完上一个执行下一个
- 8. AsyncSeriesBailHook: 只要有一个返回了不为 undefined 的值就直接结束
- 9. AsyncSeriesWaterfallHook: 上一步的结果作为下一步的参数
