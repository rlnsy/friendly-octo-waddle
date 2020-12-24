// lots of configurations taken from
// https://www.taniarascia.com/how-to-use-webpack/
const paths = require('./paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require("vue-loader/lib/plugin")

module.exports = {
    entry: {
        main: paths.src + '/index.js',
    },
    output: {
        path: paths.build,
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
			favicon: paths.src + '/images/icon.png',
            title: 'webpack Boilerplate',
            template: paths.src + '/template.html',
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: paths.public,
                    to: 'assets',
                    globOptions: {
                        ignore: ['*.DS_Store', '.gitkeep'],
                    },
                },
// Binrary copies are disabled for single-file mode (see Emscripten SINGLE_FILE)
				//{
					//from: paths.src + "/*/*.wasm",
					//to: "[name].[ext]",
				//},
            ],
        }),
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            "@": paths.src,
        },
        extensions: ["*", ".js", ".vue", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.(scss|css)$/,
                use: ["vue-style-loader", 'style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
                exclude: /node_modules\/(?!(bootstrap-vue|bootstrap)\/).*/,
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
			{test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource'},
        ]
    }
}
