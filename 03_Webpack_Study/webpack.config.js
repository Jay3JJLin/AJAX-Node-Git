const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const webpack = require('webpack')

const config = {
    // 打包模式（development 开发模式-使用相关内置优化）
    // mode: 'development',
    // __dirname 表示用来动态获取当前文件模块所属目录的绝对路径 (可以理解为根目录，后面接在该目录下所需文件的路径)
    // 入口
    // entry: path.resolve(__dirname, 'src/login/index.js'),
    entry: {
        'login': path.resolve(__dirname, 'src/login/index.js'),
        'content': path.resolve(__dirname, 'src/content/index.js'),
        'publish': path.resolve(__dirname, 'src/publish/index.js')
    },

    // 出口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './[name]/index.js', //占位符[name]
        clean: true //生成打包后内容之前，清空输出目录
    },

    // 插件（给 Webpack 提供更多功能）
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/login.html'), // 模板文件
            filename: path.resolve(__dirname, './dist/login/index.html'), // 输出文件
            useCdn: process.env.NODE_ENV === 'production', // 生产模式下使用 cdn 引入的地址
            chunks: ['login'] // 引入哪些打包后的模块（和 entry入口 的 key 一致）
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/content.html'), // 模板文件
            filename: path.resolve(__dirname, './dist/content/index.html'), // 输出文件
            useCdn: process.env.NODE_ENV === 'production', // 生产模式下使用 cdn 引入的地址
            chunks: ['content']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/publish.html'), // 模板文件
            filename: path.resolve(__dirname, 'dist/publish/index.html'), // 输出文件
            useCdn: process.env.NODE_ENV === 'production', // 生产模式下使用 cdn 引入的地址
            chunks: ['publish']
        }),
        new MiniCssExtractPlugin({// 生成（提取） css 文件
            filename: './[name]/index.css', //css同js，利用占位符输出
        }),
        new webpack.DefinePlugin({
            // key 是注入到打包后的前端 JS 代码中作为全局变量
            // value 是变量对应的值(在cross-env注入到 node.js 中的环境变量字符串)
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
    ],

    // 加载器（让 webpack 识别更多模块文件内容）
    module: {
        rules: [
            {
                test: /\.css$/i,
                // use: ["style-loader", "css-loader"],
                // 从后向前执行
                use: [process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.less$/i,
                use: [
                    // compiles Less to CSS
                    process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i, //匹配以哪些文件结尾时，对这些文件的打包
                type: 'asset',
                generator: {
                    filename: 'assets/[hash][ext][query]'
                }
            }
        ],
    },

    // 优化
    optimization: {
        // 最小化
        minimizer: [
            // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释（保证js代码还能压缩）
            `...`,
            new CssMinimizerPlugin(),
        ],
        // 代码分割
        splitChunks: {
            chunks: 'all', // 所有模块动态非动态移入的都分割分析
            cacheGroups: { // 分隔组
                commons: { // 抽取公共模块
                    minSize: 0, // 抽取的chunk最小大小字节
                    minChunks: 2, // 最小引用数
                    reuseExistingChunk: true, // 当前 chunk 包含已从主 bundle 中拆分出的模块，则它将被重用
                    name(module, chunks, cacheGroupKey) { // 分离出模块文件名
                        const allChunksNames = chunks.map((item) => item.name).join('~') // 模块名1~模块名2
                        return `./js/${allChunksNames}` // 输出到 dist 目录下位置
                    }
                }
            }
        }
    },

    // 解析
    resolve: {
        // 别名
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
};

// 开发环境下使用 sourcemap 选项
if (process.env.NODE_ENV === 'development') {
    config.devtool = 'inline-source-map'
}

// 生产环境下使用相关配置
if (process.env.NODE_ENV === 'production') {
    // 外部扩展（让 webpack 防止 import 的包被打包进来）
    config.externals = {
        // key：import from 语句后面的字符串  后者
        // value：留在原地的全局变量（最好和 cdn 在全局暴露的变量一致）前者
        'bootstrap/dist/css/bootstrap.min.css': 'bootstrap',
        'axios': 'axios',
        'form-serialize': 'serialize',
        '@wangeditor/editor': 'wangEditor'
    }
}

module.exports = config //导出