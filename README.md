# indeed-clone
An indeed clone created using React js,
Install
With NPM

npm i create-react-readme
With Yarn

yarn add create-react-readme
Globally

npm i create-react-readme -g
You also can use it with npx without installing

npx create-react-readme

Usage
npm run create-react-readme ./package.json ./src/components/ ./readme.md -s ./setup_readme.md -u ./usage_readme.md -d ./dev_readme.md
You should create a script on your package.json file like so:

{
  ...
  scripts:{
    ...
    create-readme : "yarn create-react-readme ./package.json ./src/components/ ./readme.md -s ./setup_readme.md -u ./usage_readme.md -d ./dev_readme.md"
  }
}
So you can simply call it that way :

npm run create-readme

