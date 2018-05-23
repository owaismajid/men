const path = require('path');
const nodeExternals = require('webpack-node-externals');


const r = (dir, filePath)=>{
    if(dir==null) dir = __dirname
    return path.resolve(dir, filePath)
}

module.exports = {
    mode: 'development',
    entry: r(null, 'src/main.js'),
    target: 'node',
    output:{
        filename: 'www',
        path: r(null, 'dist/'),
        publicPath: "/public"
    },
    node:{
        __dirname: true,
        __filename: true,
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    devtool: 'inline-source-map',
    externals: [nodeExternals()],

}