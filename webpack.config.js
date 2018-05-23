const r = (dir, filePath)=>{
    if(dir==null) dir = __dirname
    return require('path').resolve(dir, filePath)
}

module.exports = {
    mode: 'development',
    entry: r(null, 'src/main.js'),
    target: 'node',
    output:{
        filename: 'www',
        path: r(null, 'dist/')
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
}