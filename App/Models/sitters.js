module.exports = function(sequelize, DataTypes) {

var Sitters = sequelize.define("sitters", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  routeName: {
    type: DataTypes.STRING
  },
  full_name: {
    notEmpty: true,
    type: DataTypes.STRING
  },
  city: {
    notEmpty: true,
    type: DataTypes.STRING
  },
  email: {
    notEmpty: true,
    type: DataTypes.STRING,
    validate: {
      isEmail: true
    }
  },
  years_of_experience: {
    type: DataTypes.INTEGER
  },
  would_sit_dog: {
    type: DataTypes.BOOLEAN
  },
  would_sit_cat: {
    type: DataTypes.BOOLEAN
  },
  would_sit_bird: {
    type: DataTypes.BOOLEAN
  },
  would_sit_snake: {
    type: DataTypes.BOOLEAN
  },
  additional_comments: {
    type: DataTypes.STRING
  },
}, {
  timestamps: false
});

  return Sitters;
}