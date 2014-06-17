define(function (require) {
  var albumModule= require("./album");

  var albumCollectionModule = function AlbumCollectionViewModel() {
    var self = this;

    self.addAlbum = function() {
        self.albums.push(new Album("", "", ""));
    };

    self.removeAlbum = function(album) { 
      self.albums.remove(album) 
    }

    self.albums = ko.observableArray([
      new albumModule("New York", "Lou Reed", "Rock"),
      new albumModule("The Freewheelin’", "Bob Dylan", "Folk"),
      new albumModule("Sinatra: New York", "Frank Sinatra", "Traditional Pop"),
      new albumModule("The Blueprint 3", "Jay-Z", "Hip Hop"),
      new albumModule("Kind of Blue", "Miles Davis", "Jazz"),
      new albumModule("Paul's Boutique", "Beastie Boys", "Hip Hop"),
      new albumModule("October Rust", "Type O Negative", "Doom Metal"),
      new albumModule("This Is Me...Then", "Jennifer Lopez", "Pop"),
      new albumModule("Sidewalks", "Matt and Kim", "Indie Pop"),
      new albumModule("100 Days, 100 Nights", "Sharon Jones and the Dap-Kings", "Funk/Soul"),
      new albumModule("High Violet", "The National", "Indie Rock")
    ]);
  }

  ko.applyBindings(new albumCollectionModule());

};