//`spotify-this-song`
// Song objects
var Song = function(songName) {
    console.log("Song()");
    if (songName.length === 0) {
        this.name = 'The Sign';
        this.artist = "Ace of Base";
    } else {
        this.artist = "";
        this.name = songName;
    }
    this.previewLink = "";
    this.album = "";

    this.setData = function(data) {
        console.log("Song.setData()");
        try {
            this.name = data.tracks.items[0].name;
            this.artist = data.tracks.items[0].artists[0].name;
            this.previewLink = data.tracks.items[0].preview_url;
            this.album = data.tracks.items[0].album.name;
        } catch (err) {
            console.log(err);
        }
    };

    this.print = function() {
        console.log("Song.print()");
        console.log("     Artist: " + this.artist);
        console.log("  Song name: " + this.name);
        console.log("      Album: " + this.album);
        console.log("Preview URL: " + this.previewLink);
    };
};

module.exports = Song;