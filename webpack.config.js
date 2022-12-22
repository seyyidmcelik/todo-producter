const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(s*)css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ],
    },
    resolve: {
        extensions: ['.jsx', '.js'],
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, './dist')
        },
        port: 3000,
        open: true
    }
}