module.exports = (sequelize, DataTypes) => {
    const ProductVersionSize = sequelize.define('ProductVersionSize', {
        productVersionId: DataTypes.INTEGER,
        sizeId: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
    }, {});
    ProductVersionSize.associate = function (models) {
        ProductVersionSize.belongsTo(models.ProductVersion, { foreignKey: 'productVersionId', as: 'productVersion' });
        ProductVersionSize.belongsTo(models.Size, { foreignKey: 'sizeId', as: 'size' });
    };
    return ProductVersionSize;
};
