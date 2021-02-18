/* eslint-disable no-console */
const branchNameCheck = require('../modules/checkBranchName');

const errors = [];

// ルールチェック
errors.push(...branchNameCheck());

// まとめて警告
if (errors.length > 0) {
  console.error(`\n|| ${errors.join('\n|| \n|| ')}\n`);
  console.error(`ルールエラー: ${errors.length}件`);
  throw new Error();
} else {
  console.log('ルールチェックが完了しました。');
}
