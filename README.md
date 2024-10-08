# Garage Management System Frontend

## Overview
This is the frontend component of the Garage Management System, built with Angular 18. It provides a user-friendly interface for managing garage operations, including vehicle tracking, service scheduling, and customer management.

## Technologies Used
- Angular 18.x
- Angular Router for navigation
- HttpClient for API requests
- Angular Material (if used) for UI components
- SCSS for styling (or mention any other styling approach you're using)

## Setup Instructions

### Prerequisites
- Node.js 16.x or higher (or the version required by Angular 18)
- npm 8.x or higher
- Angular CLI 18.x

### Steps
1. Clone the repository:
   ```
   git clone https://github.com/Arzgui/garageFront.git
   cd garageFront
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure the backend API endpoint:
   - Open `src/environments/environment.ts`
   - Update the `apiUrl` property with your backend API endpoint:
     ```typescript
     export const environment = {
       production: false,
       apiUrl: 'http://localhost:8080/api'
     };
     ```

4. Start the development server:
   ```
   ng serve
   ```

The application will be available at `http://localhost:4200`.

## Available Scripts

- `ng serve`: Runs the app in development mode
- `ng test`: Launches the test runner
- `ng build`: Builds the app for production
- `ng lint`: Lints the project
- `ng e2e`: Runs end-to-end tests (if configured)


## Features
- Vehicle management
- Service scheduling
- Customer management


