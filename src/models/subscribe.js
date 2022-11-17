import Sequelize from "sequelize";

export default function (sequelize, DataTypes) {
  return sequelize.define(
    "Subscribe",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
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
