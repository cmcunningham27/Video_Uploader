const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

class Videos extends Model {};

Videos.init(
    {
        id: {
            type: DataType.INTEGER,
            allowNull: false,
            primarykey: true,
            autoIncrement: true
        },
        path: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'videos'
    }
);

module.exports = Videos;