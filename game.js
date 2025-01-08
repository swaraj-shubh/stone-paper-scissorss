let userscr = 0;
let compscr = 0;
const choices = document.querySelectorAll(".choice");

let u = document.querySelector("#userscore");
let c = document.querySelector("#compscore");



const comp = () => {
    // using => Math.random();
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}



const playgame = (userschoice) => {
    console.log("user choice = ",userschoice);
    // generate computer choice
    const compchoice = comp();
    console.log("comp choice = ", compchoice);

    if(userschoice===compchoice){
        draw()
    }else{
        if(userschoice==="rock"){
            if(compchoice==="paper")
                compwins();
            else
                userwins();
        }
        if(userschoice==="paper"){
            if(compchoice==="scissors")
                compwins();
            else
                userwins();
        }
        if(userschoice==="scissors"){
            if(compchoice==="rock")
                compwins();
            else
                userwins();
        }
    }

}; 



choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userschoice = choice.getAttribute("id");
        console.log("choice was clicked",choice.getAttribute("id"));
        playgame(userschoice);
    })
})


const msg = document.querySelector("#msg")


const draw = () => {
    console.log("game was draw")
    msg.innerText = "Game was Draw"
    msg.style.backgroundColor = 'aqua';
}

const userwins = () => {
    console.log("user wins")
    msg.innerText = "You Win!"
    userscr++;
    u.innerText=userscr
    msg.style.backgroundColor = 'greenyellow'
}

const compwins = () => {
    console.log("user lose")
    msg.innerText = "You Lose!"
    compscr++
    c.innerText=compscr
    msg.style.backgroundColor = 'red'
}
