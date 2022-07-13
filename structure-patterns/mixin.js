let mixin = {
    hi() {
        console.log(`Hello ${this.name}`)
    },
    bye() {
        console.log(`Bye ${this.name}`)
    },

}


class User{
    constructor(name){
        this.name = name
    }
}
Object.assign(User.prototype, mixin)

const user=new User('Kevin')
user.hi()