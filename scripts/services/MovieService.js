angular.module("moviedb").service("MovieService", [function() {
	this.getMovies = function(){
		return [
		{
        	"title": "Deadpool",
        	"poster_url": "https://image.tmdb.org/t/p/w185/kS3pI9nSLZuX8CAzaQOBF6mQ3uX.jpg",
        	"rating": 7.2,
        	"release_date": "2016-12-09"
        },
        {
        	"title": "Los Juegos del Hambre",
        	"poster_url": "https://image.tmdb.org/t/p/w185/sv4UUyQxP3qCp7kArPhZk1JlAj8.jpg",
        	"rating": 6.8,
        	"release_date": "2015-11-27"
        },
        {
        	"title": "Batman v Superman",
        	"poster_url": "https://image.tmdb.org/t/p/w185/6bCplVkhowCjTHXWv49UjRPn0eK.jpg",
        	"rating": 5.1,
        	"release_date": "2016-03-23"
        },
        {
        	"title": "Interstellar",
        	"poster_url": "https://image.tmdb.org/t/p/w185/7C0oiPn46OvaMxET9iq1f5BsyMS.jpg",
        	"rating": 8.2,
        	"release_date": "2014-11-07"
        }];
	}
}]);