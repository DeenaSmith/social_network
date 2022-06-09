
const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');
const { route } = require('./user-routes');


// route to get all thoughts and add a new thought
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);



// route for id-specific tasks
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);



// route for reactions
router
    .route('/:thoughtId/reactions')
    .post(addReaction)
    .delete(deleteReaction);


module.exports = router;