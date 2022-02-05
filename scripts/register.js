let salon={
    name:"The Fashion Pet",
    address:{
        street:"Av. University",
        ZIPcode:"22414",
        number:"262-K",
    },
    hours:{
        open:"9:00 am",
        close:"5:00 pm",
    },
    pets:[
        {
            name:"Scooby",
            age:60,
            gender:"male",
            breed:"Dane",
            service:"Grooming",
            owner:"Shaggy",
            phone:"555-5555-55",
        },
        {
            name:"Rupert",
            age:5,
            gender:"Male",
            service:"Grooming",
            owner:"Daniel",
            phone:"222-2222-22"
        },
        {
            name:"Guera",
            age:7,
            gender:"Female",
            service:"Grooming",
            owner:"Antuanet",
            phone:"333-3333-33" 
        },
        {
            name:"Pickles",
            age:10,
            gender:"Male",
            service:"Grooming",
            owner:"Daniel",
            phone:"222-2222-22"
        }
    ]
}
console.log(salon.pets);



function displayPetNames(){
    //travel the array
    //display names in the console
    function displayPets(){
        for(let i=0;i<PetNames.length;i++)
            console.log(ages[i]);
    }
}
alert(salon.pets.length);