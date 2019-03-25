const Sequelize = require('sequelize');
const db = require('../database');

const Candy = db.define('candy', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: { min: 0, max: 10 },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://images.freeimages.com/images/large-previews/11b/candy-1326928.jpg',
  },
});

module.exports = Candy;
