var util = require('util');
var EventEmitter = require('events').EventEmitter;

function MyFancyObservable() {
  EventEmitter.call(this);
}

util.inherits(MyFancyObservable, EventEmitter);

MyFancyObservable.prototype.hello = function (name) {
  this.emit('hello', name);
};

// var MyFancyObservable = require('./MyFancyObservable');
var observable = new MyFancyObservable();

observable.on('hello', function (name) {
  console.log(name);
});

observable.hello('john');
