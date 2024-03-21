module.exports = (sequelize, DataTypes) => {
    const ProductVersion = sequelize.define('ProductVersion', {
        productId: DataTypes.INTEGER,
        style: DataTypes.STRING,
        // Các trường khác
    }, {});
    ProductVersion.associate = function (models) {
        ProductVersion.belongsTo(models.Product, { foreignKey: 'productId', as: 'product' });
        ProductVersion.hasMany(models.ProductVersionSize, { as: 'sizes' });
        ProductVersion.hasMany(models.Image, { foreignKey: 'objectId', constraints: false, scope: { objectType: 'ProductVersion' } });
    };
    return ProductVersion;
};
