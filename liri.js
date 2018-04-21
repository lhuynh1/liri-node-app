// dependencies 
require('dotenv').config();
var keys = require('./keys.js');
var spotify = require('node-spotify-api');
var Twitter = require('twitter');
var request = ('request');
var fs = require('fs');
var dataValue = process.argv[2];
var funcValue = process.argv[3];

// switch case for commands
switch (dataValue) {
  case 'myTweets':
      myTweets();
      break;
  case 'spotifyThis':
      spotifyThis(funcValue);
      break;
  case 'omdbThis':
      omdbThis(funcValue);
      break;
  case 'doWhatItSays':
      doWhatItSays(funcValue);
      break;
}

// twitter function to show last 20 tweets
function myTweets() {
  var client = new Twitter(keys.twitter);
}



var spotify = new Spotify(keys.spotify);
// spotify api logic
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  }); 