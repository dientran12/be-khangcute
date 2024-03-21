module.exports = (sequelize, DataTypes) => {
    const CartItem = sequelize.define('CartItem', {
        cartId: DataTypes.INTEGER,
        productVersionId: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER
    }, {});

    CartItem.associate = function (models) {
        CartItem.belongsTo(models.Cart, {
            foreignKey: 'cartId',
            as: 'cart'
        });
        CartItem.belongsTo(models.ProductVersionSize, {
            foreignKey: 'productVersionSizeId',
            as: 'productVersionSize'
        });
    };

    return CartItem;
};
