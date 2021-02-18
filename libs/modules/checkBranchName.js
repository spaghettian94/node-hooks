/* eslint-disable no-console */
const getCurrentBranchName = require("./getCurrentBranchName");
const validBranches = require("../config/validBranches");

module.exports = () => {
  const errors = [];
  const branch = getCurrentBranchName();

  console.log(`[ブランチ命名規則チェック] current branch: ${branch}`);

  const isMatchValidBranch = validBranches.find((check) =>
    branch.match(check.name)
  );

  if (!isMatchValidBranch) {
    const validCommitBranches = validBranches
      .map((item) => `${item.name}`.replace(/^\//, "").replace(/\/.*$/, ""))
      .join(" | ");
    errors.push(`🚨 ブランチ命名規則エラー: "${branch}"\n許可ブランチ名: ${validCommitBranches}`);
  }

  if (!isMatchValidBranch.allowPush) {
    const validPushBranches = validBranches
      .filter((item) => !item.allowPush)
      .map((item) => `${item.name}`.replace(/^\//, "").replace(/\/.*$/, ""))
      .join(" | ");

    errors.push(`🚨 ブランチ命名規則エラー: "${branch}"\n次のブランチには直接Pushできません: ${validPushBranches}`);
  }

  return errors;
};
