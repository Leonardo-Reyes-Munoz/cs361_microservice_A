const getAllYears = async (req, res) => {
  res.send('Get all years of debt data');
};

const getSingleYear = async (req, res) => {
  const { year } = req.params;
  res.send(`Get ${year} debt data`);
};

const getYearRange = async (req, res) => {
  const { yearInit, yearEnd } = req.params;
  res.send(`Get ${yearInit} debt data to ${yearEnd}`);
};

module.exports = {
  getAllYears,
  getSingleYear,
  getYearRange,
};
