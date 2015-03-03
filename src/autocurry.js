module.exports = autoCurry = (function () {
    var toArray = function toArray(arr, from) {
        return Array.prototype.slice.call(arr, from || 0);
    },
 
    curry = function curry(fn /* variadic number of args */) {
        var args = toArray(arguments, 1);
        return function curried() {
            return fn.apply(this, args.concat(toArray(arguments)));
        };
    };
 
    return function autoCurry(fn, numArgs) {
        numArgs = numArgs || fn.length;
        return function autoCurried() {
            if (arguments.length < numArgs) {
                return numArgs - arguments.length > 0 ?
                    autoCurry(curry.apply(this, [fn].concat(toArray(arguments))),
                              numArgs - arguments.length) :
                    curry.apply(this, [fn].concat(toArray(arguments)));
            }
            else {
                return fn.apply(this, arguments);
            }
        };
    };
}());
