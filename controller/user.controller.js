const userService = require("../service/user.service");
// const userModel = require("../models/user.model")

const createUser = (req, res) => {
  const data = req.body;
  const result = userService.createUser(data);
  return res
    .status(201)
    .json({ msg: `User Created Successfully`, data: result });
};

const findAllUsers = async(req, res) => {
  const findAll = await userService.findAllUsers();

  
  if (!findAll) {
    return res.json({ msg: `Details not found` });
  } else {
    return res.status(201).json({ msg: `Details found`, data: findAll });
  }
};

const findById = async (req, res) => {
  const find = req.params.id;
  const findOne = await userService.findById(find);
  if (!findOne) {
    return res.json({ msg: `Detail not found` });
  } else {
    return res.status(201).json({ msg: `Detail found`, data: findOne });
  }
};

const updateById = async (req, res) => {
  const id = req.params.id;
  const value = req.body;
  const userId = await userService.updateById(id, value);
  if (userId) {
    return res.status(201).json({ msg: `UPDATED`, value: userId });
  }
};

const deleteById = async (req, res) => {
  const id = req.params.id;
  const deleted = await userService.deleteById(id);
  if (deleted) {
    return res.status(201).json({ msg: `DELETED`,  });
  }
};

module.exports = { createUser, findAllUsers, findById, updateById, deleteById };
