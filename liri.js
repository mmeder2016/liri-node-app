var request = require('request');
var twitter = require('twitter');
var twitter = require('spotify');

var keys = require("./keys");


// `my-tweets`

//`spotify-this-song`

//`movie-this`

// `do-what-it-says`

//Song objects
function Song(artist, song, previewLink, album) {

    if (artist.length === 0) {
        this.song = 'The Sign';
        this.artist = "Ace of Base";
    } else {
        this.artist = artist;
        this.song = song;
    }
    this.previewLink = previewLink;
    this.album = album;
}
Song.prototype.printSong = function() {
    console.log("artist: " + this.artist + "\nsong: " + this.song + "\npreviewLink: " + this.previewLink + "\nalbum: " + this.album);
};


// Test Object
try {
    // Command line arguments
    var USAGE_STR = 'node liri.js my-tweets\nnode liri.js spotify-this-song song\n' + 'node liri.js movie-this movie\nnode liri.js spotify-this-song song\n';
    var params = process.argv.slice(2);
    if (params.length === 1 || params.length === 2) {
        switch (params[0]) {
            case 'my-tweets':
                if (params.length === 2) {
                    throw (USAGE_STR);
                }
                printMyTweets();
                break;

            case 'spotify-this-song':
                if (params.length === 1) {
                    throw (USAGE_STR);
                }
                spotifyThisSong(params[1]);
                break;

            case 'movie-this':
                if (params.length === 1) {
                    throw (USAGE_STR);
                }
                movieThis(params[1]);
                break;

            case 'do-what-it-says':
                if (params.length === 1) {
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


    var song = new Song("Led Zeppelin", "Custard Pie", "PreviewLink", "Houses of the Holy");
    song.printSong();

    var song2 = new Song("", "", "PreviewLink", "");
    song2.printSong();

    console.log(keys.twitterKeys);

} catch (err) {
    console.log("ERROR: " + err);
}
