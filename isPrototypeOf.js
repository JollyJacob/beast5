


// Beast 5: design isPrototypeOf function that mimics Object.prototype.isPrototypeOf



// Returns Boolean value stating whether possibleProto is a prototype of obj
function isPrototypeOf(possibleProto, obj) {
    var nextProto = Object.getPrototypeOf(obj);
    while (nextProto !== null) {
        if (nextProto === possibleProto) {
            return true;
        }
        nextProto = Object.getPrototypeOf(nextProto);
    }
    return false;
}