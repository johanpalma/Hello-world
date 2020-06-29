const { Router } = require('express');
const router = Router();

const { testJson, testPlaint } = require('../controllers/hello-word.controller');

router.get('/txt', testPlaint);
router.get('/json', testJson);

module.exports = router;
