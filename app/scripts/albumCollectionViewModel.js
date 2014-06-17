define(['knockout-3.1.0'], function (ko, require) {
    var AlbumModule = require("album");
    var albumCollectionViewModel = function AlbumCollectionViewModel() {
        var self = this;

        self.addAlbum = function () {
            self.albums.push(new AlbumModule("", "", ""));
        };

        self.removeAlbum = function (album) {
            self.albums.remove(album);
        };

        self.albums = ko.observableArray([
            new AlbumModule("New York", "Lou Reed", "Rock"),
            new AlbumModule("The Freewheelin’", "Bob Dylan", "Folk"),
            new AlbumModule("Sinatra: New York", "Frank Sinatra", "Traditional Pop"),
            new AlbumModule("The Blueprint 3", "Jay-Z", "Hip Hop"),
            new AlbumModule("Kind of Blue", "Miles Davis", "Jazz"),
            new AlbumModule("Paul's Boutique", "Beastie Boys", "Hip Hop"),
            new AlbumModule("October Rust", "Type O Negative", "Doom Metal"),
            new AlbumModule("This Is Me...Then", "Jennifer Lopez", "Pop"),
            new AlbumModule("Sidewalks", "Matt and Kim", "Indie Pop"),
            new AlbumModule("100 Days, 100 Nights", "Sharon Jones and the Dap-Kings", "Funk/Soul"),
            new AlbumModule("High Violet", "The National", "Indie Rock")
        ]);
    };
});
