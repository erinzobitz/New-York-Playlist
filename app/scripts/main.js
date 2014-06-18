require.config({
    paths: {
        knockout: 'knockout-3.1.0'
    }
});

require(['knockout', 'AlbumCollectionViewModel'], function(ko, AlbumCollectionViewModel) {
    ko.applyBindings(new AlbumCollectionViewModel());

});

