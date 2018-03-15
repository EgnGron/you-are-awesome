// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (name) => {
    return name
};


const createNotEnumerableProperty = (value) => {
    // no ideas
};

const createProtoMagicObject = () => {
    var a = {}
    function b(){}
    b.__proto__ = a
    b.prototype = a
    return b
};

var counter = 0;
const incrementor = () => {
   var incrementInner = () => {
       counter++
       return incrementInner
   }

   incrementInner.valueOf = () => {
       return counter
   }

   counter++;
   return incrementInner;
};

const asyncIncrementor = (() => {
    var counter = 0;
    var incrementInner = () => {
      counter++;
      return incrementInner;
    }
    
    incrementInner.valueOf = () => {
        return counter;
    }
   
    return incrementInner;
 })()

const createIncrementer = () => {
    //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/yield*
    function* g1() {
        yield 1;
        yield 2;
        yield 3;
    }
    return g1()
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};

const getDeepPropertiesCount = () => {};

const createSerializedObject = () => {
    return new String("Bla Bla Bla") 
};

const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
