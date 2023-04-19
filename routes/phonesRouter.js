const { Router } = require('express');
const { phonesController } = require('./../controllers');

const phonesRouter = Router();

phonesRouter
  .route('/')
  .post(phonesController.createPhone)
  .get(phonesController.getPhones);

phonesRouter
  .route('/:phoneId')
  .get(phonesController.getPhoneById)
  .patch(phonesController.updatePhoneById)
  .put(phonesController.updateOrCreatePhoneById, phonesController.createPhone)
  .delete(phonesController.deletePhoneById);

phonesRouter.get('/:phoneId/processors', phonesController.getPhoneProcessors);

module.exports = phonesRouter;
