const UserModel = require('../models/user_model')

const addUser = async (req, res) => {
    const { name, email, username, password } = req.body;
    //validate data
    if (!name || !email || !username || !password) {
        return res.status(400).json({ message: "All fields are mandatory" })
    }
    const user = new UserModel({name,email,username,password})
    try {
        const result = await user.save();
        res.status(201).json({message:"user registered successfully",user:result});
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
const updateUser = async (req, res) => {

}
const deleteUserById = async (req, res) => {
    const id= req.params.id;
    try {
        const result = await UserModel.findByIdAndDelete(id);
        res.status(200).json({message:"user deleted successfully",user:result});
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}
const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find(); //find all users
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
const getUserById = async(req,res) =>{
    const id= req.params.id;
    try {
        const user= await UserModel.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
module.exports = {
    addUser,
    updateUser,
    deleteUserById,
    getAllUsers,
    getUserById
}