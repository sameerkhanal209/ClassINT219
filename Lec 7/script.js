const person = {
    name: "Sameer",
    present: true,
    hobbies: ["Eat", "Code", "Sleep"],
    beverage: {
        morning: "Tea",
        afternoon: "Coffee"
    },
    grade: function(){
        return 'A'
    }
}

document.write("name : " + person.name)
document.write("<br />")
document.write("present : " + person.present)
document.write("<br />")
document.write("1st hobby : " + person.hobbies[0])
document.write("<br />")
document.write("2nd hobby : " + person.hobbies[1])
document.write("<br />")
document.write("3rd hobby : " + person.hobbies[2])
document.write("<br />")
document.write("morning beverage : " + person.beverage.morning)
document.write("<br />")
document.write("afternoon beverage : " + person.beverage.afternoon)
document.write("<br />")
document.write("grade : " + person.grade())
document.write("<br />")



//Second Object

const vehicle = {
    wheels: 4,
    engine: function(){
        return "Diesel Engine"
    }
}

document.write("<br />")
document.write("- Truck -")
document.write("<br />")
document.write("<br />")

// Third Object

const truck = Object.create(vehicle)
truck.doors = 2;

document.write("wheels : " + truck.wheels)
document.write("<br />")

document.write("doors : " + truck.doors)
document.write("<br />")

document.write("engine : " + truck.engine())
document.write("<br />")


// Fourth Object

document.write("<br />")
document.write("- Car -")
document.write("<br />")
document.write("<br />")

const car = Object.create(vehicle)
car.doors = 4;
car.engine = function(){
    return "Woooooosh!"
}

document.write("doors : " + car.doors)
document.write("<br />")

document.write("engine : " + car.engine())
document.write("<br />")

// Fifth Object

document.write("<br />")
document.write("- Tesla -")
document.write("<br />")
document.write("<br />")

const tesla = Object.create(car)
car.engine = function(){
    return "Shhhhh!"
}

document.write("engine : " + tesla.engine())
document.write("<br />")


// Class

document.write("<br />")
document.write(" --- Class Example ---")
document.write("<br /> <br />")

class Pizza{
    constructor(pizzaType){
        this.size = "Medium"
        this.crust = "Wheat Crust"
        this.pizzaType = pizzaType
    }

    bake(){
        document.write("Baking a " + (this.size) + " " + (this.crust) + " " + (this.pizzaType) + " pizza")
    }
}

const myPizza = new Pizza("Simple")
myPizza.bake()

document.write("<br />")
document.write("size : " + myPizza.size)

