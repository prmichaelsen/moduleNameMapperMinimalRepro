const path = require("path");
const { merge } = require("webpack-merge");
const base = require("./webpack.base");

const testConfig = {
    resolve: {
        alias: {
            "@Mocks": path.resolve(__dirname, "tests/__mocks__"),
            "@Data": path.resolve(__dirname, "tests/__data__"),
        },
    },
};

module.exports = [
    merge(base.integrationConfig, testConfig),
    merge(base.photoEditorConfig, testConfig),
];
