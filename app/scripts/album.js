define(['knockout-3.1.0'], function (ko) {
    var Album = function Album(title, artist, genre) {
        var self = this;
        self.title = ko.observable(title);
        self.artist = ko.observable(artist);
        self.genre = ko.observable(genre);
        self.editing = ko.observable(false);
        self.edit = function () {
            self.editing(true);
        };
    };
    return Album;
});
