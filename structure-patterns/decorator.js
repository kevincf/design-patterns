class Computer {
    constructor() {
        this.price = 1000
        this.screen = 12
    }
}

const computer = new Computer()

computer.increasePrice = function () {
    this.price += 100
}

computer.increasePrice()
console.log(computer.price)