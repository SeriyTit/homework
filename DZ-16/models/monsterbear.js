var MonsterBear = (function() {
    function MonsterBear(level) {
        Unit.call(this, 150, 1000, level);
     }
    MonsterBear.prototype = Object.create(Unit.prototype);
    MonsterBear.prototype.constructor = MonsterBear;
    
    return MonsterBear;
}());