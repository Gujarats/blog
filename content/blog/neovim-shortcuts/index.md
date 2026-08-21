---
author: "Gujarat Santana"
date: 2024-11-04
title: My Neovim and Tmux Shortcuts
summary: There are lots of shortcuts in Neovim that I personally don't remember like find and replace, rename variable for refactoring.
cardimage: ntmux.jpg
featureimage: ntmux.jpg
tags:
  - neovim
categories:
  - editor
toc: true
---

There are lots of shortcuts in Neovim that I personally don't remember like find and replace, rename variable for refactoring. Due to jumping around projct like Java and other project I sometimes switching between code editor and forgot about the shortcuts, this will help me at least in the future for my personal reference.

I'm finally using [LazyVim](https://www.lazyvim.org/) as the main Plugin it includes a lots of plugins(recommended to read the source to know the plugins). One of the cool plugin to help for productivity is the [which-key](https://github.com/folke/which-key.nvim) showing the keymaps just using `<space>?`, and if that's not enough LazyVim provides the documentation for the all [keymaps ](https://www.lazyvim.org/keymaps).

I've been using Neovim since a very long time, and this is My [dotfiles](https://github.com/Gujarats/dotfiles).
Please note that the shortcuts has been customize to my personal preference, so this is based on the `dotfiles` above. This shortcuts is heavily coming from craftzdog

## tmux

This tools I used daily to open lots of terminal
`ctrl + s` --> this is the prefix shortcuts for all of my tmux

### Fresh Install

```
`I` ->  capital I install all plugins in .config.tmux
```

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

### copy paste

I't not really straight forward when it comes to copy paste, but here the steps :

- `prefix + [`
- and then press `<space>`
- move using vimlike `jklh`
- press `y` -> this register the selected text to clipboard
- and use ctrl+v to paste

### For tab movement

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
 <leader>gB -> open the current buffer and line in the browser(github.com or else)
 <leader>be -> list all the opened file (buffer) showing menu on the left

#add surrounding
v -> block the word/code first
gsa -> add '/" single or double quote or anything to surround the word/code
 Many basic things which I don't cover
```

#### Go

This shortcut will only work on .go file extension

```
\sr -> run the current program
\sb -> go build
\st-> running test
--ctrl + c -> show test coverage (temp not available)
```

#### html

```
zc -> close current tag
zl -> open current closed tag
```

#### Bookmark

To remember the position of the code and adding tag and description to it

```
\t -> open bookmark window
\z -> add bookmark to current project
\g -> add bookmark to all (can be opened from anywhere)
shift + tab -> change cursor to other menu
```

#### Git

```
<leader>gg -> openup LazyGit
<leader>gb -> git blame
<leader>gf -> git file history
<leader>gs -> git status
<leader>ge -> git status with explorer on the left
```

### Refactoring

`<leader>` currently mapped to `<space>`

- `<leader>cr ` -> rename variable or function; Tested in `.lua` files it also rename the other files which calls the global function
- `<leader>sr ` -> open up new window buffer for find and replace using this [plugin](https://github.com/MagicDuck/grug-far.nvim)
  - type the text to replace with in the input text
  - to replace all use `\ + r`
  - to replace specific lines use `\ + l` the cursor needs to move to the specific shown text
  - open help use `g + ?` other shortcuts also appear on the menu
