const Users = (() => {
    const x = {}
    return {
        getUser: () => console.log(x),
        setValue: (key, val) => x[key] = val
    }
})()

Users.getUser()
Users.setValue('name','kevin')
Users.getUser()