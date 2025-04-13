const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function override(config, env) {
    // Modify the HtmlWebpackPlugin to remove the favicon injection
    config.plugins = config.plugins.map((plugin) => {
        if (plugin instanceof HtmlWebpackPlugin) {
            // Remove the favicon option if it exists
            delete plugin.userOptions?.favicon;
        }
        return plugin;
    });

    return config;
};