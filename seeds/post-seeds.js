// -----------------------------------------------------------------------------
// Program:  post-seeds.js
// Purpose:  Build and populate the post table.
// Input:    <none>   
// -----------------------------------------------------------------------------
// Author:   Mark S Harrison
// Date:     May 22, 2021
// -----------------------------------------------------------------------------


// -----------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------
const { Post } = require('../models');


// -----------------------------------------------------------------------------
// Post Data Values
// -----------------------------------------------------------------------------
const postData = [
    {
        title: 'Jeff Bezos to step down as Amazon CEO',
        post_content: "Amazon CEO Jeff Bezos will leave his post later this year, turning the helm over to the company’s top cloud executive, Andy Jassy, according to an announcement Tuesday. Bezos will transition to executive chairman of Amazon’s board.",
        user_id: 5
    },
    {
        title: "Elon Musk has officially been made the ‘Technoking of Tesla’",
        post_content: 'Tesla has officially given CEO Elon Musk the title of “Technoking of Tesla” in a new regulatory filing on Monday. Musk will retain his position as chief executive officer, Tesla said. Zach Kirkhorn, the company’s chief financial officer, has also been given a new title: “Master of Coin.”',
        user_id: 1
    },
    {
        title: "Chipmaker’s Path Gets Tougher From Here",
        post_content: "Advanced Micro Devices Inc. Chief Executive Officer Lisa Su, who took the helm in 2014, has returned the chipmaker to profitability, taken market share from Intel Corp. and banished concerns about the company running out of cash.",
        user_id: 4
    },
]


// -----------------------------------------------------------------------------
// Use Sequalize to do multi-insert into table.
// -----------------------------------------------------------------------------
const seedPosts = () => Post.bulkCreate(postData);


// -----------------------------------------------------------------------------
// Module Exports
// -----------------------------------------------------------------------------
module.exports = seedPosts;