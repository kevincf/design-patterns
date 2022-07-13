const dog = {
    breed: 'Golden retriever',
    bark: function () {
        console.log(`Woof!, i'm a ${this.breed}`)
    }
}

const leia= Object.create(dog)

leia.bark()