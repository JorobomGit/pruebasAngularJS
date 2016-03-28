angular.module("moviedb").value("apiPath", {
	movies: "/api/movies",
	movieDetail: "/api/movies/:id",
	series: "/api/series",
	serieDetail: "/api/series/:id"
});