const { Router } = require('express');

const router = Router();

router.use('/phones', phonesRouter);

module.exports = router;
