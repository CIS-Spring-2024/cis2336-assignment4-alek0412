const express = require('express');
const app = express();
const PORT = 8347; // Choose any port you like

// Body parser middleware to handle form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'Backend' folder
app.use(express.static('Backend'));

// GET request to serve the order form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Menu.html');
});

// POST request to handle Menu form submission
app.post('/submit-menu', (req, res) => {
    // Here you can process the items ordered
    res.send('Order received. Thank you!');
});

// POST request to handle Contact Us form submission
app.post('/submit-contact', (req, res) => {
    // Here you can handle the contact us form submission
    // For example, save the contact info or send an email
    res.send('Thank you for your message, we will be in touch soon!');
});

// Server listening
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
