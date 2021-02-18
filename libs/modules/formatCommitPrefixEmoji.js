/* eslint-disable no-console */
/**
 * prefexがリスト内にある場合メッセージ先頭に対応する絵文字を追加
 */
const getCommitMessage = require("./getCommitMessage");
const setCommitMessage = require("./setCommitMessage");
const prefixEmojis = require("../config/prefixEmojis");

module.exports = () => {
  const message = getCommitMessage();
  const subject = message[0].trim();

  const prefix = subject.replace(/\W.*/, "").toLowerCase();
  if (prefix) {
    const emoji = prefixEmojis[prefix];
    if (emoji) {
      message[0] = `${emoji} ${subject}`;
      setCommitMessage(message);
      console.log("\nコミットに絵文字を追加しました。");
    }
  }
};
