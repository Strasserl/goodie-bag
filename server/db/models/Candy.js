const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('candy', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    notEmpty: true,
  },
  quantity: {
    isNumeric: true,
    validate: { max: 10 },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://images.freeimages.com/images/large-previews/11b/candy-1326928.jpg',
  },
});
