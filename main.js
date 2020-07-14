class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt() {
        this.food = this.food + 2
    }
    eat() {
        if (this.food > 0) {
            this.food = this.food - 1
        } else {
            this.isHealthy = false
        }
    }
}
class Doctor extends Traveler {
    constructor(name) {
        super(name)
    }
    heal(traveler) {
        traveler.isHealthy = true
    }
}

class Hunter extends Traveler {
    constructor(name) {
        super(name)
        this.food = 2
        
    }
    hunt() {
        this.food = this.food + 5
    }
    eat() {
        if (this.food >= 2) {
            this.food = this.food - 2
        } else {
            this.food = 0
            this.isHealthy = false
        }
    }
    giveFood(traveler, numOfFoodUnits) {
        if (this.food > numOfFoodUnits) {
            this.food = this.food - numOfFoodUnits
            traveler.food = traveler.food + numOfFoodUnits
        }
    }
}

class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }
    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }
    join(traveler) {
        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(traveler)
        }

    }
    shouldQuarantine() {
        let isSick = this.passengers.some(function (passenger) {
            let passengerIsSick = passenger.isHealthy === false
            return passengerIsSick
        })
        return isSick
    }
    totalFood() {
        let passengerFoodSum = this.passengers.reduce((accumulator, user) => accumulator + user.food, 0)
        return passengerFoodSum
    }
}



