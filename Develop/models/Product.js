// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: Number,
      allowNull: false,
      primaryKey: true,
    },
    product_name: {
      type: String,
      allowNull: false,
    },
    price: {
      type: Number,
      allowNull: false,
    },
    category_id: {
      type: Number,
      allowNull: true,
      references: {
        model: 'category',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
