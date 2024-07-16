const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const clearBtn = document.getElementById("clear-btn");
const output = document.getElementById("output");

const romanNumeralMap = new Map([
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
]);

const handleClickConvertBtn = ()=>{
    if(validateInput()){
        output.textContent = convertArabicNumeralToRoman();
    }
}

const handlePressingEnter = (event)=>{
    if(event.key === "Enter") handleClickConvertBtn();
}

const handleClickClearBtn = ()=>{
    numberInput.value = "";
    output.textContent = "";
}

const validateInput = ()=>{
    const numberEntered = parseInt(numberInput.value);

    if(numberInput.value === "0" || numberEntered <= 0) {
        output.textContent = "Please enter a number greater than or equal to 1";
        return false;
    } else if(!numberEntered){
        output.textContent = "Please enter a valid number";
        return false;
    } else if(numberEntered > 3999) {
        output.textContent = "Please enter a number less than or equal to 3999";
        return false;
    }

    return true;
}// end validateInput fcn

const convertArabicNumeralToRoman = ()=>{
    let numberEntered = parseInt(numberInput.value);
    let romanNumeral = "";

    for(const [key, value] of romanNumeralMap){
        while(numberEntered >= value){
            romanNumeral += key;
            numberEntered -= value;
        }
    }

    return romanNumeral;
}// end convertArabicNumeralToRoman fcn

convertBtn.addEventListener("click", handleClickConvertBtn);
numberInput.addEventListener("keydown", handlePressingEnter);
clearBtn.addEventListener("click", handleClickClearBtn);
