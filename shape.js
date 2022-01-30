const resultCode = document.getElementById("result-code");
const styleSelector = document.getElementById("style-selector");

styleSelector.addEventListener("change", function() {
    if(styleSelector.value == "css") {
        resultCode.innerHTML = "css code goes here";
    } else if(styleSelector.value == "sass") {
        resultCode.innerHTML = "sass code goes here";
    } else if(styleSelector.value == "less") {
        resultCode.innerHTML = "less code goes here";
    }
});