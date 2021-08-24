class Traveler{
    constructor(name){
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    // food = 1   essa linha faz com q o food aparece primeiro no objeto. pesquisar sobre
    hunt() {
        this.food += 2
        // console.log('Você caçou, agora tem ' + this.food + ' de food')
    }
    eat(){
        if(this.food === 0){
            // console.log("Oh shit, I'am hungry :(")
            this.isHealthy = false
        }
        if(this.food > 0){
            this.food--
            this.isHealthy = true
            if(this.food === 0){
                // console.log('nham nham... do not have more foods')
                }
                else{
            // console.log('nham nham... restam ' + this.food + ' foods')
                }
        }
    }
}
class Wagon{
    constructor(capacity){
        this.capacity = Number(capacity)
        this.passageiros = []
    
    }
    getAvailableSeatCount(){
        return this.capacity  + ' lugares vagos'
    }
    join(traveler){
        if(this.capacity <= 0){
            // console.log('Carroça lotada, espere a próxima')
        }
        if(this.capacity > 0){
            this.passageiros.push(traveler)
            // console.log('Sente-se, logo iremos sair.')
            this.capacity--
        }
    }
    shouldQuarantine(){
        let cont = 0
        this.passageiros.forEach(viajante=>{
            if(viajante.isHealthy === false){
                cont ++
                }
        })
        if(cont !== 0){
            return true
        }
        else{
            return false
        }
            
        
    }
    totalFood(){
        let total = 0
        this.passageiros.forEach(viajante => {
            total += viajante.food
            })
            return total

    }
}
// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
 
console.log(`${wagon.getAvailableSeatCount()} should be 2`);
 
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
 
wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
 
henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)
 
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);

// let wagon = new Wagon(4, [])
// let juan = new Traveler('Ruan')
// let rick = new Traveler('Rick')
// let leh = new Traveler('Letícia')


// wagon.join(juan)
// wagon.join(rick)
// wagon.join(leh)
// juan.eat()
// juan.eat()
// juan.hunt()
// juan.eat()

// console.log(wagon.shouldQuarantine())
// console.log(wagon.totalFood())
// console.log(wagon.getAvailableSeatCount())
// let travel = new Traveler('Rox', 1, true)

// travel.hunt()
// travel.eat()
// travel.eat()
// travel.eat()
// console.log(travel)
// let carr = new Wagon(5, ['maria', 'ricardo'])

// console.log(carr.getAvailableSeatCount())





