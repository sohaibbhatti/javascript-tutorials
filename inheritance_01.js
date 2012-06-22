// PROTOTYPAL Inheritance

// Pet Object. Pass it a name and number of legs.
var Pet = function (name, legs) {
  this.name = name;
  this.legs = legs;
}

// Pets names and number of legs
Pet.prototype.getDetails = function () {
  return this.name + 'has ' + this.legs + ' legs';
}

// Define cat method inheriting from pet
var Cat = function (name) {
  Pet.call(this, name, 4);
}

Cat.prototype = new Pet();

// Augment cat with an action method
Cat.prototype.action = function () {
  return 'Catch a bird';
}

var petCat = new Cat('Felix');

var details = petCat.getDetails(); // 'Felix has 4 legs'
var action = petCat.action(); // 'Catch a bird'
petCat.name = 'Sylvester';
petCat.legs = 7;
details = petCat.getDetails(); // 'Sylvester has 4 legs'


// Functional Inheritance

var pet = function (name, legs) {
  var that = {
    name: name,
    getDetails: function () {
      return that.name + 'has ' + legs + ' legs';
    }
  };
  return that;
};

var cat = function (name) {
  var that = pet(name, 4);
  that.action = function () {
    return 'Catch a bird';
  };
  return that;
};

var petCat2 = cat('Felix');
details = petCat2.getDetails();
action = petCat2.action();
petCat2.name = 'Sylvester';
petCat2.legs = 7;
details = petCat2.getDetails();