module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fathers_name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        mothers_name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        subject_choice: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        quota: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    }, {
            timestamps: true,
    });
    
    return Users;
}