// -----------------------------------------------------------------------------
// Program:  user-seeds.js
// Purpose:  Build and populate the user table.
// Input:    <none>   
// -----------------------------------------------------------------------------
// Author:   Mark S Harrison
// Date:     May 22, 2021
// -----------------------------------------------------------------------------


// -----------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------
const { User } = require('../models');


// -----------------------------------------------------------------------------
// User Data Values
// -----------------------------------------------------------------------------
const userData = [
    {
        username: "elon_musk",
        password: "passwordEM"
    },
    {
        username: "bill_gates",
        password: "passwordBG"
    },
    {
        username: "jensen_huang",
        password: "passwordJH"
    },
    {
        username: "lisa_su",
        password: "passwordLS"
    },
    {
        username: "jeff_bezos",
        password: "passwordJB"
    },
    {
        username: "mark_harrison",
        password: "passwordMH"
    },
]


// -----------------------------------------------------------------------------
// Use Sequalize to do multi-insert into table.
// -----------------------------------------------------------------------------
const seedUsers = () => User.bulkCreate(userData);

// -----------------------------------------------------------------------------
// Module Exports
// -----------------------------------------------------------------------------
module.exports = seedUsers;