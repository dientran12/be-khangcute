module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        // Các trường khác
    }, {});
    Product.associate = function (models) {
        Product.hasMany(models.ProductVersion, { as: 'versions' });
        Product.hasMany(models.Image, { foreignKey: 'objectId', constraints: false, scope: { objectType: 'Product' } });
    };
    return Product;
};
