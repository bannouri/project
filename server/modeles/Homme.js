module.exports = (sequelize, DataTypes) => {
    const Homme = sequelize.define("Homme", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      category: {
        type: DataTypes.ENUM("tshirt", "jeans", "jacket"),
        allowNull: false
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    });
  
    return Homme;
  };
  