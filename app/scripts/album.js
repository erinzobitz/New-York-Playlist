define(function(){
  var albumModule = function Album(title, artist, genre) {    
    var self = this;
    self.title = ko.observable(title);
    self.artist = ko.observable(artist);
    self.genre = ko.observable(genre);
    self.editing = ko.observable(false);       
    self.edit(){ 
      self.editing(true);
    }
  };
});
  