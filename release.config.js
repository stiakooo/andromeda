const config = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ["@semantic-release/npm", {
      "npmPublish": false,
      "tarballDir": "dist",
    }],
    '@semantic-release/github'
  ]
};

module.exports = config;