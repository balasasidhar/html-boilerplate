const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Only for Pro-Developers
 */

const generateHtmlPlugin = ({ title, template, chunks, filename }) => {
  return new HtmlWebpackPlugin({
    title,
    template,
    chunks,
    filename
  });
};

function populateHtmlPlugins(pages) {
  res = [];
  pages.forEach((page) => {
    res.push(generateHtmlPlugin(page));
  });
  return res;
}

module.exports = populateHtmlPlugins;
