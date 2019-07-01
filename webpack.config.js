const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const config = {
    entry: './src/quill-divider.js',
    output: {
        filename: 'quill-divider.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'QuillDivider',
        libraryTarget: 'umd'
    },
    target: 'web',
    mode: 'production',
    externals: {
        quill: {
            commonjs: 'quill',
            commonjs2: 'quill',
            amd: 'quill',
            root: 'Quill'
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            sourceMapContents: false
                        }
                    },
                ],
            },
            {
                test: /\.(jpg|png|gif)$/i,
                include: /src/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ],
            },
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src/')
                ],
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env', { modules: false }]]
                    }
                }
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false,
                        conditionals: true,
                        unused: true,
                        comparisons: true,
                        sequences: true,
                        dead_code: true,
                        evaluate: true,
                        join_vars: true,
                        if_return: true
                    },
                    output: {
                        comments: false
                    }
                }
            })
        ]
    }
}

module.exports = config
