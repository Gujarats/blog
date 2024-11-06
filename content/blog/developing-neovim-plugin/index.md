---
author: "Gujarat Santana"
date: 2024-10-06
title: Develop Neovim Plugins
summary: Introduction on how to create your own plugins for neovim.
tags:
  - editor
categories:
  - editor
toc: true
---

## Notes

This blog assumes that you have familiar with Lua programming language.
Introduction on how to create your own plugins for neovim. This writing is referring to the youtube video from here [Writing Plugins - It's Never Been Easier (NeovimConf 2022)](https://www.youtube.com/watch?v=PdaObkGazoU)

```php
$ -> this is the sign for executing the command in your terminal copy-past exclude the sign
: -> this is the sign for executing the command in your neovim, type all command including the sign
-- -> this is comment sigh to explain the code or command
```

## Hello World Plugin

```shell
$ mkdir first-plugin -- you can create it anywhere
$ cd first-plugin
$ touch NeovimConf.lua
$ nvim --cmd "set rtp+-." NeovimConf.lua
```

we can start to create the first plugin and wrote it something like this

```lua
local M = {}

M.Todo = function()
	print("hello plugin gsdev")
end

return M
```

Optional to reduce error message create empty stylua.toml for lsp to avoid error when opening the file

```shell
$ touch stylua.toml -- create this in the current dir and leave it empty
```

Now in order to call the plugin above we need to open the file with neovim also don't forget about the additional arguments `nvim --cmd "set rtp+-." NeovimConf.lua`.

```neovim
:lua require('NeovimConf').Todo()
```

### Override Cache Behaviour

When you change the print value and calling the Todo() function again it will print the previous value in order to change this we need to add some code in MYVIMRC (this is your init.lua)

```neovim
:e $MYVIMRC -- this will open the init.lua
```

And insert these code

```lua
-- Clear Cache Plugins for Development
vim.api.nvim_create_user_command("Test", function() -- value Test must be uppercase
  package.loaded.NeovimConf = nil -- clear cache
  require("NeovimConf").Todo() -- calling the plugin again to refresh the value
end, {})
```

refresh the MYVIMRC using `:source %` or `:so %`.
Now comeback to the plugin NeovimConf and call the Test using `:Test` this should print the current value of string in print() function.

### Nice to Know

if you want to search something in the current buffer (the current open file) then you can do this

```vim
:vimgrep textToSearch %
:copen
```

it should open the list of the textToSearch in the bottom

### Recap

Check above youtube video and learn more from there, thank you for reading
