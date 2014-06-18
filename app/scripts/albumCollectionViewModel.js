define(function (require, exports, module) {
    var ko = require("knockout");
    var Album = require("./Album");
    module.exports = function AlbumCollectionViewModel() {
        var self = this;
        self.editMode = ko.observable(false);
        self.notEditing = ko.observable(true);

        self.addAlbum = function () {
            self.albums.push(new Album("", "", ""))
        };

        self.removeAlbum = function (album) {
            self.albums.remove(album);
        };

        self.albums = ko.observableArray([
            new Album("New York", "Lou Reed", "Rock"),
            new Album("The Freewheelin’", "Bob Dylan", "Folk"),
            new Album("Sinatra: New York", "Frank Sinatra", "Traditional Pop"),
            new Album("The Blueprint 3", "Jay-Z", "Hip Hop"),
            new Album("Kind of Blue", "Miles Davis", "Jazz"),
            new Album("Paul's Boutique", "Beastie Boys", "Hip Hop"),
            new Album("October Rust", "Type O Negative", "Doom Metal"),
            new Album("This Is Me...Then", "Jennifer Lopez", "Pop"),
            new Album("Sidewalks", "Matt and Kim", "Indie Pop"),
            new Album("100 Days, 100 Nights", "Sharon Jones and the Dap-Kings", "Funk/Soul"),
            new Album("High Violet", "The National", "Indie Rock")
        ]);
        
        self.editAlbum = function() {
            self.editMode(true);
            self.notEditing(false);
        };

        self.doneEditing = function() {
            self.editMode(false);
            self.notEditing(true);
        };

    };
});
