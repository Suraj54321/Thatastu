const { Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'postgres',
    username: process.env.username,
    password: process.env.password,
    database: process.env.database,
    host: process.env.host,
});

module.exports=sequelize