import UserService from "../service/user.service.js";

class UserController {
  async insertNewUserEmail(req, res) {
    const { email } = req.body;
    if (email) {
      const resultStatus = await UserService.insertUserEmail(email);
      return resultStatus
        ? res.status(200).send({
            message: "Insert user email successfully !",
            success: "Your email has been recored !",
          })
        : res.status(400).send({
            message: "Insert user email failure !",
            err: "An error occurred, check again !",
          });
    }
  }
  async insertNewUserContactInfo(req, res) {
    const { name, email, phone } = req.body;
    if (name && email) {
      const resultStatus = await UserService.insertUserContactInfo(
        name,
        email,
        phone
      );
      return resultStatus
        ? res.status(200).send({
            message: "Insert user contact info successfully !",
            success: "Your information has been recored !",
          })
        : res.status(400).send({
            message: "Insert user contact info failure !",
            err: "An error occurred, check again !",
          });
    } else {
      res.status(400).send({ message: "name and email is required field !" });
    }
  }
  async getAllContact(req, res) {
    const contacts = await UserService.getAllContact();
    return contacts
      ? res.status(200).send({
          message: "Insert user contact info successfully !",
          success: "Your information has been recored !",
          data: contacts,
        })
      : res.status(400).send({ message: "Failure!" });
  }
}

export default new UserController();
