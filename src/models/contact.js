import Sequelize from "sequelize";

export default function (sequelize, DataTypes) {
  return sequelize.define(
    "Contact",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      company: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      comment: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      time: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      timestamps: false,
    }
  );
}
