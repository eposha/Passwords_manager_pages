const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = (env, argv) => {
    const isProduction = argv.mode === "production";
    const config = {
        resolve: {
            extensions: ['.js', '.jsx'], // which extensions you don`t need add
        },
        entry: "./src/index.jsx",
        output: { // in which folder and file will be saving production version
            path: __dirname + '/pages',
            filename: "bundle.js",
            publicPath: '/Passwords_manager_pages/pages'
        },
        module: {
            rules: [ // for which files what use
                {
                    test: /.jsx?$/,
                    use: ["babel-loader"]
                },
                {
                    test: /.s?css$/,
                    use: [
                        isProduction
                            ? MiniCssExtractPlugin.loader
                            : "style-loader",
                        "css-loader",
                        "sass-loader",
                    ]
                }
            ],
        },
        plugins: [
            new webpack.ProgressPlugin(), // show line loader in terminal   
            new CleanWebpackPlugin(), // clean 
            new HtmlWebpackPlugin({ // write output file to the template 
                template: "./src/index.html"
            }),
        ],
        devServer: {
            hot: true,
            historyApiFallback: true
        }
    };

    if (isProduction) {
        config.plugins.push(new MiniCssExtractPlugin({ // do min css
            filename: "[name].css",
        }));
    }

    return config;
};