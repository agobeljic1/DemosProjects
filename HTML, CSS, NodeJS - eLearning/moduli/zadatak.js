const Sequelize = require("sequelize");

module.exports = function(sequelize,DataTypes){
    const zadatak = sequelize.define("zadatak",{
        naziv:Sequelize.STRING,
        postavka:Sequelize.STRING
    });
    return zadatak;
};