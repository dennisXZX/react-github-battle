const HTMLWebpackPlugin = require('html-webpack-plugin');

// *****************************************************************************
// init plugins start

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
})

// *****************************************************************************
// init plugins end

module.exports = {
    entry: [
        './app/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }            
        ]
    },
    devtool: 'source-map',
    plugins: [HTMLWebpackPluginConfig]
}