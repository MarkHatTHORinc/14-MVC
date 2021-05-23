// -----------------------------------------------------------------------------
// Program:  comment-seeds.js
// Purpose:  Build and populate the comment table.
// Input:    <none>   
// -----------------------------------------------------------------------------
// Author:   Mark S Harrison
// Date:     May 22, 2021
// -----------------------------------------------------------------------------


// -----------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------
const { Comment } = require('../models');


// -----------------------------------------------------------------------------
// Comment Data Values
// -----------------------------------------------------------------------------
const commentData = [
    {
        user_id: 6,
        post_id: 1,
        commentText: "Time for the founder to slow down."
    },
    {
        user_id: 6,
        post_id: 2,
        commentText: "Long live the king!"
    },
    {
        user_id: 6,
        post_id: 3,
        commentText: "AMD has a big opportunity to step in during the chip shortage."
    }
]


// -----------------------------------------------------------------------------
// Use Sequalize to do multi-insert into table.
// -----------------------------------------------------------------------------
const seedComments = () => Comment.bulkCreate(commentData);


// -----------------------------------------------------------------------------
// Module Exports
// -----------------------------------------------------------------------------
module.exports = seedComments;