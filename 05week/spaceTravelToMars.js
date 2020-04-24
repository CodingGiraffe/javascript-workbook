'use strict';

let assert = require('assert');

let jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

// Your code here
//constructor should take in as input: name, their job, skill
//have attribute of a "ship", the one they are in
class CrewMember {
  constructor (name, job, specialSkill,) {
    this.name = name;
    this.job = job;
    this.specialSkill = specialSkill;
  }
    //this method should ask THIS crewmember to the ship being passed in
    //an entire ship instance is passed in, not just the name
    //the entire crewmember is added to the ship's array of crew
    enterShip(ship){
      ship.crew.push(this)
    }
  
}

//create Ship class with name, type, and abililty
//have list of crew that starts out empty
class Ship {
  constructor(name, type, ability){
    this.name = name
    this.type = type
    this.ability = ability
    this.crew = []
  }


//ship should have a "missionStatement()"
      //if there is a crew member that can activate it, it should return the ships ability if there is a crew member whose job matches up with the ship's type otherwise it should
      // return "Can't perform a mission yet."

  missionStatement() {
    if (this.crew.length <= 0) {
      return "Can't perform a mission yet."
    } else (this.crew.length >= 1) 
      return this.ability
    
  }
}

let crewMember1 = new CrewMember("Rick Martinez", "pilot", "chemistry");
let crewMember2 = new CrewMember("Commander Lewis", "commander", "geology");
let mav = new Ship("Mars Ascent Vehicle", "MAV", "Ascend into low orbit");
let hermes = new Ship("Hermes", "Main Ship", "Interplanetary Space Travel");

crewMember1.enterShip(mav)
crewMember2.enterShip(hermes)




//tests
if (typeof describe === 'function'){
  describe('CrewMember', function(){
    it('should have a name, a job, a specialSkill and ship upon instantiation', function(){
      var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      assert.equal(crewMember1.name, 'Rick Martinez');
      assert.equal(crewMember1.job, 'pilot');
      assert.equal(crewMember1.specialSkill, 'chemistry');
      assert.equal(crewMember1.ship, null);
    });

    it('can enter a ship', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    });
  });

  describe('Ship', function(){
    it('should have a name, a type, an ability and an empty crew upon instantiation', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      assert.equal(mav.name, 'Mars Ascent Vehicle');
      assert.equal(mav.type, 'MAV');
      assert.equal(mav.ability, 'Ascend into low orbit');
      assert.equal(mav.crew.length, 0);
    });

    it('can return a mission statement correctly', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
      let crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");

      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    });
  });
}
