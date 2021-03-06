var request = require('request');

// OMDB objects
var OMDB = function(movie) {
    this.movie = movie;
    this.options = '&y=&plot=short&r=json';
    this.queryUrl = 'http://www.omdbapi.com/?t=' + this.movie + this.options;

    // Get the movie data and log it
    this.getMovie = function() {
        request(this.queryUrl, function(error, response, body) {
            if (response.statusCode === 200) {
                var json_str = JSON.parse(body);
                console.log(" Title: " + json_str["Title"]);
                console.log(" Year: " + json_str["Year"]);
                console.log(" IMDB Rating: " + json_str["imdbRating"]);
                console.log(" Country: " + json_str["Country"]);
                console.log(" Language: " + json_str["Language"]);
                console.log(" Plot: " + json_str["Plot"]);
                console.log(" Actors: " + json_str["Actors"]);
                console.log(" Rotten Tomatoes Rating: " + "NONE" /*json_str[""]*/ );
                console.log(" Rotten Tomatoes URL: " + "NONE" /*json_str[""]*/ );
            } else {
                console.log("OMDB.getMovie()failed: error code: " + response.statusCode);
            }
        });
    };
};

module.exports = OMDB;