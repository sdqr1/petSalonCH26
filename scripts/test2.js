//object literal 
let lion = {
    name:"Simba",
    kingOfJungle:true,
    food:"Carnivore"
}
let lion2 = {
    name:"Nala",
    kingOfJungle:false,
    food:"Carnivore"
}
let l = {
    name:"Nala",
    kingOfJungle:false,
    food:"Carnivore"
}

//object constructor
function Animal(name,kingOfJungle,food){
    this.name=name;
    this.kingOfJungle=kingOfJungle;
    this.food=food;
    this.hunger=10;
    this.feed=function(){
        console.log("Feeding...");
        this.hunger=this.hunger-2;
    }
}
//create objects
let lionC = new Animal("Simba", true, "Carnivore");
console.log(lionC.feed());

let student = {
    name:"Squidlium",
    kingOfJungle:false,
    food:"pasta"
}
//create a constructor 
function School(){
    this.name=name;

    }

    let instructior ={
        nameof:"Professor Plum",
        specialty:"Business",
        otherInfo:true
    }
    function Treacher(nameOf,otherInfo,specialty){
        this.nameof=nameOf;
        this.otherInfo=otherINfo;
        this.specialty=specialyu;
    }
    let Anderson = new Treacher("Mr.Anderson","Masters","Technology");
    console.log(Anderson)
    console.log(instructor)
