const config = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/github',


    // ["@semantic-release/npm", {
    //   "npmPublish": false,
    //   "tarballDir": "dist",
    // }],
    // ["@semantic-release/github", {
    //   "assets": "dist/*.tgz"
    // }]
  ]
};

module.exports = config;