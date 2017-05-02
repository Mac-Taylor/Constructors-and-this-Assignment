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
    } // this one works. 

    this.eat = function () {
        this.hunger = this.hunger - 25;
        if (this.sick === true) {
            this.home.food = this.home.food - 20;
            return name + ' is sick and had to eat 20 food to survive. ' + this.home.food + ' food remains.';
        } else {
            this.home.food = this.home.food - 10;
            return name + ' is healthy and only had to eat 10 food. ' + this.home.food + ' food remains.';
        }
    } // this one works. 

    this.sidekicks = function () {

        // As this stands right now it looks alright, but keep an eye on it.

        return this.home.passengers.length - 1;


    } // this seems right. Keep an eye on it.
    return this;

} // as it stands now looks like all the properties and functions are in order. 


function Wagon(day, capacity, food, ammo) {

    this.day = day;
    this.capacity = capacity;
    this.food = food;
    this.ammo = ammo;
    this.passengers = [];


    this.join = function (traveler) {
        // gonna need to push each traveler to an empty array, but am I pushing a 
        // string of their name or what? Should i create a "passengers" array above?
        // hit a wall last night need to go over some of these.

        //"if this traveler is a member of this wagon, then..."
        // be mindful of the wagon's capacity. passengers.length cannot be > capacity
        if (traveler.home === this) {
            this.passengers.push(traveler); // "add their name to the list of passengers"
            return this.passengers; // OK, right now this seems to work. Gonna keep plugging and see how it fits in.
        }
    }

    this.quarantine = function () {

        //look said something about a loop, figured it might be the case. loop over array of passengers,
        // if anyone is sick (if something is === true, I guess), then the 
        for (let i = 0; i < this.passengers.length; i++) {
            if (this.passengers[i].sick !== false) {
                return true;
            }
        }
        return false;
    }


    this.ready = function () {
        // returns the # of passengers who are 'alive' (a property of Traveler objects)
        // and "ready to travel". RETURN TYPE WILL BE A NUMBER BASED ON BOOLEAN CONDITION
        let readyToGo = 0;
        for (i = 0; i < this.passengers.length; i++) {
            if (this.passengers[i].alive === true) {
                readyToGo = readyToGo + 1;
            }
        }
        return readyToGo;
    } // This one seems OK right now, keep an eye on it. 

    // this.next = function() {}

    return this;
}


let Wagon1 = new Wagon(1, 8, 100, 100);
let ezekiel = new Traveler('Ezekiel', 35, Wagon1, false, true);
let sarah = new Traveler('Sarah', 45, Wagon1, true, true);
let nathaniel = new Traveler('Nathaniel', 15, Wagon1, true, true);
let nancy = new Traveler('Nancy', 65, Wagon1, false, true);
let emmett = new Traveler('Emmett', 40, Wagon1, true, true);

/*
console.log(sarah.hunt());
console.log(Wagon1.ammo);
console.log(Wagon1.food);
console.log(Wagon1);

console.log(ezekiel.eat());
console.log(Wagon1.join());

console.log(sarah.sidekicks());*/
Wagon1.join(ezekiel);
Wagon1.join(sarah);
Wagon1.join(nathaniel);
Wagon1.join(nancy);

console.log(Wagon1.quarantine());


