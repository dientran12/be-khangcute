// models/cart.js
module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define('Cart', {
        // Định nghĩa các trường cần thiết
        // Ví dụ: totalItems, totalPrice,...
    }, {});

    Cart.associate = function (models) {
        // associations can be defined here
        Cart.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user',
        });
    };

    return Cart;
};
