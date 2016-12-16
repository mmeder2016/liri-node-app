var spotify = require('spotify');
var Song = require('./Song');
var fs = require("fs");

var SpotifyObj = function(songName) {
    console.log("SpotifyObj(" + songName +")");
    this.songName = songName;
    //console.log(this.song);
    this.findSong = function() {
        console.log("SpotifyObj.findSong()");
        //console.log(this.song);
        var song = new Song(this.songName);
        spotify.search({
            type: 'track',
            query: song.name
        }, function(err, data) {
            if (err) {
                console.log('Error occurred: ' + err);
                return;
            }
            song.setData(data);
            song.print();
        });
    };
};

module.exports = SpotifyObj;