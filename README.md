# Tech.Care – Patient Dashboard

## Project Overview

Tech.Care is a single-page patient dashboard developed as part of the Coalition Technologies Front-End Developer Skills Test.

The project converts the provided Adobe XD design into a responsive web interface using HTML, CSS and JavaScript.

Patient information is retrieved from the Coalition Technologies Patient Data API.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Chart.js
- Google Fonts (Manrope)
- Fetch API
- Basic Authentication

## Project Features

1. Patient Dashboard displaying Jessica Taylor's information.
2. Patient profile with personal and contact details.
3. Blood Pressure history chart using Chart.js.
4. Respiratory Rate information.
5. Temperature information.
6. Heart Rate information.
7. Diagnostic List.
8. Lab Results.
9. Responsive dashboard layout.

## Project Structure

```text
coalition-patient-dashboard/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── api.js
│   ├── chart.js
│   └── main.js
│
├── assets/
│   ├── fonts/
│   └── images/
│       ├── icons/
│       └── patient/
│
└── README.md
```

## API Integration

**API Endpoint:**

https://fedskillstest.coalitiontechnologies.workers.dev

**Request Method:** GET

**Authentication:** Basic Authentication

The Fetch API is used to retrieve patient information in JSON format.

The application selects Jessica Taylor's information and dynamically displays it on the dashboard.

## Blood Pressure Chart

Chart.js is used to visualize the patient's blood pressure history.

The chart displays:
- Systolic Blood Pressure
- Diastolic Blood Pressure
- Monthly History

## How to Run the Project

1. Download or extract the project folder.
2. Open the project folder in Visual Studio Code.
3. Install the Live Server extension.
4. Open `index.html`.
5. Right-click and select **Open with Live Server**.
6. The dashboard will open in your browser.

An active internet connection is required for API access, Google Fonts and Chart.js CDN.

## Developer

**Mohammed Ahmed Khan**

Front-End Development Skills Test  
Coalition Technologies