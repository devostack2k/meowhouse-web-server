import Models from "../database/sequelize.js";
import sequelize from "sequelize";
import moment from "moment";

const { contact, subscribe } = Models;

class UserEmailService {
  async getAllContact() {
    try {
      const result = await contact.findAll({
        attributes: [
          "id",
          "name",
          "email",
          "company",
          "comment",
          [
            sequelize.fn(
              "date_format",
              sequelize.col("time"),
              "%d-%m-%Y %H:%i:%s"
            ),
            "time",
          ],
        ],
      });

      const formatedResult = result.map((contact) => {
        return contact.dataValues;
      });
      return formatedResult;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
  async insertUserEmail(email) {
    try {
      const result = await subscribe.create({
        email,
        time: new Date(),
      });
      console.log(
        "🚀 ~ file: user.service.js ~ line 11 ~ UserEmailService ~ result",
        result
      );

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async insertUserContactInfo(name, email, phone) {
    try {
      const result = await contact.create({
        name,
        email,
        time: new Date(),
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export default new UserEmailService();
