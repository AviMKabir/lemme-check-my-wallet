// module.exports = function(sequelize, DataTypes) {
//   var Example = sequelize.define("Example", {
//     text: DataTypes.STRING,
//     description: DataTypes.TEXT
//   });
//   return Example;
// };
//------------ Previous Code---------------------



//------------Config database to name / budget---
module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    name: DataTypes.STRING,
    budget: DataTypes.INTEGER
  });
  return Example;
};
