const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");

const Store = sequelize.define("Store", {
  name: { 
    type: DataTypes.STRING, 
    allowNull: false,
    validate: {
      len: [20, 60]   // ✅ store name must be 20–60 chars
    }
  },
  email: { 
    type: DataTypes.STRING, 
    allowNull: false, 
    unique: true,
    validate: {
      isEmail: true   // ✅ store email must also be valid
    }
  },
  address: { type: DataTypes.STRING, allowNull: false },
  avgRating: { type: DataTypes.FLOAT, defaultValue: 0 }
});

Store.belongsTo(User, { as: "owner", foreignKey: "ownerId" });

module.exports = Store;
