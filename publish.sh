#!/bin/bash

# remove previous publication
rm -rf public
mkdir public

# clone gh-pages branch from the local repo into a repo located within "public"
git clone .git --branch gh-pages public
  
# generate
hugo
  
# commit the changes in the clone and push them back to the local gh-pages branch    
cd public && git add --all && git commit -m "Publishing to gh-pages" && git push origin gh-pages

#change branch
cd ..
git checkout gh-pages

#removing all files except
shopt -s extglob
rm -rf -- !(public|git|publish.sh)

#moving all files to root
cd public/ && mv * .[^.]* .. 
cd ..

#publish
git push origin gh-pages
