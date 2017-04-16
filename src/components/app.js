angular.module('video-player')
.controller('appController', function($scope) {

	this.videos = window.exampleVideoData;
	this.selectVideo = function(){}; 
	this.searchResults = function() {}; 
	this.video = this.videos[0];
	this.onClick = function() {}
})
.directive('app', function() {
  return {
    // TODO
    restrict: 'E',
    controller: 'appController',
    controllerAs: 'ctrl',
    bindToController: true, 
    templateUrl: 'src/templates/app.html', 
    scope: {}
  };
});
