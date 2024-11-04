---
author: "Gujarat Santana"
date: 2024-11-04
title: My Neovim Shortcuts
subtitle: This shortcuts is heavily coming from craftzdog
summary: There are lots of shortcuts in Neovim that I personally don't remember like find and replace, rename variable for refactoring.
tags:
  - neovim
categories:
  - editor
---

There are lots of shortcuts in Neovim that I personally don't remember like find and replace, rename variable for refactoring. Due to jumping around projct like Java and other project I sometimes switching between code editor and forgot about the shortcuts, this will help me at least in the future for my personal reference.

My [dotfiles ](https://github.com/Gujarats/dotfiles)

Please note that the shortcuts has been customize to my personal preference, so this is based on the `dotfiles` above.

# tmux

This tools I used daily to open lots of terminal
`ctrl + s` --> this is the prefix shortcuts for all of my tmux

## Terminal Creation

- `c` -> create new terminal tab
- `,` -> rename the current terminal tab
- `x` -> kill the current terminal tab
- `-` -> create new terminal on the right (current tab)
- `|` -> create new terminal on the bottom (current tab)

## Cursor Movement

For the current tab

- `j` -> move up
- `k` -> move down
- `l` -> move right
- `h` -> move left

For tab movement

- `n` -> next tab
- `p` -> previous tab
- `0-9` -> choose index tab

## Reszie Window

- after prefix hold `ctrl` and press arrow up,down,left,right keyboard

# NeoVim

This is the shortcuts for this [branch](https://github.com/Gujarats/dotfiles/tree/nvim-v0.10.2)

## Exploration

- <space> + e -> open up folder explorer root project dir
- sf -> open up file browser in the current opened dir
  - c -> create new file or dir
  - a -> enter filename to filter files
- ;f -> find files by name
- ;r -> search text int the project dir

## Refactoring

- find and replace TODO
- rename current variable TODO
