
const router = require('express').Router();


const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');


// route for getting all users and creating a new user
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);


// route for id-specific tasks
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);


// route for adding and deleteing friends
router
    .route('/:id/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);


module.exports = router; 