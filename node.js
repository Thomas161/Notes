//importing installed modules
const express = require('express');
const app = express();

//handle get requests to server, like GET,POST,PUT,DELETE
app.get('/', (req, res) => {
    res.send('An alligator approaches!');
});

app.listen(3000, () => console.log('Gator app listening on port 3000!'));