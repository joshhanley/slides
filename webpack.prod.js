let path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');
let OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
let TerserJSPlugin = require('terser-webpack-plugin');

module.exports = merge(baseConfig, {
    mode: 'production',

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist_production')
    },

    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
});
