let path = require('path')
let MiniCssExtractPlugin = require("mini-css-extract-plugin");
let OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
let TerserJSPlugin = require('terser-webpack-plugin');
let BrowserSyncPlugin = require('browser-sync-webpack-plugin')
let CopyPlugin = require('copy-webpack-plugin');
let VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    context: path.resolve(__dirname),
    entry: {
        app: [
            './src/app.js',
            './src/app.css'
        ],
        'old/old': [ // todo: Remove this
            './src/old/old.js'
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

            {
                test: /\.vue$/,
                use: 'vue-loader',
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),

        new VueLoaderPlugin(),

        new BrowserSyncPlugin(
            {
                host: 'localhost',
                port: 3000,
                server: { baseDir: ['dist'] }
            }
        ),

        new CopyPlugin([
            { from: 'assets', to: 'assets', context: 'src' },
            { from: 'assets', to: 'old/assets', context: 'src' }, // todo: Remove this
            { from: '**/*.html', context: 'src' },
        ]),
    ],
}
