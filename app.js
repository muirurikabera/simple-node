const express = require('express');
const app = express();
const PORT = 3000;

// Define a GET endpoint
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello, world!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
