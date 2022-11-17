import { Sequelize } from "sequelize";
import initModels from "../models/init-models.js";
import { host, user, database, password, port } from "../constants/index.js";

const sequelize = new Sequelize(database, user, password, {
  host,
  dialect: "mysql",
  port,
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
    },
  },
  timezone: "+07:00",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

const Models = initModels(sequelize);

(async () => {
  await sequelize.sync();
})();

export default Models;
export { sequelize };
