const express = require('express');
const router = express.Router();

const {createActivites, updateActivites, deleteActivites, getSingleActivites, getAllActivites} = require('../controllers/todoController');

router.route('/').post(createActivites);
router.route('/:id').put(updateActivites);
router.route('/:id').delete(deleteActivites);
router.route('/:id').get(getSingleActivites);
router.route('/').get(getAllActivites);

module.exports = router