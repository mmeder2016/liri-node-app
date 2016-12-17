var Twitter = require('twitter');
var keys = require("./keys");

var TwitterObj = function() {

    this.getTweets = function() {
        var params = {
            screen_name: 'mmeder2016'
        };
        var client = new Twitter(keys.twitterKeys);
        client.get('statuses/user_timeline', params, function(error, tweets, response) {
            if (!error) {
                tweets.forEach(function(element) {
                    console.log(" " + element.text);
                });
            } else {
                var err_msg = "TwitterObj.getTweets()" + err;
                throw err_msg;
            }
        });
    };
};

module.exports = TwitterObj;