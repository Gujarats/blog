---
title: Starting My Jekyll Again
summary: After a few months of never touching the static site generator, especially Jekyll, now I feel like it is the time for me to get started with Jekyll.
date: 2024-11-03
cardimage: jekyll_logo.png
featureimage: jekyll_logo.png
caption: wikipedia
toc: true
---

After a few months of never touching the static site generator, especially Jekyll, now I feel like it is the time for me to get started with Jekyll, and honestly this is my first time using the command line for Jekyll.

## Goals

It’s very simple goal :

1. Has profile picture shown
2. Has summary on the experience shown

In the current repository it only has 1 MD file that contains my experiences, but I’ve no idea on how to customize the theme thus I like to dig a little bit on how to use Jekyll.

## Tools

Some tools that I found for the installation and prerequisite in order to make use of jekyll.

Here what I installed on my local :

1. Installing **rbenv** [https://github.com/rbenv/rbenv](https://github.com/rbenv/rbenv) - installing this tool for easier management version of ruby in the future.
2. Installing ruby with rbenv

   ```shell
   $ rbenv install 3.3.5
   $ rbenv global 3.3.5
   $ ruby –version

   ```

3. Installing jekyll

   ```shell
   gem install jekyll

   ```

The installation should be done and `jekyll` is ready to use now.

## How I start using Jekyll

1. On the current repository create new branch
2. Delete everything except .git file
3. Following the guide from [this steps](https://jekyllrb.com/docs/step-by-step/01-setup/) there should be 10 steps (2024 Nov)
4. Copy paste the js,css,and images from previous branch and making my adjustment
5. Copy the content in this case my CV in md file
6. Deploy

## Deployment

I use static deployment on github pages because I’m going to use different types of static site generator in the future such as hugo or even gatsby or perhaps nextJS. The `.github/workflows/static.yml` is used for working example for my next project.
