require.config({
    paths: {
        album: 'album',
        albumCollectionViewModel: 'albumCollectionViewModel',
        knockOut: 'knockout-3.1.0'
    }
});

require(['knockOut', 'albumCollectionViewModel'], function(ko, albumCollectionViewModel) {
    ko.applyBindings(new albumCollectionViewModel());

});

