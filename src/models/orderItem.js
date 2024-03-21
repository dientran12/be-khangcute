module.exports = (sequelize, DataTypes) => {
    const OrderItem = sequelize.define('OrderItem', {
        orderId: DataTypes.INTEGER,
        productVersionSizeId: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
        price: DataTypes.DECIMAL
    }, {});

    OrderItem.associate = function (models) {
        OrderItem.belongsTo(models.Order, {
            foreignKey: 'orderId',
            as: 'order'
        });
        OrderItem.belongsTo(models.ProductVersionSize, { foreignKey: 'productVersionSizeId', as: 'productVersionSize' });
    };

    return OrderItem;
};
