function curry(fx) {
  const arity = fx.length;
  return function f1(...args) {
    if (args.length >= arity) return fx(...args);
    return (...args2) => f1(...args.concat(args2));
  };
}

module.exports = curry;
