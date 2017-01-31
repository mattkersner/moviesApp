'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Directors', [
      { name: 'Alejandro G. Iñárritu',  createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { name: 'Damien Chazelle',        createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { name: 'Dan Gilroy',             createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { name: 'James Gunn',             createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { name: 'George Miller',          createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { name: 'Alex Garland',           createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { name: 'Denis Villeneuve',       createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { name: 'Yorgos Lanthimos',       createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { name: 'Stanley Kubrick',        createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { name: 'Neill Blomkamp',         createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { name: 'Francis Ford Coppola',   createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { name: 'Woody Allen',            createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { name: 'Paul Thomas Anderson',   createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { name: 'Michael Powell',         createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { name: 'Martin Scorsese',        createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { name: 'Quentin Tarantino',      createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { name: 'Joel Coen',              createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { name: 'Roman Polanski',         createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { name: 'Sam Mendes',             createdAt: '2017-01-31', updatedAt: '2017-01-31' }
    ], {});
  }
};
