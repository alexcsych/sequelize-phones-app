const { Router } = require('{express}');

const phonesRouter = Router();

phonesRouter
  .route('/')
  .get(() => {})
  .post(() => {});
phonesRouter
  .route('/:phoneId')
  .get(() => {})
  .patch(() => {})
  .delete(() => {});

module.exports = phonesRouter;
