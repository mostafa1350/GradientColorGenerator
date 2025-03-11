const colorInputs = document.querySelectorAll(".colors input");
const gradientBox = document.querySelector(".gradienBox");
const selectMenu = document.querySelector(".select-box select");
const textArea = document.querySelector("textarea");
const btnReferesh = document.querySelector(".refresh");



const generateGradient =()=>{
    const gradient = `linear-gradient(${selectMenu.value},
                    ${colorInputs[0].value},${colorInputs[1].value})`;

    gradientBox.style.background = gradient;
    textArea.value = `background: ${gradient}`;

}

colorInputs.forEach(input => {
    input.addEventListener("input",generateGradient);
    
});

selectMenu.addEventListener("change", generateGradient);