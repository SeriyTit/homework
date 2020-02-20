var Unit = (function () {
    function Unit (baseDamage, health, level) {
        var modifier = (level - 1) * 10;
        this.maxHealth = this.health = health + modifier;
        this.damage = baseDamage + modifier;
        this.level = level;
    }
    Unit.prototype.attak = function() {
        console.log('Attak', this);
    }
    return Unit;
}());