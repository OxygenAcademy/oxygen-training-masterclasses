class Horse {
  constructor(name, color, age) {

    // Properties (data)
    this.name = name;
    this.color = color;
    this.age = age;
    this.speed = 0;
  }

  // Methods (process)
  run() {
    this.speed += 10;
  }
}

class Meara extends Horse {
  constructor(name, color, age, light) {
    super(name, color, age);

    // Extended
    this.light = light;
  }

  // Extended
  speak() {
    return "Tengo hambre";
  }

  // Override
  run() {
    this.speed += 100;
  }
}

const myHorse = new Horse("Babieca", "Marrón", 9);
const myHorse2 = new Horse("Rocinante", "Gris", 27);
const myHorse3 = new Meara("Sombragrís", "Blanco", 500, 35);

console.log(myHorse3.light);
console.log(myHorse3.name);

console.log(myHorse.speed); // 0

myHorse.run();
myHorse.run();
myHorse.run();

console.log(myHorse.speed); // 30

// -----------------------------------

console.log(myHorse2.speed); // 0

myHorse2.run();

console.log(myHorse2.speed); // 10

let userHorse;

if(confirm("¿Quieres un caballo normal (Free) o un meara (Premium)?")) {
  userHorse = new Horse("Normal", "", 1);
}
else {
  userHorse = new Meara("Premium", "", 10, 50);
}

userHorse.run();

userHorse.speak();

console.log(userHorse.speed); // ???
