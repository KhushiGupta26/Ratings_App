const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true   // ✅ email format check
    }
  },
   password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [6]   // ✅ minimum 6 characters
    }
  },
  address: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.ENUM("admin", "user", "owner"),
    defaultValue: "user"
  }
});

module.exports = User;
