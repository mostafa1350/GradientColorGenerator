const colorInputs = document.querySelectorAll(".colors input");
const gradientBox = document.querySelector(".gradienBox");
const selectMenu = document.querySelector(".select-box select");
const textArea = document.querySelector("textarea");
const btnReferesh = document.querySelector(".refresh");
const btnCopy = document.querySelector(".copy");


const randColorFunction = ()=>{
    const randHexColor = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randHexColor}`;
}



const makeGradient =(isTrue)=>{
    if(isTrue){
        colorInputs[0].value = randColorFunction();
        colorInputs[1].value = randColorFunction();
        // console.log(randColorFunction());
    }

    const gradient = `linear-gradient(${selectMenu.value},
                    ${colorInputs[0].value},${colorInputs[1].value})`;

    gradientBox.style.background = gradient;
    textArea.value = `background:\n first code 👉 ${colorInputs[0].value},\nSecond code 👉 ${colorInputs[1].value}`;

}

colorInputs.forEach(input => {
    input.addEventListener("input",() => makeGradient(false));
    
});

// after write to clipboard , then we can use it to show in a console or alert window
const copyCodeValue = () => {

    navigator.clipboard.writeText(textArea.value).then(() => {
        alert("❕ Code value Copied ...👇\n\n" +
            "-----------------------\n" +
            textArea.value +
            "\n-----------------------");
    });
}

selectMenu.addEventListener("change", () => makeGradient(false));
btnReferesh.addEventListener("click",() => makeGradient(true));
btnCopy.addEventListener("click",copyCodeValue);