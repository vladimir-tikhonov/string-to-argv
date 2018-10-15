'use strict';

const path = require('path');
const merge = require('webpack-merge');

const SOURCE_PATH = path.resolve(__dirname, 'src');
const DIST_PATH = path.resolve(__dirname, 'dist');

const webpackMode = () => ({
    mode: 'production',
});

const entryPoint = () => ({
    entry: {
        index: path.join(SOURCE_PATH, 'index.ts'),
    },
});

const output = () => ({
    output: {
        path: DIST_PATH,
        libraryTarget: 'umd',
    },
});

const resolveOptions = () => ({
    resolve: {
        modules: [__dirname, 'node_modules'],
        extensions: ['.js', '.ts'],
    },
});

const typescriptLoader = () => ({
    module: {
        rules: [
            {
                test: /\.ts$/,
                include: [SOURCE_PATH],
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
        ],
    },
});

module.exports = merge(webpackMode(), entryPoint(), output(), resolveOptions(), typescriptLoader());
