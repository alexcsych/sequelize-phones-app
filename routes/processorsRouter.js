const { Router } = require('express');
const { processorsController } = require('../controllers');

const processorsRouter = Router();

processorsRouter.get('/', processorsController.getProcessors);

module.exports = processorsRouter;
