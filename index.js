let characters = ["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", "I", "i", "J", "j", 
                "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", 
                "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z", "!", "?", "&", "%", "#", "(", ")", "_",
                "@", "<", ">", "/", "|", "^", "+", "=", "$"] 
let firstOption = document.getElementById("first__option")
let secondOption = document.getElementById("second__option")
let thirdOption = document.getElementById("third__option")
let forthOption = document.getElementById("forth__option")

function generatePasswords() {
    firstOption.textContent = ""
    secondOption.textContent = ""
    thirdOption.textContent = ""
    forthOption.textContent = ""
    let lengthEl = Number(document.getElementById("input_el").value)
    if (Number.isInteger(lengthEl) && lengthEl <21) {
        for (i = 0; i < lengthEl; i++) {
            let randomNumber = Math.floor(Math.random() * 69)
            firstOption.textContent += characters[randomNumber]
        }
        for (i = 0; i < lengthEl; i++) {
            let randomNumber = Math.floor(Math.random() * 69)
            secondOption.textContent += characters[randomNumber]
        }
        for (i = 0; i < lengthEl; i++) {
            let randomNumber = Math.floor(Math.random() * 69)
            thirdOption.textContent += characters[randomNumber]
        }
        for (i = 0; i < lengthEl; i++) {
            let randomNumber = Math.floor(Math.random() * 69)
            forthOption.textContent += characters[randomNumber]
        }
    } else if (lengthEl > 20) {
        alert("To big. Please, enter a smaller number!")
        console.log(typeof(lengthEl))
    } else {
        alert("Please, enter a number!")
        console.log(typeof(lengthEl))
    }
}