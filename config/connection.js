// -----------------------------------------------------------------------------
// Program:  connection.js
// Purpose:  Use the sequelize ORM to create a connection to the database.
// Input:    <none>   
// -----------------------------------------------------------------------------
// Author:   Mark Harrison
// Date:     May 17, 2021
// -----------------------------------------------------------------------------


// -----------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------
const Sequelize = require('sequelize');
require('dotenv').config();


const sequelize = new Sequelize(process.env.MYSQL_URI);  // Create DB Connection


module.exports = sequelize;
