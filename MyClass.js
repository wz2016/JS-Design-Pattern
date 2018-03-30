function MyClass(options) {
  this.options = options;
}

function create(options) {
  return new MyClass(options);
}

module.exports.create = create;
