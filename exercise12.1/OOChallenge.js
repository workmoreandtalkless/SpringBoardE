/**Part One
 * 
 */
class Vechile{
    constructor(a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;
    }
    honk(){
        // console.log("Beep");
    return "Beep.";
    }
    toString(){
        return `The vehicle is a ${a} ${b} from ${c}.`;
    }

}

/**Part Two
 * 
 */
class Car extends Vechile{
    // super(a,b,c);
    // numWheels = 4;
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 4;
    }

}
/**Part Three
 * 
 */
class Motorcycle extends Vehicle{
    // super(a,b,c);
    // numWheels = 2;
    constructor(make,model,year){
        super(make,model,year)
        this.numWheels =2 ;
    }
    revEngine(){
        console.log( "VROOM!!!");
    }
}
/**Part Four
 * 
 */
class Garage{
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newVechile){
        // if(typeof newVechile !==Vechile){
        if(!(newVechile instanceof Vechile)){
            return "Only vehicles are allowed in here!"
        }
    
        if(this.vehicles.length>=this.capacity){
            return "Sorry,we're full";
        }
        
        
        this.vehicles.push(newVechile);
        return "Vehicle added!";
    }
}