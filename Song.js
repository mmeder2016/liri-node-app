//`spotify-this-song`
// Song objects
var Song = function(songName) {
    // Default Initialization of member variables
    if (songName.length === 0) {
        this.name = 'The Sign';
        this.artist = "Ace of Base";
    } else {
        this.artist = "";
        this.name = songName;
    }
    this.previewLink = "";
    this.album = "";
    // Default Initialization of member variables from the spotify json opbj
    this.setData = function(json_obj) {
        try {
            this.name = json_obj.tracks.items[0].name;
            this.artist = json_obj.tracks.items[0].artists[0].name;
            this.previewLink = json_obj.tracks.items[0].preview_url;
            this.album = json_obj.tracks.items[0].album.name;
        } catch (err) {
            var err_msg = "Song.setData():" + err;
            throw err_msg;
        }
    };

    this.print = function() {
        console.log("     Artist: " + this.artist);
        console.log("  Song name: " + this.name);
        console.log("Preview URL: " + this.previewLink);        
        console.log("      Album: " + this.album);
    };
};

module.exports = Song;