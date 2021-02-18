/* eslint-disable no-console */
/**
 * コミットメッセージを書き込み
 * @param {string[]} message 行単位で分割されたコミットメッセージ
 */
const fs = require("fs");
const path = require("path");

const commitMessageFilePath = path.resolve(
  __dirname,
  "../../.git/COMMIT_EDITMSG"
);

module.exports = (message) => fs.writeFileSync(commitMessageFilePath, message.join('\n'), 'utf-8');
