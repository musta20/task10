const { DataTypes } = require("sequelize");

const { Sequelize } = require("./DbModule");

const UserSchema = Sequelize.define("tblUser", {
  intUserID:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true

  },
  strName: {
    type: DataTypes.STRING,
  },
  dtmDOB: {
    type: DataTypes.DATE,
  },
  strEmail: {
    type: DataTypes.STRING,
  },
  strPassword: {
    type: DataTypes.STRING,
  },
  blnIsActive: {
    type: DataTypes.BOOLEAN,
  },
},{
  timestamps: false,
  freezeTableName: true

});

module.exports = UserSchema;