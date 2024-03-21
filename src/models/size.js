module.exports = (sequelize, DataTypes) => {
    const Size = sequelize.define('Size', {
        size: DataTypes.STRING,
        // Các trường khác
    }, {});
    Size.associate = function (models) {
        Size.hasMany(models.ProductVersionSize, { as: 'productVersions' });
    };
    return Size;
};
