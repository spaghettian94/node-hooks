module.exports = [
  {
    name: 'master',
    allowPush: false
  },
  {
    name: 'develop',
    allowPush: false
  },
  {
    name: 'staging',
    allowPush: false
  },
  {
    name: /^(feature|hotfix|fix)\/.+/,
    allowPush: false
  }
];