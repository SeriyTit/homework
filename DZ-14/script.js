function MilitaryResource(type, maxHealth, maxDistance) {
    this.type = type;
    this.health = health = maxHealth;
    this.maxHealth = maxHealth;
    this.distance = distance = maxDistance;
    this.maxDistance = maxDistance;
 }
    
    MilitaryResource.prototype.isReadyToMove = function() {
        return this.distance > 0;
    };
    MilitaryResource.prototype.isReadyToFight = function() {
        return this.health > 0;
    };
    MilitaryResource.prototype.restore = function() {
        this.health = this.maxHealth;
        this.distance = this.maxDistance;
        return this;                      
    };
    MilitaryResource.prototype.clone = function () {       
       return this;  
   };
 var warrior = new MilitaryResource('warrior', 200, 150);
 var archer = new MilitaryResource('archer', 150, 100)
 
//  console.log(warrior.isReadyToMove());
//  console.log(warrior.clone());
//  console.log(archer.clone());
  


 function Squad(defaultResources) {
    this.squad = [];
    if (defaultResources) this.combineResources(defaultResources);
 }
 
 Squad.prototype.isReadyToMove = function() {      
    return this.squad.every(function(self) {        
        return self.distance > 0;
    });    
 };
 Squad.prototype.isReadyToFight = function() {
    return this.squad.every(function(self) {        
        return self.health > 0;
    });  
 };
 Squad.prototype.restore = function() {
     return this.squad.map(function(self){
        self.health = self.maxHealth;
        self.distance = self.maxDistance;
        return self;
     });     
 };
 Squad.prototype.getReadyToMoveResources = function() {
     
 };
 Squad.prototype.combineResources = function(defaultResources) {     
    return this.squad = this.squad.concat(defaultResources);
 };
 Squad.prototype.cloneResource = function() {
     return this.squad.slice();
 };

 var squad = new Squad();
 squad.combineResources([warrior, archer])
 

console.log(squad.squad);
console.log(squad.isReadyToMove());
console.log(squad.isReadyToFight());
console.log(squad.restore());
console.log(squad.cloneResource());
console.log(squad.getReadyToMoveResources());