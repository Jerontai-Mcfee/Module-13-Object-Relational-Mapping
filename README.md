# MOD13-C-ORM-E-Commerce-Back-End
--- E-Commerce Back End application



## Description

Creates the CRUD processes for and Internet retail produce database management application

## Table of Contents
1. [Description](#Description)
2. [User Story](#User-Story)
3. [Acceptance Criteria](#acceptance-criteria)
4. [Screenshots](#Screenshots)
5. [Installation](#Installation)
6. [Usage](#Usage)
7. [Recorded Video](#Recorded-Video)
8. [License](#license)
9. [Contact Info](#Contact-Info)


## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Screenshots

![seeds running image](/assets/images/module%2013%20screenshot.png)
![product created image](/assets/images/module%2013%20screenshot2.png)

## Installation

Clone the repository to your local machine and run 'npm install' to install all corresponding modules.
Create a new/update .env file in the main directory with your mysql credentials 
DB_NAME = 'e-commerce_db' 
DB_USER = 'root' 
DB_PASSWORD = 'enter your password here!'
Run 'mysql -u root -p' to ensure that you are logged into MySQL
Source the seed data by running 'SOURCE db/schema.sql' and then type 'quit' to exit MySQL
Run 'npm run seed'
Run 'node seeds/index.js'
Start the server using 'npm start' and go! :)


## Usage
- JavaScript with Node.js - base coding language
- express - to create the routers/endpoints
- dotenv - to hide the environmental variables (password/database)
- MySQL2 package - as the database dialect
- sequelize - to interpret the SQL commands
- Insomnia app - to perform the CRUD functions to the database 

## Recorded Video
***
###### [Back to Table of Contents](#Table-of-Contents)
https://drive.google.com/file/d/1JhSZHJ5r6sFNxAbzcClMIFvbkouzCQLa/view


## License
###### [Back to Table of Contents](#Table-of-Contents)
MIT

## Contact Info
Github repo link:https://github.com/Jerontai-Mcfee/Module-13-Object-Relational-Mapping
Email: jerontai07@gmail.com

