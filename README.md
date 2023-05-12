# E-COMMERCE_BACK_END

## Description
This back end application will set a connection with a database through a server so the user will be able to GET, POST PUT and DELETE information stored in the database.
This is what we call a RESTful API, which is an architectural style for application programming interfaces. it uses HTTP requests to access and use stored data.

- npm Mysql2 package helped setting a connection between Node.js and MySql to create and and store information to tables in databases and keep track of that information.
- Sequelize is a Node.js-based Object Relational Mapper that makes it easy to work with MySQL.
- dotenv allows separating secrets from the source code, it is useful in a collaborative environment.

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

## Installation
- mysql2 npm: command --- npm i mysql2
- sequelize npm: command --- npm i sequelize
- command to install dotenv: npm i dotenv
- command to seed database: npm run seed
- command to run connect to server: npm start

## Usage
Walkthrough Video URL: https://drive.google.com/file/d/148qkmhXxry05AYFrQ23djlRv-On8Ja92/view

## Credits
- https://www.npmjs.com/package/dotenv
- https://www.npmjs.com/package/mysql
- https://www.npmjs.com/package/sequelize
- https://www.restapitutorial.com/httpstatuscodes.html
- https://sequelize.org/docs/v6/core-concepts/assocs/
- https://www.digitalocean.com/community/tutorials/how-to-use-sequelize-with-node-js-and-mysql

## License
MIT License

Copyright (c) [2023] [Ulises_Garfias]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.