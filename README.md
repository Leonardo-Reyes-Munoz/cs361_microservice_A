# cs361_microservice_A

Microservice A is a data generation microservice. It will retrieve structured U.S. historical debt outstanding
calendar years 1790 through 2024. This information is accessed via the API provided by U.S. Depart of treasury:

https://fiscaldata.treasury.gov/datasets/historical-debt-outstanding/historical-debt-outstanding

## Communication Contract
When running programm locally, you can request data programmatically via HTTP GET requests at port 3000.

Initiate server by running `npm start` in terminal

***There are 3 API end points, all which accept GET request only.***

1. GET request for all U.S. Historical Debt Data from 1790 through 2024
- localhost:3000/api/v1/debt
2. GET request for U.S. Historical debt data for a specified year between 1790 and 2024, inclusive
- localhost:3000/api/v1/debt/:year
3. GET request for U.S. Historical debt data for a specified year range within 1790 and 2024, inclusive
- localhost:3000/api/v1/debt/inityear/:inityear/endyear/:endyear

**Example call using Python:**
```
import requests

url = 'http://localhost:3000/api/v1/debt/inityear' + f'/{start_year}' + f'/endyear' + f'/{end_year}'
response = requests.get(url)
```

**Example call how to receive data using Python:**
```
data = response.json()

for entry in data["debt_in_year_range"]:
  year = entry["year"]
  debt = float(entry["debt])
  print(f"The debt for {year} was ${debt:,.2f}")
```

***Once data is parsed, the structured of the data will be an object and a given key wich will contain
an array of objects containing a year and debt information for that year:

<img width="354" alt="Screenshot 2025-05-21 at 9 18 23 PM" src="https://github.com/user-attachments/assets/989cdf1a-e37a-4b9e-b27a-d2269976b639" />
<img width="354" alt="Screenshot 2025-05-21 at 9 18 11 PM" src="https://github.com/user-attachments/assets/34b2ed55-cb40-4ae8-8f7b-d944de07b00c" />
<img width="354" alt="Screenshot 2025-05-21 at 9 17 48 PM" src="https://github.com/user-attachments/assets/88df9741-a4db-4448-b0e9-52de72c6ec3a" />

### UML Diagram
<img width="932" alt="Screenshot 2025-05-21 at 9 22 45 PM" src="https://github.com/user-attachments/assets/fed673fe-d89a-4c7d-8473-f92d84b72ebd" />

