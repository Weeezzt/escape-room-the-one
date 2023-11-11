//Getting the neccesary html elements.
const hamburgerButton = document.querySelector('.header__button-container');
const dropDownMenu = document.querySelector(".header__drop-down");

const crossButton = document.querySelector(".cross-container");

const whiteDiv = document.querySelector(".white-div");

// listening for clicking on the "button"
hamburgerButton.addEventListener("click", () => {
    //timer so so the transition goes how i want it to.
    setTimeout(() => {
        dropDownMenu.classList.add("dropped-down")}
        , 130);

    //Giving the innner container the class so it will fade in with opacity of 0.6    
    whiteDiv.classList.add("white-div-dropped");

    //removing the scroll function of the page
    document.body.style.overflow = "hidden";

    //display -- none on the button
    hamburgerButton.classList.add("dont-display");

    //eventlistener for the cross-button    
    crossButton.addEventListener("click", () => {
        
        //dispaly--none on the menu 
        dropDownMenu.classList.remove("dropped-down");

        //removing display none from the dropdown button
        hamburgerButton.classList.remove("dont-display");

        //removing the class from whitediv so opacity goes to normal etc
        whiteDiv.classList.remove("white-div-dropped");

        //make sure you can scroll the page.
        document.body.style.overflow = "scroll";


    })

})
