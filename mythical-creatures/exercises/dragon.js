class Dragon{
    constructor(name, rider){
        this.name = name
        this.rider = rider
        this.hungry = true 
        this.fed = 0 
    }

    greet() {
        return `Hi, ${this.rider}!`
    }
    
    eat() {
        if (this.fed > 1) {
          this.hungry = false;
        } else {
          this.fed += 1;
        }    
    }
}

module.exports = Dragon;