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

  const validPrefix = [
    ...Object.keys(prefixEmojis),
    ...Object.keys(prefixEmojis).map((key) => `${prefixEmojis[key]} ${key}`),
  ];
  if (!validPrefix.some((prefix) => subject.match(new RegExp(`^${prefix}`)))) {
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
