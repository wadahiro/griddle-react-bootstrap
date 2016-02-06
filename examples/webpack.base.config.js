var webpack = require('webpack')

var path = require('path')
var objectAssign = require('object-assign')

var NODE_ENV = process.env.NODE_ENV

var env = {
    production: NODE_ENV && NODE_ENV.trim() === 'production',
    staging: NODE_ENV && NODE_ENV.trim() === 'staging',
    test: NODE_ENV && NODE_ENV.trim() === 'test',
    development: NODE_ENV && NODE_ENV.trim() === 'development' || typeof NODE_ENV === 'undefined'
}

objectAssign(env, {
    build: (env.production || env.staging)
})

module.exports = {
    target: 'web',
    entry: ['./src/App.tsx'],
    output: {
        path: path.join(__dirname, 'public/js'),
        publicPath: '/js/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.ts(x?)$/,
                exclude: [/node_modules/],
                loader: 'ts-loader',
                query: {
                    cacheDirectory: true
                }
            }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.tsx', '.ts', '.js']
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: env.development,
            __STAGING__: env.staging,
            __PRODUCTION__: env.production,
            __CURRENT_ENV__: "'" + (NODE_ENV) + "'"
        })
    ],
    devtool: '#inline-source-map',
    cache: true
}
