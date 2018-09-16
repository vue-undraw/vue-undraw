const path = require('path');
const merge = require('webpack-merge');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = merge(require('./webpack.base'), {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: {
            root: 'VueUnDraw',
            amd: 'vue-undraw',
            commonjs: 'vue-undraw'
        },
        libraryTarget: 'umd',
    },
    externals: {
      vue: 'vue',
    },
    mode: 'production',
    plugins: [
      new VueLoaderPlugin()
    ]
});
