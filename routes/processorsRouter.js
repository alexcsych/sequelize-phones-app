const { Router } = require('express');
const { processorsController } = require('../controllers');

const processorsRouter = Router();

processorsRouter.get('/', processorsController.getProcessors);

processorsRouter.get(
  '/:processorId/phones',
  processorsController.getProcessorPhones
);

module.exports = processorsRouter;
