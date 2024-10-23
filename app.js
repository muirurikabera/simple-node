const express = require('express');
const mysql = require('mysql2'); // Import mysql2
const app = express();
const PORT = 3000;

// Set up MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'monty',
    password: 'nOIqSz3aGgYM9z7J',
    database: 'kowitz'
});

// Connect to the database
db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

// Serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Define a route to get blog posts
app.get('/api/posts', (req, res) => {
    db.query('SELECT * FROM blog_posts ORDER BY date_created DESC', (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database query failed' });
        }
        res.json(results);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
