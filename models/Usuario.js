const {DataTypes} = require("sequelize");
const sequelize = require("../config/db");

const Usuario = sequelize.define(
  "Usuario",
  {
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlphanumeric: true,
      },
    },
    salt: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    hash: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    type:{
        type: DataTypes.ENUM,
        values: ['admin', 'user'],
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Usuario;