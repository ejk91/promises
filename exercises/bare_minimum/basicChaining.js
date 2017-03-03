/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var https = require('https');



var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  // read readFilePath to get Github usedname
  fs.readFile(readFilePath, function (err, data) {
    if (err) {
      throw err;
    } else {
      var username = data.toString().split('\n')[0];
      console.log(username);
      // https.get('https://api.github.com/users/' + username, function(response){
      //   response.on('data', function(data){
      //     fs.writeFile(writeFilePath, data, function(err){
      //       if(err) throw err;
      //       console.log('Its saved!');
      //     });
      //   });
      // })
    }
  });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
