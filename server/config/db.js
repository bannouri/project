const { Sequelize, DataTypes } = require("sequelize");  
const sequelize = new Sequelize("project", "root", "mouldih4", {
  host: "localhost",
  dialect: "mysql",
});


const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;


db.Homme = require("../modeles/Famme")(sequelize, DataTypes);
db.Famme = require("../modeles/Homme")(sequelize, DataTypes);

console.log("✅ Connected to database successfully");
  
// db.sequelize.sync({ alter: true })
//   .then(() => {
//     console.log("✅ Database is synced");
//   })
//   .catch((err) => {
//     console.error("❌ Error syncing database:", err);
//   });

module.exports = db;