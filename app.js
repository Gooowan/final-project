const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./configs/mongooseConnection');
const PORT = require('./configs/port');
const musicRoutes = require('./routes/musicRoutes');
const user = require('./routes/userRoutes');

const methodOverride = require('method-override');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'pug');
app.set('views', ['views', 'views/users']);
// mongoose.set('strictQuery', false);

app.use(express.urlencoded({ extended: true }));

app.use('/', musicRoutes);
// app.use('/users', user)


app.listen(PORT, () => console.log(`http://localhost:${PORT}/`));
