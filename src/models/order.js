module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        userId: DataTypes.INTEGER,
        shippingAddress: {
            type: DataTypes.STRING,
        },
        totalAmount: {
            type: DataTypes.INTEGER,
        },
    }, {});

    Order.associate = function (models) {
        Order.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user'
        });
        Order.hasMany(models.OrderItem, {
            foreignKey: 'orderId',
            as: 'items'
        });
    };

    return Order;
};
