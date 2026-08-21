# My Personal Tech Blog

## prerequisites

- GO version go1.23.2 darwin/arm64
- [Dart Sass ](https://gohugo.io/hugo-pipes/transpile-sass-to-css/#dart-sass)
- Hugo : hugo v0.136.5+extended darwin/arm6 [link](https://github.com/gohugoio/hugo/releases/tag/v0.136.5) choose extended version
- git submodule update --init --recursive -> to download dependencies such as qubt fo theme

How to deploy

```shell
$ hugo
$ git add .
$ git commit -m "publish"
$ git push
```

After the command above github will trigger build action so github pages will be updated

# Notes

- Configuration base `url` and `theme` exist in `config` folder
