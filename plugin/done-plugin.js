class DonePlugin{
    constructor(options) {
        this.options = options;
    }
    apply (compiler) {
        debugger;
        // compiler.hooks.done.tap('aa', () => {
        //     console.log('Done')
        // })
        compiler.hooks.done.tapAsync('donePlugin', (stats,callback) => {
            setTimeout(() => {
                console.log('DonePlugin', stats)
                callback()
            }, 2000)
        })
    }
}
module.exports = DonePlugin;
