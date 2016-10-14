var webMJ = angular.module('navegacion', ['ngRoute']);

webMJ.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'plantillas/slide.html',
		controller: 'inicio'
	})
	.when('/about', {
		templateUrl: 'plantillas/about.html',
		controller: 'about'
	})
	.when('/personajes', {
		templateUrl: 'plantillas/personajes.html',
		controller: 'personajes'
	})
	.when('/cultura', {
		templateUrl: 'plantillas/cultura.html',
		controller: 'cultura'
	})
	.when('/deportes', {
		templateUrl: 'plantillas/deportes.html',
		controller: 'deportes'
	})
	.when('/salud', {
		templateUrl: 'plantillas/salud.html',
		controller: 'salud'
	})
	.when('/contacto', {
		templateUrl: 'plantillas/contact.html',
		controller: 'contacto'
	})
	.when('/404', {
		templateUrl: 'plantillas/404.html',
		controller: 'fail'
	})
	.otherwise({
			redirectTo:'/'
	})
}]);