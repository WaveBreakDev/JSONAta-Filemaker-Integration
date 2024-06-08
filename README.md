# JSONata and FileMaker Integration

This repository demonstrates how to integrate JSONata with FileMaker for seamless data processing. Follow the instructions below to set up the project and use the provided FileMaker file to test the integration.

## Prerequisites

- Node.js and npm installed on your system
- FileMaker Pro installed

## Getting Started

### Step 1: Set Up the Project Directory

1. Clone this repository:
   ```bash
   git clone https://github.com/WaveBreakDev/JSONAta-Filemaker-Integration.git
   cd JSONAta-Filemaker-Integration
   ```

### Step 2: Initialize the Project
1. Install the necessary dependencies
    ```bash
    npm install
    ```

### Step 3: Setup webpack configuration
1. Webpack is already configured in this project. The configuration file is located at:
`webpack.config.js`

### Step 4: Create the HTML and JavaScript Files
1. The HTML fiel (`public/index.html`) and the JavaScript file (`src/index.js`) are already created and configured

### Step 5: Create the Server File
1. The server file (`server.js`) is already created and configured to use Express to server the static files.

### Step 6: Build and Serve the Project
1. Build the project using Webpack:
```bash
npx webpack
```

2. Start the server:
```bash
node server.js
```

3. Open you browser and navigate to:
```bash
htp://localhost:300
```

### Step 7: Set Up FileMaker Scripts
1. Open the `JSONata_Demo.fmp12` FileMaker file.
2. Click the "Parse JSON" buton to test the integration.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for review.