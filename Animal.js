class Animal {
    name;
    weight;

    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    setName(name) {
        this.name = name;
    }

    setWeight(wight) {
        this.weight = wight;
    }

    getName() {
        return this.name;
    }

    getWeight() {
        return this.weight;
    }

    toString() {
        return ` tên: ${this.name}, cân nặng: ${this.weight}`
    }
}
let objAnimal1 = new Animal();
objAnimal1.setName("Elephant");
objAnimal1.setWeight(45.6);
console.log(objAnimal1.toString())
let objAnimal2 = new Animal("Dog", 10)
objAnimal2.setName("Mouse")
console.log(objAnimal2.getName());
console.log(objAnimal2.getWeight());
