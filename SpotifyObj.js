var spotify = require('spotify');
var Song = require('./Song');

var SpotifyObj = function(songName) {
    this.songName = songName;

    this.findSong = function() {
        var song = new Song(this.songName);
        spotify.search({
            type: 'track',
            query: song.name
        }, function(err, data) {
            if (err) {
                var err_msg = "SpotifyObj.findSong():" + err;
                throw err_msg;
            }
            song.setData(data);
            song.print();
        });
    };
};

module.exports = SpotifyObj;