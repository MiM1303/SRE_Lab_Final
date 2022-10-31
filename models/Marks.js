module.exports = (sequelize, DataTypes) => {
    const Marks = sequelize.define('Marks', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userid:{
            type: DataTypes.INTEGER,
            ref: 'Users',
            allowNull: false,
        },
        english: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        mathematics: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        physics: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        chemistry: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        biology: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        gk: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        HSC:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        SSC:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        Viva:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        total:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        quota:{
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
            timestamps: true,
    });
    
    return Marks;
}