// Oregon Trail Object-Oriented/Constructors/this assigment

/** 
 * Returns true `chance` percent of the time.
 *
 * Examples:
 *  prob(75); // returns true 75% of the time, false 25%
 *  prob(14); // returns true 14% of the time, false 86%
 */
function prob(chance) {
    return chance < (Math.random() * 100);
} // Luke says you're going ot have to use this, so be mindful. 

function Traveler(name, hunger, home, sick, alive) {
    this.name = name;
    this.hunger = hunger;
    this.home = home;
    this.sick = sick;
    this.alive = alive;
    this.hunt = function () {
        // uses 5 ammo from the wagon. 
        this.home.ammo = this.home.ammo - 5; // ask about this, since Wagon generates wagon objects, will this syntax work?
        let success = prob(60); // will this syntax work?
        if (success === true) {
            this.home.food = this.home.food + 200;
            return 'Hunt was successful.';
        } else {
            return 'Hunt failed.';
        }
    }

    this.eat = function () {
        if (this.sick === true) {
            this.home.food = this.home.food - 20;
        } else {
            this.home.food = this.home.food - 10;
        }

    }
    return this;
}

function Wagon(day, capacity, food, ammo) {
    this.day = day;
    this.capacity = capacity;
    this.food = food;
    this.ammo = ammo;


    return this;
}

let Wagon1 = new Wagon(1, 8, 100, 100);
let ezekiel = new Traveler('Ezekiel', 35, 'Wagon1', false, true);
let sarah = new Traveler('Sarah', 45, 'Wagon1', true, true);


console.log(ezekiel.hunt());
console.log(Wagon1.ammo);
console.log(Wagon1.food);
console.log(Wagon1); 

// console.log(ezekiel.eat());