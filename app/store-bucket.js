(function() {
  var app = angular.module('store-bucket', []);
  
  // Creating a controller to add items to cart
	app.controller('BucketController', function() {
		this.amount = 0;
		this.addToCart = function() {
			this.amount++;
		};
	});
  
  // Custom directive
  app.directive('buttonBucket', function() {
    return {
      restrict: 'A',
      templateUrl: 'app/directives/button-bucket.html'
    }
  });
})();