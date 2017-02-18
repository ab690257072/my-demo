var path = require('path')
var webpack = require('webpack')

module.exports = {
        entry: './src/main.js',
        output: {
            path: path.resolve(__dirname, './dist'),
            publicPath: '/dist/',
            filename: 'build.js'
        },
        module: {
            rules: [{
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            'scss': 'vue-style-loader!css-loader!sass-loader',
                            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                        }
                    }
                }, {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                }, {
                    test: /\.css$/,
                    loader: 'style-loader!css-loader'
                }, {
                    test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                    loader: 'file-loader'
                }, {
                    test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                    exclude: /favicon\.png$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
                    }]
                }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
