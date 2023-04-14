const container=document.querySelector('.container');
const countriesDiv=document.querySelector('.countries-div');
const countriesList=document.querySelector('.countries-list');
const inputField=document.getElementById('inputField');
const submitBtn=document.querySelector('.submit-btn');
const regionsDiv=document.querySelector('regions-div');
const selectOptionInput=document.querySelector('.selected-option');
const modeButton=document.getElementsByTagName('h3')[0];
let count=0;
let countriesObject = new Object;
let darkMode=false;

fetch(`https://restcountries.com/v3.1/all`)
.then(response => response.json())
.then(data => {
    for(let item of data) {
        addNewDiv(countriesList);
        displayCountry(item);
        addCountryInCountriesObject(item);
        count++;
    }
})


submitBtn.addEventListener('click', function () {
    filterByCountry();
})

selectOptionInput.addEventListener('change', function (){
    filterByRegion();
})

modeButton.addEventListener('click', function () {
    if (darkMode) {
        darkModeOff();
    }
    else {
        darkModeOn();
    }
    darkMode=!darkMode;
})

