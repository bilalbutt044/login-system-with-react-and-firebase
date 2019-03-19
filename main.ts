 
class Point {

    constructor(private x?: number , private y?: number){}
    draw(){
        console.log("X: " + this.x + " " + "Y:" + this.y);
    }

    set X(value){
        this.x = value;
    }
    get X() {
        return this.x;
    }
}

let point = new Point(1,2);
point.draw();

point.X = 20;
let  x = point.X;


class Computer {
    public processor : Processor;

    constructor(processor : Processor){
        this.processor = processor;
    }
}
class SuperComputer {
    public Superprocessor : Processor;

    constructor(Superprocessor : Processor){
        this.Superprocessor = Superprocessor;
        
    }
}

class Processor {
    constructor(){}
}

