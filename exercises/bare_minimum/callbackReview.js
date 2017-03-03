/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');
var https = require('https');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, function (err, data) {
    if (err) {
      callback(err);
    } else {
      var username = data.toString().split('\n')[0];
      callback(err, username);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  // https.get(url, function(response) {
  //   var statusCode = response.statusCode;
  //   var error;
  //   response.on('data', function(data) {
  //     callback(error, statusCode);    
  //   });
  //   response.on('error', function(error) {
  //     error = new Error ('Invalid URI');
  //     callback(error);
  //   });
  // });
  request.get(url, function(err, response) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, response.statusCode);
    }
  });

};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
