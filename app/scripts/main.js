require.config({
    paths: {
        knockout: 'knockout-3.1.0',
        AlbumCollectionViewModel: './app/AlbumCollectionViewModel'
    }
});

require(['knockout', 'AlbumCollectionViewModel'], function(ko, AlbumCollectionViewModel) {
    ko.applyBindings(new AlbumCollectionViewModel());

});

var about = function () { 
  document.getElementById('about').style.display = 'block';
  document.getElementById('home').style.display = 'none';
};

var home = function () { 
  document.getElementById('about').style.display = 'none';
  document.getElementById('home').style.display = 'block';
};

var routes = {
    '/about': about,
    '/home' : home
};

var router = Router(routes);

router.init();

