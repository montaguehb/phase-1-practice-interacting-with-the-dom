//counter that goes up by 1 every second
let intervalID = setInterval(() => {counter.textContent = parseInt(counter.textContent) + 1}, 1000);

//Adds 1 to the current value of the counter
plus.addEventListener("click", () => counter.textContent = parseInt(counter.textContent) + 1);

//subtracts 1 from the current value of the counter
minus.addEventListener("click", () => counter.textContent = parseInt(counter.textContent) - 1);

//like button that takes the current counter number and adds a comment to an unordered list below with the structure "# has been liked x times" where x is the number of times that the like button was hit for that #
heart.addEventListener("click", () => {
    const currentCount = counter.textContent
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const currentLi = document.querySelector(`li[data-num="${currentCount}"]`)

    if(currentLi) {
        if(currentLi.querySelector("span").textContent === "1")
        {
            currentLi.innerHTML = currentLi.innerHTML.replace("time", "times");
        }
        currentLi.querySelector("span").textContent = parseInt(currentLi.querySelector("span").textContent) + 1;
    }
    else {
        newSpan.innerText = "1";

        newLi.setAttribute("data-num", currentCount);
        newLi.append(`${currentCount} has been liked `, newSpan, " time");

        document.querySelector(".likes").appendChild(newLi)
         
    }
})

//A pause button that prevents you from hitting submit, +, -, or like buttons and switches the text to resume
pause.addEventListener("click", (event) => {
    if(!intervalID) {
        intervalID = setInterval(() => {counter.textContent = parseInt(counter.textContent) + 1}, 1000);
    }
    else {
        clearInterval(intervalID);
        intervalID = null;
    }
    for(let button of document.querySelectorAll("button")) {
        if(button.id !== "pause") {
            button.disabled === false ? button.disabled = true:button.disabled = false;   
        }
        else {
            button.innerText === "pause" ? button.innerText = "resume":button.innerText = "pause"
        }
    }
})

//a submit form that puts a comment in a new p below the comments section and clears the form
document.querySelector("#comment-form").addEventListener("submit", (event) => {
    event.preventDefault();

    let newP = document.createElement("p");
    newP.textContent = document.querySelector("#comment-input").value; 
    document.querySelector("#list").appendChild(newP);
});