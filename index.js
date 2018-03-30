var areaCalc = require('./area');

// console.log(areaCalc.circle(5));
var MyFancyObservable = require('./MyFancyObservable');
var observable = new MyFancyObservable();

observable.on('hello', function (name) {
  console.log(name);
});

observable.hello('john');
