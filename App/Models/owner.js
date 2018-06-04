module.exports = function(sequelize, DataTypes) {

var Owners = sequelize.define("owners", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  routeName: {
    type: DataTypes.STRING
  },
  fullname: {
    notEmpty: true,
    type: DataTypes.STRING
  },
  place: {
    notEmpty: true,
    type: DataTypes.STRING
  },
  emailaddress: {
    notEmpty: true,
    type: DataTypes.STRING,
    validate: {
      isEmail: true
    }
  },
  hasDog: {
    type: DataTypes.BOOLEAN
  },
  hasCat: {
    type: DataTypes.BOOLEAN
  },
  hasBird: {
    type: DataTypes.BOOLEAN
  },
  hasSnake: {
    type: DataTypes.BOOLEAN
  },
  moreInformation: {
    type: DataTypes.STRING
  },
}, {
  timestamps: false
});

  return Owners;
}