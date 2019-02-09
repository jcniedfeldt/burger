var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(dict, cb) {
      var cols=[];
      var vals=[];
      Object.keys(dict).forEach(col => {
        cols.push(col);
        vals.push(dict[col]);
      });
      orm.insertOne("burgers", cols,vals, function(res) {
        cb(res);
      });
    },
    update: function(objColValsDict, conditionDict, cb) {
      orm.updateOne("burgers", objColValsDict, conditionDict, function(res) {
        cb(res);
      });
    },
    
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;
  