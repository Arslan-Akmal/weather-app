# 🌤️ Angular Weather App

A responsive and modern weather application built with Angular 20. This app fetches real-time weather data using an external API and displays current weather conditions based on the city input by the user.

# Live Demo

https://weather-app-7c14e.web.app

## 🚀 Features

- 🔍 Search weather by city
- 🌡️ Display temperature, condition, humidity, wind, etc.
- 🎨 Clean and responsive UI with Bootstrap
- 🔐 Environment-based API key management

## 🛠️ Tech Stack

- **Framework:** Angular 20
- **Styling:** Bootstrap 5
- **API Source:** OpenWeatherMap API (or any other weather API you used)

## 📁 Project Structure

weather-app/
├── src/
│ ├── app/
│ │ ├── components/
│ │ │ └── weather/
│ │ │ └── weather.component.ts
│ │ └── services/
│ │ └── weather.service.ts
│ ├── assets/
│ └── environments/
│ ├── environment.ts
│ └── environment.prod.ts
├── angular.json
├── package.json
└── README.md

## ⚙️ Setup Instructions

1. **Clone the repository**
 git clone https://github.com/your-username/weather-app.git
 cd weather-app

# Install dependencies
npm install

# Add API Key

Steps to Get an API Key:
Go to https://openweathermap.org/api

Create a free account or log in.

Navigate to the "API keys" section in your profile.

Generate a new API key.

Add this key in the environment.ts file:

 // src/environments/environment.ts

export const environment = {
  production: false,
  weatherApiKey: 'YOUR_OWN_API_KEY_HERE'
};


# Run the app locally

ng serve
Visit http://localhost:4200 in your browser.
