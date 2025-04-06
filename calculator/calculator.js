let string = "";
let memory = 0; 
let inputField = document.querySelector(".input");
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        let buttonText = e.target.innerText;

        if (buttonText === "=") {
            try {
                string = eval(string);
                inputField.value = string;
            } catch (error) {
                inputField.value = "Error"; 
                string = "";
            }
        } 
        else if (buttonText === "C") {
            string = "";
            inputField.value = "";
        } 
        else if (buttonText === "%") {
            string = (eval(string) / 100).toString();
            inputField.value = string;
        } 
        else if (buttonText === "M+") {
            memory = eval(string) || 0; 
            inputField.value = "Memory Saved";
            string = "";
        } 
        else if (buttonText === "M-") {
            string = memory.toString(); 
            inputField.value = string;
        } 
        else {
            string += buttonText;
            inputField.value = string;
        }
    });
});
