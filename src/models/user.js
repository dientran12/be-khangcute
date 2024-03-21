// models/user.js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    // Định nghĩa các trường cần thiết
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    // các trường khác
  }, {});

  User.associate = function (models) {
    // associations can be defined here
    User.hasOne(models.Cart, {
      foreignKey: 'userId',
      as: 'cart',
      onDelete: 'CASCADE', // Đảm bảo Cart bị xóa khi User bị xóa
    });

    User.hasMany(models.Order, {
      foreignKey: 'userId',
      as: 'orders',
      onDelete: 'SET NULL', // hoặc 'CASCADE' tùy thuộc vào yêu cầu kinh doanh
    });
  };

  return User;
};
