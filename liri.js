var request = require('request');
var twitter = require('twitter');
var twitter = require('spotify');

var keys = require("./keys");
var OMDB = require("./OMDB");
var SpotifyObj = require("./SpotifyObj");

// API Calls
function printMyTweets() {
    console.log("printMyTweets");
}

function spotifyThisSong(song) {
    console.log("spotifyThisSong: " + song);
    var MySpotifyObj = new SpotifyObj(song);
    MySpotifyObj.findSong();
}

function movieThis(movie) {
    console.log("movieThis: " + movie);
    var MyOMDB = new OMDB(movie);
    MyOMDB.getMovie();
}

function doWhatItSays(task) {
    console.log("doWhatItSays: " + task);
}

// Test Object
try {
    // Command line arguments
    var USAGE_STR = 'node liri.js my-tweets\nnode liri.js spotify-this-song song\n' + 'node liri.js movie-this movie\nnode liri.js do-what-it-says task\n';
    var params = process.argv.slice(2);
    //    console.log("params.length:" + params.length);
    if (params.length === 1 || params.length === 2) {
        switch (params[0]) {
            case 'my-tweets':
                if (params.length !== 1) {
                    console.log("my-tweets throw");
                    throw (USAGE_STR);
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
                if (params.length !== 2) {
                    throw (USAGE_STR);
                }
                doWhatItSays(params[1]);
                break;

            default:
                throw (USAGE_STR);
                break;
        }
    } else {
        throw (USAGE_STR);
    }
} catch (err) {
    console.log("USAGE:\n" + err);
}