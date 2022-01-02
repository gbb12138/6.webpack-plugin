class AssetsPlugin {
    constructor(options) {
        this.options = options
    }
    apply(compiler) {
        // 每当compile开始一次存的构建，创建一个新的compilation实例，会触发一个钩子事件
        compiler.hooks.compilation.tap('AssetsPlugin', (compilation) => {
            // chunk代码块， asset产出的资源
            compilation.hooks.chunkAsset.tap('AssetsPlugin', (chunk, filename) => {
                console.log(chunk, filename, 'compilation打包事件');
            })
        });
    }
}

module.exports = AssetsPlugin;
