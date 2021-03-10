/**
 * Please spicify app pages here
 */

module.exports = [
  {
    title: 'Home',
    template: './src/pages/home.html',
    chunks: ['home', 'app', 'vendor'],
    filename: 'index.html'
  },
  {
    title: 'About',
    template: './src/pages/about.html',
    chunks: ['about', 'app', 'vendor'],
    filename: 'about.html'
  }
];
