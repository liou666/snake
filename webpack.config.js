const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: "development",
    //入口文件
    entry: "./src/main.ts",
    //出口文件
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        //告诉webpack不是用箭头函数
        environment: {
            arrowFunction: false
        }
    },
    //使用的插件
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                //
                test: /\.ts$/,
                //使用的loader(从下向上执行)
                use: [
                    //配置babel
                    {
                        //指定加载器
                        loader: "babel-loader",
                        //设置babel
                        options: {
                            //设置定义环境
                            presets: [
                                [
                                    //环境插件
                                    "@babel/preset-env",
                                    //配置文件
                                    {
                                        //兼容浏览器版本
                                        targets: {
                                            'chrome': "58",
                                            "ie": "11"
                                        },
                                        //指定corejs的版本
                                        "corejs": "3",
                                        //使用corejs的方式 usage按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },

                    "ts-loader",
                ],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    //引入postcss(解决不同浏览器对css的兼容性问题)
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: "last 2 versions"
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    "less-loader"
                ],
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: "./dist",
        //是否实时监听
        inline: true
    },
    //设置引用的模块
    resolve: {
        extensions: ['.ts', '.js']
    }
}