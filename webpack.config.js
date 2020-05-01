let path = require('path')
let MiniCssExtractPlugin = require("mini-css-extract-plugin");
let CopyPlugin = require('copy-webpack-plugin');
let VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    context: path.resolve(__dirname),
    entry: {
        app: [
            './src/app.js',
            './src/app.css'
        ],
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

        new CopyPlugin([
            { from: 'assets', to: 'assets', context: 'src' },
            { from: '**/*.html', context: 'src' },
        ]),
    ],

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
}
