const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const freelancersRoutes = require('./src/routes/freelancers');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', freelancersRoutes);
app.use(express.static(path.join(__dirname, '/client/dist/assessment-etiqa-fullstack')));

app.get('', (request, response) => {
    request.send('Backend API running!');
});

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'client/dist/assessment-etiqa-fullstack'}
  );
});

app.listen(process.env.PORT || 5000, () => { console.log(`Server running in port ${process.env.PORT || 5000}!`) });