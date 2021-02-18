/* eslint-disable no-console */
/**
 * prefexがリスト内にあるかどうかをチェック
 */
const getCommitMessage = require("./getCommitMessage");
const prefixEmojis = require("../config/prefixEmojis");

module.exports = () => {
  const errors = [];
  const message = getCommitMessage();
  const subject = message[0].trim();
  if (subject === "") {
    errors.push("🚨 コミットメッセージエラー: コミット件名が空白です。");
  }

  const prefix = subject.replace(/\W.*/, "").toLowerCase();
  const validPrefix = [
    ...Object.keys(prefixEmojis),
    ...Object.keys(prefixEmojis).map((key) => `${key} ${prefixEmojis[key]}`),
  ];
  if (!validPrefix.includes(prefix)) {
    errors.push(
      `🚨 コミットメッセージエラー: コミットメッセージにはprefixをつけてください。\n${Object.keys(
        prefixEmojis
      ).join(" | ")}`
    );
  }

  if (/\S/.test(message[1])) {
    errors.push(
      "🚨 コミットメッセージエラー: コミットメッセージの2行目は空白にしてください。"
    );
  }

  return errors;
};
