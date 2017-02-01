'use strict';
module.exports = function(sequelize, DataTypes) {
  var Director = sequelize.define('Director', {
    name: DataTypes.STRING(128)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Director;
};
