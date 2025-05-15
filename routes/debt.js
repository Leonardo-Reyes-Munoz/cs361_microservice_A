const express = require('express');
const router = express.Router();

const {
  getAllYears,
  getSingleYear,
  getYearRange,
} = require('../controllers/debt');

router.get('/', getAllYears);
router.get('/:year', getSingleYear);
router.get('/inityear/:yearInit/endyear/:yearEnd', getYearRange);

module.exports = router;
