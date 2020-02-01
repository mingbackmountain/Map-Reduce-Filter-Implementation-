//forEach native implementation
Array.prototype.myEach = function(callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

//test
var arr = ["Ming", "KKK", "PPP", "JJJ"];
arr.myEach(function(word) {
  console.log(word);
});

//Map native implementation
Array.prototype.myMap = function(callback) {
  arr = [];
  for (var i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr;
};

//test
var arrs = ["A", "B", "C"];
var number2 = [1, 4, 9];

var test1 = arrs.myMap(function(n) {
  return n;
});

var test2 = number2.myMap(function(num) {
  return Math.sqrt(num);
});

console.log(test1);
console.log(test2);

//Filter native implementation
Array.prototype.myFilter = function(callback, context) {
  arr = [];
  for (var i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

//test
var numbers = [1, 20, 50, 30, 40, 2, 9, 3];
var newNum = numbers.myFilter(function(n) {
  return n >= 10;
});

console.log(newNum);

//Reduce native implementation

Array.prototype.myReduce = function(callback, initialval) {
  var accumulator = initialval === undefined ? undefined : initialval;

  for (var i = 0; i < this.length; i++) {
    if (accumulator != undefined) {
      accumulator = callback.call(undefined, accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }

  return accumulator;
};

//test
var numbers3 = [20, 20, 2, 3];
var total = numbers3.myReduce(function(a, b) {
  return a + b;
}, 0);
console.log(total);

var flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
].reduce(function(a, b) {
  return a.concat(b);
});

console.log(flattened);

//Every native implementation
Array.prototype.myEvery = function(callback, context) {
  for (var i = 0; i < this.length; i++) {
    if (!callback.call(context, this[i], i, this)) {
      return false;
    }
  }
  return true;
};

//tests
var passed = [12, 5, 8, 130, 44].myEvery(function(element) {
  return element >= 10;
});
console.log(passed);

passed = [12, 54, 18, 130, 44].myEvery(function(element) {
  return element >= 10;
});
console.log(passed); // true

//Some native implementation
Array.prototype.mySome = function(callback, context) {
  for (var i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      return true;
    }
  }
  return false;
};

//tests
var passed = [12, 5, 8, 130, 44].mySome(function(element) {
  return element >= 200;
});
console.log(passed); //some: false

var passed = [12, 5, 8, 130, 44].mySome(function(element) {
  return element >= 100;
});
console.log(passed); //some: true
