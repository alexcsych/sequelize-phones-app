const { Processors, Phones } = require('./../models');

module.exports.getProcessors = async (req, res, next) => {
  try {
    const foundProcessors = await Processors.findAll({
      raw: true,
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: {
        model: Phones,
        attributes: ['brand', 'model'],
      },
    });

    res.status(200).send({ data: foundProcessors });
  } catch (e) {
    next(e);
  }
};
