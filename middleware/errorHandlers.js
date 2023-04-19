const createError = require('http-errors');
const {
  Sequelize: { BaseError, ValidationError: SequelizeValidationError },
} = require('./../models');

module.exports.dbErrorHandler = (err, req, res, next) => {
  if (err instanceof SequelizeValidationError) {
    const errors = err.errors.map(e => ({ status: 422, title: e.message }));

    return res.status(422).send({ errors });
  }

  if (err instanceof BaseError) {
    next(createError(500, 'Database Error'));
  }

  next(err);
};

module.exports.errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return;
  }
  const status = err.status ?? 500;

  res.status(status).send({
    errors: [
      {
        status,
        title: err.message ?? 'Server Error',
      },
    ],
  });
};
