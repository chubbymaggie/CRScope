Array.prototype[Symbol.iterator] = function() {
    for (var i = 3; --i >= 0;) {
        yield this[i]
    }
}
new TypedObject.ArrayType(TypedObject.int32, 0).build(x => 1)