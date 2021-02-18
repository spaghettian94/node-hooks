module.exports = {
  hooks: {
    'commit-msg': 'node ./libs/git/commitMsg',
    'pre-push': 'node ./libs/git/prePush'
  }
}