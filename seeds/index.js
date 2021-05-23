// -----------------------------------------------------------------------------
// Program:  index.js
// Purpose:  Create and Populate database
// Input:    <none>   
// -----------------------------------------------------------------------------
// Author:   Mark Harrison
// Date:     May 22, 2021
// -----------------------------------------------------------------------------


// -----------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------
const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');


// seed the database
const seedAll = async () => {
  await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
  
  await seedPosts();
    console.log('\n----- POSTS SEEDED -----\n');

  await seedComments();
    console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();