require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');

const PORT = process.env.PORT || 5173;
const peopleRouter = require('./routes/people');
const filmRouter = require('./routes/film');
const planetController = require('./routes/planet');
const specieController = require('./routes/specie');
const starshipController = require('./routes/starship');
const transportController = require('./routes/transport');
const vehicleController = require('./routes/vehicle');

// database connection
require('./config/database');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
app.use('/people', peopleRouter);
app.use('/films', filmRouter);
app.use('/planets', planetController);
app.use('/species', specieController);
app.use('/starships', starshipController);
app.use('/transports', transportController);
app.use('/vehicles', vehicleController);

// server running status
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`The app listening at http://localhost:${PORT}`)
});