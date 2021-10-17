class Sphinx{
    constructor() {
        this.riddles = []
        this.heroesEaten = 0 
    }

    collectRiddle(riddle) {
        if (this.riddles.length > 2) {
            this.riddles.shift()
            this.riddles.push(riddle)
        } else {
            this.riddles.push(riddle)
        }
        
    }

    attemptAnswer(answer) {
        const initialLength = this.riddles.length
        for (var i = 0; i < this.riddles.length; i++) {
            if (this.riddles[i].answer === answer) {
                this.riddles.splice(i, 1);
                if (this.riddles.length === 0){
                    return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`
                } else {
                    return "That wasn\'t that hard, I bet you don\'t get the next one";
                }
            } else if (i === this.riddles.length - 1) {
                this.heroesEaten += 1; 
            }
        }
    }
}

module.exports = Sphinx