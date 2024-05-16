// async function checkImageSize() {
//     const imageIput = document.getElementById('imageInput')
//     const image = imageIput.files[0];


// if(!image) {
//     showMessage("Plase select an image");
//     return;
// }

// if(image.size > 5 * 1024 * 1024) {
//    showMessage("The size is larger than 5MB")
// } else {
//     showMessage("upload succesfully completed")
// }

// }

// function showMessage(x){
//     document.getElementById('message').textContent = x;
// }

//jena tu e ba ni premtim te funksioni cookPizza
function cookPizza() {
    console.log("Cooking pizza....");
    return new Promise(resolve => {
        setTimeout(() =>{
            console.log("Pizza is ready");
            resolve("Delicious Pizza")
        },5000);
    });
}

function playGames() {
    console.log("playing GTA")
}

function draw() {
    console.log("Drawing")
}

function chat() {
    console.log("Chating")
}

async function pizzaParty(){
    console.log("Let's start the pizza party")


const pizzaPromise = cookPizza()

playGames();

draw();

chat();

const pizza = await pizzaPromise;


console.log(`Yay! Time to eat` + pizza + "!")
}

pizzaParty();
