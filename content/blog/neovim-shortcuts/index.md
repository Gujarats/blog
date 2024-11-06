---
author: "Gujarat Santana"
date: 2024-11-04
title: My Neovim and Tmux Shortcuts
subtitle: This shortcuts is heavily coming from craftzdog
summary: There are lots of shortcuts in Neovim that I personally don't remember like find and replace, rename variable for refactoring.
tags:
  - neovim
categories:
  - editor
toc: true
---

There are lots of shortcuts in Neovim that I personally don't remember like find and replace, rename variable for refactoring. Due to jumping around projct like Java and other project I sometimes switching between code editor and forgot about the shortcuts, this will help me at least in the future for my personal reference.

My [dotfiles ](https://github.com/Gujarats/dotfiles)

Please note that the shortcuts has been customize to my personal preference, so this is based on the `dotfiles` above.

## tmux

This tools I used daily to open lots of terminal
`ctrl + s` --> this is the prefix shortcuts for all of my tmux

### Terminal Creation

```
 `c` -> create new terminal tab
 `,` -> rename the current terminal tab
 `x` -> kill the current terminal tab
 `-` -> create new terminal on the right (current tab)
 `|` -> create new terminal on the bottom (current tab)

```

### Cursor Movement

For the current tab

```
 `j` -> move up
 `k` -> move down
 `l` -> move right
 `h` -> move left
```

For tab movement

```
 `n` -> next tab
 `p` -> previous tab
 `0-9` -> choose index tab

```

### Reszie Window

- after prefix hold `ctrl` and press arrow up,down,left,right keyboard

## NeoVim

This is the shortcuts for this [branch](https://github.com/Gujarats/dotfiles/tree/nvim-v0.10.2)

### Exploration

```
- <space> + e -> open up folder explorer root project dir
- sf -> open up file browser in the current opened dir
  - c -> create new file or dir
  - a -> enter filename to filter files
- ;f -> find files by name
- ;r -> search text int the project dir

```

### Editor

```
 te + enter -> create new tab
 <tab> and <shift><tab> -> switching tabs
 sv -> split window to the right
 ss -> split window to bottom
 Many basic things which I don't cover
```

#### html

```
zc -> close current tag
l -> open current closed tag
```

### Refactoring

`<leader>` currently mapped to `<space>`

- `<leader>cr ` -> rename variable or function; Tested in `.lua` files it also rename the other files which calls the global function
- `<leader>sr ` -> open up new window buffer for find and replace using this [plugin](https://github.com/MagicDuck/grug-far.nvim)
  - type the text to replace with in the input text
  - to replace all use `\ + r`
  - to replace specific lines use `\ + l` the cursor needs to move to the specific shown text
  - open help use `g + ?` other shortcuts also appear on the menu
