# Husky + node.jsのGitHooks集

以下の内容が含まれています
- huskyインストール時に自動で `~/.huskyrc` をコピーしてGUIからGitを操作した時もhooksが動くようにします
- 適切なprefixがコミットメッセージに入っているかチェックします
- prefixに対して自動で絵文字を付与します
- pushの際にブランチ名をチェックします

### 使い方
- `.huskyrc` や `/libs` ファイルの中身を覗いて使いたい物を抜き取って使う
