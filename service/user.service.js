const userModel = require("../models/user.model");

const createUser = (obj) => {
  try {
    const user = userModel.create(obj);
    return user;
  } catch (error) {
    return error;
  }
};

const findAllUsers = async() => {
  try {
    const data = await userModel.find({});
    
    if (data.length > 0) {
      return data;
    } else {
      return "No users found";
    }
  } catch (error) {
    return error;
  }
};

const findById = (id) => {
  try {
    const user = userModel.findById(id);
    if (user) {
      return user;
    } else {
      return `User with id ${id} not found`;
    }
  } catch (error) {
    return error;
  }
};

const updateById = async (id, newValue) => {
  const query = { _id: id };
  const value = newValue;
  try {
    const user = await userModel.updateOne(query, value);
    if (user) {
      return user;
    }
  } catch (error) {
    return error;
  }
};

const deleteById = async (id) => {
  const query = { _id: id };
  const deleted = await userModel.deleteOne(query);
  try {
    if (!deleted) {
      return `Not deleted`;
    }
  } catch (error) {
    return error;
  }
};

module.exports = { createUser, findAllUsers, findById, updateById, deleteById };
