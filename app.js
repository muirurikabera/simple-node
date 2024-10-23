const express = require('express');
const app = express();
const PORT = 3000;

// Define a GET endpoint
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello, world!' });
});

// Add a new route to serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
