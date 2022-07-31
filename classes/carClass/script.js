// classes: Main topic
// methods -> car.start()
// properties -> car.name = name of something

//this
class Car{
    constructor(name, color, topspeed){
        //properties
        this.name = name;
        this.color = color;
        this.topspeed = topspeed;
        this.currentspeed = 0;
    }
    //getters & setters
    getCurrentSpeed(){
        return currentspeed;
    }
    zeroToSixty(){
        setTimeout(() => {
            console.log('Fast ...........speeed')
            this.currentspeed = 65;
            console.log(this.currentspeed)
        }, 3000)
    }
    drive(speed = 10){
        this.currentspeed = speed;
        this.currentspeed = Math.round(speed * 1000);
        this.currentspeed = Math.max(0, Math.min(1, this.currentspeed));
        console.log(`driving speed at ${this.currentspeed} mph`)
    }
    brake(){
        console.log('slowing down')
        this.currentspeed -= 15
    }
    stop(){
        console.log('stoping')
        this.currentspeed = 0
    }
}

//car and the color , 250
//porsche,'yellow', 250
const ferrari = new car('ferrari','red',250)
ferrari.drive()
ferrari.drive()
ferrari.drive()
console.log(ferrari.currentspeed)
ferrari.brake()
ferrari.stop()
console.log(ferrari.currentspeed)

const porsche = new Car(`porsche`, `yellow`, 250)
console.log(porsche.name)
console.log(porsche.topspeed)
console.log(porsche.color)
porsche.drive(10)
console.log(porsche.currentspeed)
porsche.zeroToSixty()
porsche.stop()
console.log(porsche.currentspeed)

//array
Array.prototype.myPush = function(item){
    this[this.length] = item
    return this
}
const fruits = ['', '','',]
fruits.myPush('')
console.log(fruits)
/**
// console.log(ferrari.name)
// console.log(ferrari.color)
// console.log(ferrari.topSpeed)

// console.log(ferrari.currentSpeed)

// ferrari.drive()
// ferrari.brake()

// console.log(ferrari.currentSpeed)
// ferrari.drive()
// console.log(ferrari.currentSpeed)
// ferrari.drive()
// ferrari.drive()
// console.log(ferrari.currentSpeed)
// ferrari.zeroToSixty()
// console.log(ferrari.currentSpeed)

// console.log(ferrari)

// you can only have methods inside of classes
// const numbers = [1, 2, 3]
// numbers.push(4) // method
 console.log(typeof )
 console.log(numbers)
**/