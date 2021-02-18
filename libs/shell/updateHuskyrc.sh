#!/bin/sh

# ~/.huskyrc で PATHの読み込み記述を実行しないと
# GitKrakenやVSCodeのGitツールなどGUI経由の操作がうまく動かないので
# 予め用意した物からコピーしてくるShellScript

if [ $(dirname $0)/.userHuskyrc -nt ~/.huskyrc ]; then
  mv ~/.huskyrc ~/.huskyrc.old
  cp -p $(dirname $0)/.userHuskyrc ~/.huskyrc
  echo "~/.huskyrcを置換しました"
fi
