const jsonata = require('jsonata');

function receiveDataFromFileMaker(data) {
  try {
    const parsedData = JSON.parse(data);
    document.getElementById('filemaker-data').innerText = parsedData.data;
    document.getElementById('jsonata-query').value = parsedData.query;
    alert('Received data from FileMaker: ' + parsedData.data + ' and query: ' + parsedData.query);

    // Process the data using JSONata
    processJSONData(parsedData.data, parsedData.query);
  } catch (error) {
    alert('Error processing data from FileMaker: ' + error.message);
  }
}

function sendDataToFileMaker(dataToSend) {
  alert('Attempting to send data to FileMaker: ' + dataToSend);
  if (typeof FileMaker !== 'undefined') {
    FileMaker.PerformScript('HandleDataFromWebViewer', dataToSend);
    alert('Data sent to FileMaker');
  } else {
    alert('FileMaker.PerformScript is not available in the web browser.');
  }
}

function processJSONData(jsonInput, query) {
  try {
    const json = JSON.parse(jsonInput);
    const expression = jsonata(query);
    const result = expression.evaluate(json);
    document.getElementById('json-output').innerText = JSON.stringify(result, null, 2);

    // Send the processed data back to FileMaker
    sendDataToFileMaker(JSON.stringify(result));
  } catch (error) {
    alert('Error processing JSON data: ' + error.message);
  }
}

// Expose functions to the global scope for the HTML to access
window.receiveDataFromFileMaker = receiveDataFromFileMaker;
window.sendDataToFileMaker = sendDataToFileMaker;
window.processJSONData = processJSONData;
