const express= require('express');
const { getAllUsers, addUser, getUserById, updateUser, deleteUserById } = require('../controller/user_controller');

const router= express.Router();

router.route("/").get(getAllUsers).post(addUser);

router.route("/:id").get(getUserById).put(updateUser).delete(deleteUserById);

module.exports= router;