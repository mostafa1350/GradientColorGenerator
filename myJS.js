const colorInputs = document.querySelector(".colors .inputs");


const generateGradient =()=>{
    const gradient = `linear-gradient(to top left,
                    ${colorInputs[0].value},${colorInputs[1].value})`;
    console.log(gradient);
}
colorInputs.forEach(input => {
    input.addEventListener("input",generateGradient);
    
});