let path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');
let BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(baseConfig, {
    mode: 'development',

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist_dev')
    },

    plugins: [
        new BrowserSyncPlugin(
            {
                host: 'localhost',
                port: 3000,
                server: { baseDir: ['dist_dev'] }
            }
        ),
    ],
});
