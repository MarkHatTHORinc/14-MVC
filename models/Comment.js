// -----------------------------------------------------------------------------
// Class:    Comment.js
// Purpose:  Model for Comment Table.
// Input:    <none>   
// -----------------------------------------------------------------------------
// Author:   Mark Harrison
// Date:     May 22, 2021
// -----------------------------------------------------------------------------


// -----------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------const { Sequelize, Model, DataTypes } = require('sequelize');
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


// -----------------------------------------------------------------------------
// Class: Comment - Initialize table by extending Sequelize's Model Class
// -----------------------------------------------------------------------------
class Comment extends Model {}

// Set up fields and rules for Comment model
Comment.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'post',
          key: 'id'
        }
      },
      commentText: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
      }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);


// -----------------------------------------------------------------------------
// Module Exports
// -----------------------------------------------------------------------------
module.exports = Comment;
