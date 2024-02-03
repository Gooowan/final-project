const { createUser, updateUser, saveUserInDatabase, updateUserInDatabase, updateUserFieldInDatabase} = require('../handlers/userHandlers');
const { User } = require("../models/user");

async function getUserListController(req, res) {
    try {
        const users = await User.find();
        res.render('users-list', { qty: users.length, users });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getUserByIdController(req, res) {
    const userId = req.params.id;
    try {
        const user = await User.findOne({ _id: userId });
        res.render('users-profile', { user: user});
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

function getUserFormController(req, res) {
    res.render('create-users-form');
}
async function getUserUpdateFormController(req, res) {
    const userId = req.params.id;
    try {
        const user = await User.findOne({ _id: userId });
        res.render('update-users-form', {user: user});
    } catch (error) {
        console.error('Error fetching users to update:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

function postUserController(req, res) {
    const userName = req.body.name;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    saveUserInDatabase(userName, lastname, email, password)
        .then((user) => res.render('users-profile', {user: user}))
        .catch(() => res.send('users NOT created'));
}

function putUserController(req, res) {
    const userId = req.params.id;
    const userObj = {};
    userObj.userName = req.body.name;
    userObj.lastname = req.body.lastname;
    userObj.email = req.body.email;
    userObj.password = req.body.password;
    updateUserInDatabase(userId, userObj)
        .then(() => res.redirect(`/users/${userId}`))
        .catch(() => res.send('users NOT updated'));
}

function patchUserController(req, res) {
    const userId = req.params.id;
    updateUserFieldInDatabase(userId, 'NEW')
        .then(() => res.redirect(`/users/${userId}`))
        .catch(() => res.send('users NOT updated'));
}

async function deleteUserController(req, res) {
    const userId = req.params.id;
    await User.deleteOne({ _id: userId });
    res.send('<span>users was deleted</span>');
}

module.exports = {
    getUserListController,
    getUserByIdController,
    getUserFormController,
    postUserController,
    putUserController,
    deleteUserController,
    getUserUpdateFormController,
    patchUserController
};