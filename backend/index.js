var express = require('express');
var bodyParser = require('body-parser');
var app = express();

const cors = require('cors');
var path = require('path');
var port = process.env.PORT || 3000
var distPath = "../dist/frontend"

app.use(express.static(path.join(__dirname, distPath)));
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, distPath + '/index.html'));
})



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));

require('./todoController')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
  
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.message);
});
  
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

module.exports = app
