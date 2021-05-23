// -----------------------------------------------------------------------------
// Class:    Post.js
// Purpose:  Model for Post Table.
// Input:    <none>   
// -----------------------------------------------------------------------------
// Author:   Mark Harrison
// Date:     May 22, 2021
// -----------------------------------------------------------------------------


// -----------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------const { Sequelize, Model, DataTypes } = require('sequelize');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


// -----------------------------------------------------------------------------
// Class: Post - Initialize table by extending Sequelize's Model Class
// -----------------------------------------------------------------------------
class Post extends Model { }

// Set up fields and rules for Post model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post_content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
  }
);


// -----------------------------------------------------------------------------
// Module Exports
// -----------------------------------------------------------------------------
module.exports = Post;
