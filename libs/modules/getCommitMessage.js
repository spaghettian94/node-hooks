/* eslint-disable no-console */
/**
 * コミットメッセージを取得
 * @return {string[]} 行単位で分割されたコミットメッセージ
 */
const fs = require("fs");
const path = require("path");

const commitMessageFilePath = path.resolve(
  __dirname,
  "../../.git/COMMIT_EDITMSG"
);

module.exports = () => fs.readFileSync(commitMessageFilePath, "utf-8").split('\n');
