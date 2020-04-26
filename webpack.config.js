let path = require('path')
let MiniCssExtractPlugin = require("mini-css-extract-plugin");
let OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
let TerserJSPlugin = require('terser-webpack-plugin');
let BrowserSyncPlugin = require('browser-sync-webpack-plugin')
let CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname),
    entry: {
        app: [
            './src/app.js',
            './src/app.css'
        ]
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },

    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),

        new BrowserSyncPlugin(
            {
                host: 'localhost',
                port: 3000,
                server: { baseDir: ['dist'] }
            }
        ),

        new CopyPlugin([
            { from: 'assets', to: 'assets', context: 'src' },
            { from: '**/*.html', context: 'src' },
        ]),
    ],
}
