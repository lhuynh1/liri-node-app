// dependencies 
require('dotenv').config();
var keys = require('./keys.js');
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
var request = ('request');
var fs = require('fs');
var spotify = new Spotify(keys.spotify);
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
  // twitter api client with keys from keys.js
  var client = new Twitter(keys.twitter);
  // setting parameters for twitter
  var params = {
    screen_name: 'HuynhLisa',
    count: 20
  };
  client.get('statuses/user_timeline', params, function(err, tweets, response) {
    // console.log(response);
    console.log('Last 20 tweets:');
    if (!err) {
      for (var i = 0; i < tweets.length; i++) {
        console.log(`Created on: ${tweets[i].created_at}`);
        // spacing between each tweet for readability
        console.log(' ');
        console.log(`Tweet: ${tweets[i].text}`);
      }
    }
  });
};


// spotify api logic
function spotifyThis(funcValue) {
  if (funcValue == null) {
    funcValue = 'bye bye bye';
  }
  spotify.search({ type: 'track', query: funcValue}, function(err, data){
    // error handler
    if (err) {
      console.log(`Uh oh, an error occured ${err}`);
      return;
    }
    // logic for looping through the object to grab song info
    if(!error){
      for(var i = 0; i < data.tracks.items.length; i++){
        var songInfo = data.tracks.items[i];
        //artist
        console.log(`Artist: ${songInfo.artists[0].name}`);
        //song name
        console.log(`Song: ${songInfo.name}`);
        //album name
        console.log(`Album: ${songInfo.album.name}`);
        //spotify preview link
        console.log(`Preview URL: ${songInfo.preview_url}`);
        console.log(`-----------------------`);
      }
    }
  });


}
