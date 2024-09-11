class GuessingGame {
    result;
    constructor() {
        this.result = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.result =  (Math.ceil(this.min) + Math.ceil(this.max))/2;
        return Math.ceil(this.result);
    }

    lower() {
        this.max = this.result;
        return this.max
    }

    greater() {
        this.min = this.result;
        return this.min
    }
}

module.exports = GuessingGame;
