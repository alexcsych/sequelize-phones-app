const createError = require('http-errors');
const { Processor } = require('./../models');

module.exports.getProcessors = async (req, res, next) => {
  const { limit = 10, offset = 0 } = req.query;

  try {
    const foundProcessors = await Processor.findAll({
      raw: true,
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      limit,
      offset,
      order: ['id'],
    });

    res.status(200).send({ data: foundProcessors });
  } catch (e) {
    next(e);
  }
};

module.exports.getProcessorPhones = async (req, res, next) => {
  const { processorId } = req.params;

  try {
    const foundProcessor = await Processor.findByPk(processorId);

    if (!foundProcessor) {
      return next(createError(404, 'Processor Not Found'));
    }

    const foundPhones = await foundProcessor.getPhones({
      raw: true,
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    res.status(200).send({ data: foundPhones });
  } catch (e) {
    next(e);
  }
};
