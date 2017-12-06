---
author: "Gujarat Santana"
date: 2017-12-05
linktitle: Setup my own blog using Hugo, Sass, and Gulp
title: Setup my own blog using Hugo, sass, and Gulp 
tags : 
  - web 
categories : 
  - web 
weight: 10
---

## Installation

There are several steps to setup this blog so that it is up and running in your local using `hugo`, `sass`, and `gulp`.

### Install Hugo

I'm using Ubuntu 16.04 and the easiest way to install it is to download the package from : 
`https://github.com/gohugoio/hugo/releases` you can choose `.deb` and install it

## Install gulp
You need to have `npm` installed so that you can just run this command

```
npm install -g gulp
```

## Install sass
In ubuntu you need to install ruby first so here is the steps : 
```
 sudo apt-get update
 sudo apt-get isntall rubygems
 sudo apt-get install rubygems
 sudo apt-get install rubygems-integration
 sudo apt-get install ruby-dev
 sudo gem install sass
```
you will see this final output : `Sass 3.5.3 (Bleeding Edge)`.

## Live Reload in all css,js, and content
To enable live realod here is the step

 - Start hugo in root project

 ```
 hugo server
 ```

 - Start gulp to  watch all the `.js`, `.css` files changes and make it to minified files

 ```
 cd themes/code-editor
 gulp watch
 ```

 for specific extension files see the gulpfile.js eg : `gulp watch css` for watching only css file changes.

 - Start sass to watch file changes for `.scss` file extension and compile it to theme.css

 ```
 sass --watch theme.scss:theme.css
 ```
 After all above steps you are ready to changes the `.js`, `.scss` file and watch it reload automatically.


## Known Issues

 - Found issue when running `gulp` and got an error like 

 ```error
 ERROR :: gulp-git require.extensions.hasownproperty is not a function
 ```  
 you can set the dependencies for `require-dir` to version `0.3.2` 
