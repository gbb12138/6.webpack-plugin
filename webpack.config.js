const path = require('path');
const DonePlugin = require('./plugin/done-plugin');
const AssetsPlugin = require('./plugin/assets-plugin');
const ArchivePlugin = require('./plugin/archive-plugin');
module.exports = {
    mode: 'development',
    devtool: false,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "main.js"
    },
    plugins: [
        new DonePlugin(),
        new AssetsPlugin(),
        new ArchivePlugin()
    ]
}
