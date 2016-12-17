var fs = require('fs'); // for d-what-it-says
// var request = require('request');
// var twitter = require('twitter');
// var spotify = require('spotify');

var keys = require("./keys");
var OMDB = require("./OMDB");
var SpotifyObj = require("./SpotifyObj");
var TwitterObj = require("./TwitterObj");

var TXTFILE = "random.txt";

console.log(" ");
// Test Object
try {
    // Command line arguments
    var USAGE_STR = 'node liri.js my-tweets\nnode liri.js spotify-this-song song\n' + 'node liri.js movie-this movie\nnode liri.js do-what-it-says task\n';
    var params = process.argv.slice(2);
    doIt(params);
} catch (err) {
    console.log("USAGE:\n" + err);
}

// Functions Calls
function printMyTweets() {
    console.log("print-my-tweets");
    var MyTwitterObj = new TwitterObj();
    MyTwitterObj.getTweets();
}

function spotifyThisSong(song) {
    console.log("spotify-this-song: " + song);
    var MySpotifyObj = new SpotifyObj(song);
    MySpotifyObj.findSong();
}

function movieThis(movie) {
    console.log("movie-this: " + movie);
    var MyOMDB = new OMDB(movie);
    MyOMDB.getMovie();
}

function doWhatItSays() {
    console.log("do-what-it-says");
    fs.readFile(TXTFILE, "utf8",
        function(error, data) {
            if (error) {
                throw error;
            }
            var dataArr = data.split(",");
            doIt(dataArr);
        });
}

function doIt(params) {
    // console.log("params.length:" + params.length);
    if (params.length === 1 || params.length === 2) {
        switch (params[0]) {
            case 'my-tweets':
                if (params.length !== 1) {
                    throw (params[0] + " : " + USAGE_STR);
                }
                printMyTweets();
                break;
            case 'spotify-this-song':
                if (params.length !== 2) {
                    spotifyThisSong("");
                } else {
                    spotifyThisSong(params[1]);
                }
                break;

            case 'movie-this':
                if (params.length === 2) {
                    movieThis(params[1]);
                } else {
                    movieThis("Mr. Nobody");
                }
                break;

            case 'do-what-it-says':
                if (params.length !== 1) {
                    throw (params[0] + " : " + USAGE_STR);
                }
                doWhatItSays();
                break;

            default:
                throw (USAGE_STR);
                break;
        }
    } else {
        throw (USAGE_STR);
    }
}