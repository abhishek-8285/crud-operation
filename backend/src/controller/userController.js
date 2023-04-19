const userModel = require("../model/userModel");

const createUser = async (req, res) => {
  try {
    const body = req.body;
    if (Object.keys(body).length === 0) {
      return res
        .status(400)
        .send({ status: false, Message: "body can not be empty" });
    }
    const data = await userModel.create(body);
    return res.status(200).send({ staus: true, data: data });
  } catch (error) {
    res.status(500).send({ status: false, data: error.Message });
  }
};

const readAllUser = async (req, res) => {
  try {
    const data = await userModel.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ status: false, data: error.Message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await userModel.deleteOne({ _id: id });
    res.status(200).send("document deleted successfully");
  } catch (error) {
    res.status(500).send({ status: false, data: error.Message });
  }
};

const updateUser = async (req, res) => {
  try {
    const body = req.body;
    const id = req.params.id;
    const findData = await userModel.findById(id);
    if (!findData) {
      return res
        .status(400)
        .send({ status: false, message: "user doesn't exist" });
    }
    const obj = {};
    if (Object.keys(body).length === 0) {
      return res
        .status(400)
        .send({ status: false, message: "required some fields" });
    }
    if (body.hasOwnProperty("email")) {
      obj["email"] = body.email;
    }
    if (body.hasOwnProperty("name")) {
      obj["name"] = body.name;
    }
    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      { ...obj },
      { new: true }
    );
    res.status(200).send({ status: true, data: updatedUser });
  } catch (error) {
    res.status(500).send({ status: false, data: error.Message });
  }
};

module.exports.updateUser=updateUser

module.exports.createUser = createUser;
module.exports.readAllUser = readAllUser;
module.exports.deleteUser = deleteUser;
