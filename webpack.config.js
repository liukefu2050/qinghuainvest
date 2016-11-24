var path = require('path');
var webpack = require('webpack');
var isProduction = function (){
    return true;
};
module.exports = {
    entry: {
        index:'./src/js/index.jsx'
    },
    output: {
        path: 'dist/js/',
        filename: '[name].js'
    },
    devtool: isProduction()?null:'eval-source-map',
    //enable dev server
    devServer: {
        port: 4000,
        contentBase: './',
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            {test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'},
            {
                test: /\.jsx$/,
                loader: 'babel'
            }
            //{
            //    test: require.resolve("./src/js/component/globalEventHandler.js"),
            //    loader: "exports?globalEventHandler"
            //}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.scss'],
    },
    babel: {
        presets: ['es2015', 'stage-0', 'react'],
        plugins: ['transform-runtime', ["antd", {"style": "css"}]]
    },
    externals: {
        jquery: "window.jQuery",
        $: "window.jQuery"
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
        // new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity) // 这是第三方库打包生成的文件
    ]
};


if (process.env.NODE_ENV !== 'production') {
    module.exports.plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
} else {
    module.exports.devtool = '#source-map'
}
