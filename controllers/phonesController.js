const _ = require('lodash');
const createError = require('http-errors');
const { Phone } = require('./../models');

module.exports.createPhone = async (req, res, next) => {
  const { body } = req;
  try {
    const createdPhone = await Phone.create(body);
    const preparedPhone = _.omit(createdPhone.get(), [
      'createdAt',
      'updatedAt',
    ]);
    res.status(201).send({ data: preparedPhone });
  } catch (e) {
    next(e);
  }
};

module.exports.getPhones = async (req, res, next) => {
  const { limit = 10, offset = 0 } = req.query;

  try {
    const foundPhones = await Phone.findAll({
      raw: true,
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      limit,
      offset,
      order: ['id'],
    });
    res.status(200).send({ data: foundPhones });
  } catch (e) {
    next(e);
  }
};

module.exports.getPhoneById = async (req, res, next) => {
  const { phoneId } = req.params;

  try {
    const foundPhone = await Phone.findByPk(phoneId, {
      raw: true,
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
    if (!foundPhone) {
      return next(createError(404, 'Phone Not Found'));
    }
    res.status(200).send({ data: foundPhone });
  } catch (e) {
    next(e);
  }
};

module.exports.updatePhoneById = async (req, res, next) => {
  const {
    body,
    params: { phoneId },
  } = req;

  try {
    const [, [updatedPhone]] = await Phone.update(body, {
      raw: true,
      where: { id: phoneId },
      returning: true,
    });

    if (!updatedPhone) {
      return next(createError(404, 'Phone Not Found'));
    }

    const preparedPhone = _.omit(updatedPhone, ['createdAt', 'updatedAt']);

    res.status(200).send({ data: preparedPhone });
  } catch (e) {
    next(e);
  }
};

module.exports.updateOrCreatePhoneById = async (req, res, next) => {
  const {
    body,
    params: { phoneId },
  } = req;

  try {
    const [, [updatedPhone]] = await Phone.update(body, {
      raw: true,
      where: { id: phoneId },
      returning: true,
    });

    if (!updatedPhone) {
      body.id = phoneId;
      return next();
    }

    const preparedPhone = _.omit(updatedPhone, ['createdAt', 'updatedAt']);

    res.status(200).send({ data: preparedPhone });
  } catch (e) {
    next(e);
  }
};

module.exports.deletePhoneById = async (req, res, next) => {
  const { phoneId } = req.params;

  try {
    const deletedPhonesCount = await Phone.destroy({ where: { id: phoneId } });

    if (!deletedPhonesCount) {
      return next(createError(404, 'Phone Not Found'));
    }

    res.status(204).end();
  } catch (e) {
    next(e);
  }
};
