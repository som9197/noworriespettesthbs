module.exports = function(sequelize, DataTypes) {

var Users = sequelize.define("users", {
  id: { 
    autoIncrement: true, 
    primaryKey: true, 
    type: DataTypes.INTEGER
  },
  email: {
    notEmpty: true,
    type: DataTypes.STRING,
    validate: {
      isEmail: true
    }
  },
  thepassword: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
}, {
  timestamps: false
});
 
return Users;
}