(function(){
	
var myApp = require('../app/oop-class.js');

  describe("OOP Class: Create a Animal", function() {

    it("The animal should be a type of `object`, and an instance of the `Animal` class", function() {
      var dog = new myApp.Animal('Dog');
      expect(typeof dog).toEqual(typeof {});
      expect(dog instanceof myApp.Animal).toBeTruthy();
    });

    it("The animal name and type should be a property of the animal", function() {
      var cat  = new myApp.Animal('Cat', 'Mammal');
      expect(cat.name).toBe('Cat');
      expect(cat.type).toBe('Mammal');
    });

    it("The animal should be able to make sound.", function() {
      var duck = new myApp.Animal('Duck', 'Mammal','Quack');
      expect(duck.makeSound()).toBe('Quack');
    });

  });
})();