const express = require('express');
const controllers = require('../controllers/');
const auth = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/', auth, controllers.task.getTasks);
router.post('/', auth, controllers.task.createTask);
router.patch('/completed', auth,controllers.task.changeComplteTask);
router.patch('/description', auth,controllers.task.changeTask);
router.delete('/', auth,controllers.task.deleteTask);

module.exports = router;

