class Api {
    constructor() {
        this.operations = function(url, opts, verb) {
            switch (verb) {
                case 'get':
                case 'post':

                default:
                    return
            }
        }
    }
}

class Api2 {
    constructor() {
        this.get = function(url, otps) {}
        this.post = function(url, otps) {}
    }
}

class ApiAdapter {
    constructor() {
        const api2 = new Api2()
        this.operations = function(url, opts, verb) {
            switch (verb) {
                case 'get':
                    return api2.get(ulr, opts)
                case 'post':
                    return api2.post(ulr, opts)

                default:
                    return
            }
        }
    }
}

const api = new Api()
api.operations('www.google.cl', { q: 1 }, 'get')

const api2 = new Api2()
api2.get('www.google.cl', { q: 1 })

const adapter = new ApiAdapter()
api.operations('www.google.cl', { q: 1 }, 'get')