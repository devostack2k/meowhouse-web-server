import { DataTypes } from "sequelize";

import _contact from "./contact.js";
import _subscribe from "./subscribe.js";

export default function initModels(sequelize) {
  const contact = _contact(sequelize, DataTypes);
  const subscribe = _subscribe(sequelize, DataTypes);
  return {
    contact,
    subscribe,
  };
}
