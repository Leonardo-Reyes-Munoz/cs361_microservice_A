const getAllYears = async (req, res) => {
  const url =
    'https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_outstanding?sort=-record_date&format=json&page[number]=1&page[size]=236';

  const debt_by_year = [];
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }

    raw_data = await response.json();

    raw_data.data.map((current_year) => {
      const year = {
        year: current_year.record_calendar_year,
        debt: current_year.debt_outstanding_amt,
      };
      debt_by_year.push(year);
    });
  } catch (error) {
    console.log(error.message);
  }

  res.status(200).send({ debt_by_year });
};

const getSingleYear = async (req, res) => {
  const { year } = req.params;

  const url = `https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_outstanding?filter=record_calendar_year:eq:${year}`;

  const debt_in_specified_year = [];
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }

    raw_data = await response.json();

    raw_data.data.map((current_year) => {
      const year = {
        year: current_year.record_calendar_year,
        debt: current_year.debt_outstanding_amt,
      };
      debt_in_specified_year.push(year);
    });
  } catch (error) {
    console.log(error.message);
  }

  res.status(200).send({ debt_in_specified_year });
};

const getYearRange = async (req, res) => {
  const { yearInit, yearEnd } = req.params;

  let yearRange = '';
  for (let i = yearInit; i < yearEnd; i++) {
    yearRange = yearRange + `${i},`;
  }

  console.log(yearRange);
  const url = `https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_outstanding?filter=record_calendar_year:in:(${yearRange}${yearEnd})`;

  const debt_in_year_range = [];
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }

    raw_data = await response.json();

    raw_data.data.map((current_year) => {
      const year = {
        year: current_year.record_calendar_year,
        debt: current_year.debt_outstanding_amt,
      };
      debt_in_year_range.push(year);
    });
  } catch (error) {
    console.log(error.message);
  }

  res.status(200).send({ debt_in_year_range });
};

module.exports = {
  getAllYears,
  getSingleYear,
  getYearRange,
};
