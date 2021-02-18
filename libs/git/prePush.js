/* eslint-disable no-console */
const errors = [];

// まとめて警告
if (errors.length > 0) {
  console.error(`\n|| ${errors.join('\n|| \n|| ')}\n`);
  console.error(`ルールエラー: ${errors.length}件`);
  throw new Error();
} else {
  console.log('ルールチェックが完了しました。');
}
