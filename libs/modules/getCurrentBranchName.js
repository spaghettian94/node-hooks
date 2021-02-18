const execSync = require('child_process').execSync;

module.exports = () => {
  return execSync(`git branch --contains`)
    .toString()
    .match(/\* (?:\(no branch, rebasing )?([^)\n]+)/)[1];
};
