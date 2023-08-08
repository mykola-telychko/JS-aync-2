// Import stylesheets
import './style.css';

// accept callback
function startAsync(callback) {
  setTimeout(() => {
    const data = 'Async complete';
    // Execute the callback with the data
    callback(data);
  }, 1000);
}

// Callback fn to handle the result
function handleResult(result) {
  console.log(result);
}

// Call the fn with the callback
startAsync(handleResult);
