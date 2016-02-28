(function() {
   // The first module we create is a module for our app.
   // We ask Angular to create a module with the name "showRoom" and this module has now no dependencies.
	var app = angular.module('showRoom', ['store-bucket']);
	
	// Creating a controller which will handle the behavior of html-elements
	app.controller('StoreController', function() {
		// Controller contains a collection of products
		this.products = gems;
	});
	
	// Creating a controller to determine the main image and change it
	app.controller('GalleryController', function() {
		this.current = 0;
		this.setCurrent = function(index) {
			if (index !== null)
				this.current = index;
			else
				this.current = 0;
		};
	});	
	
  // Creating a controller to handle tabs of a produt page
	app.controller('PanelController', function() {
		this.tab = 1;
		this.selectTab = function(setTab) {
			this.tab = setTab;
		}
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		}
	});
  
  // Directive controllers
  app.directive('reviewForm', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/directives/review-form-controller.html',
      controller: function() {
        this.review = {};
        
        this.addReview = function(product) {
          product.reviews.push(this.review); // Add a new review
          this.review = {}; // Reset the form
        };
      },
      controllerAs: 'reviewCtrl'
    };
  });
  
  // Custom directive
  app.directive('selectStar', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/directives/select-star.html'
    };
  });
  
	var gems = [
		{
			name: "Лампа Ламповая",
			price: 1290,
			description: "Все ламповые вечеринки делаются этой лампой.",
			specification: "Бревнишко и лампа накаливание ватт на 90.",
			images: [
				{
					full: "img/lamps.jpg",
					index: 0
				},
				{
					full: "img/lamp3.jpg",
					index: 1
				},
				{
					full: "img/lamp2.jpg",
					index: 2
				}
			],
			reviews: [
				{
					stars: 5,
					body: "Супер деревяха! Твори еще!",
					author: 'joe@thomas.com'
				},
				{
					stars: 2,
					body: 'Такие деревяшки только для нищебродов',
					author: 'hatersgonnahate@rambler.ru'
				}
				
			]
		},
		{
			name: "Кольцо",
			price: 800,
			description: "Особенность этих колец в том, что они сделаны из сломанных скейтбордов.",
			specification: "Материал: пятислойная фанера, сибирская береза.",
			images: [
				{
					full: "img/rings.jpg",
					index: 0
				},
				{
					full: "img/ring1.jpg",
					index: 1
				},
				{
					full: "img/ring2.jpg",
					index: 2
				},
				{
					full: "img/ring3.jpg",
					index: 3
				}
			],
			reviews: [
				{
					stars: 5,
					body: "Супер деревяха! Твори еще!",
					author: 'joe@thomas.com'
				},
				{
					stars: 2,
					body: 'Такие деревяшки только для нищебродов',
					author: 'hatersgonnahate@rambler.ru'
				}
				
			]
		},
		{
			name: 'Блокнот "Конструктор"',
			price: 500,
			description: "Уникальный экземпляр. Вы всегда можете заказать свой текст на первой странице блокнота.",
			specification: "Материал: экологичный картон",
			images: [
				{
					full: "img/notebooks.jpg",
					index: 0
				},
				{
					full: "img/notebook1.jpg",
					index: 1
				},
				{
					full: "img/notebook2.jpg",
					index: 2
				},
				{
					full: "img/notebook3.jpg",
					index: 3
				}
			],
			reviews: [
				{
					stars: 5,
					body: "Супер деревяха! Твори еще!",
					author: 'joe@thomas.com'
				},
				{
					stars: 2,
					body: 'Такие деревяшки только для нищебродов',
					author: 'hatersgonnahate@rambler.ru'
				}
				
			]
		}
	];
	
})();