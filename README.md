# MEN (Mongoose Express and Node)
Using MEN with **webpack**_(back-end)_ as build system, **babel** to use es6 syntax and **pug** as html engine

## Gitting Starting
### Prerequisites
you need to have **node** and **yarn** installed globally in your system
_you can use npm for sure_
### Installing
#### 1. clone this repo 
```bash 
$ git clone git@github.com:owaismajid/men.git /men
```
#### 2. setup enviroment.js file
* rename example.enviroment.js to enviroment.js
* change the variables of
    * app
    * database auth
    * _you can after that include your api keys here_
#### 3. run yarn to install dependencies
```bash
$ yarn install
```
#### 4. start the build
```bash
// to build the project into /dist directory
$ yarn build 
// Or run the build and start the server via
$ yarn start
```
## Project Structure
Spearating Models from Views and Controllers gives you a good way to maintain your project

type |extintion | description
---  |  ---     | ---
view| .pug | dispalying data to users
schema| .schema.js | define an entity also called model
controller| .controller.js | how viwes interact with models
service| .service.js | data manibulation ex: get data from data base 
module| .module.js| functions you need in project
