const express = require('express');

const app = express();
const path = require('path');

// setings
app.set('port', 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

// routes
app.use(require('./routes/index'));

// static files
app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), () => {
  console.log('server started');
});
