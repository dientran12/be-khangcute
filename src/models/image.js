module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image', {
        objectId: DataTypes.INTEGER,
        objectType: DataTypes.STRING,
        imageUrl: DataTypes.STRING,
        // Bạn có thể thêm các trường khác tùy thuộc vào nhu cầu, ví dụ: altText, order, v.v.
    }, {});
    return Image;
};
