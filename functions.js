function displayCountry (item) {
    const flag=document.getElementById('flag'+count);
    const country=document.getElementById('country'+count);
    const population=document.getElementById('population'+count);
    const capital=document.getElementById('capital'+count);
    const language=document.getElementById('language'+count);
    const region=document.getElementById('region'+count);
    flag.src=item.flags.svg;
    checkValue(item.name.common, country);
    checkValue(item.population, population);
    checkValue(item.region, region);
    checkValue(item.capital, capital);
    checkLanguage(item, language);
}

function addCountryInCountriesObject(item) {
    const country= {
        name:item.name.common,
        population:item.population,
        region: item.region,
        language: item.languages,
        flag: item.flags.svg
    }
    countriesObject[item.name.common]=country;
}

function addNewDiv (div) {
    const html=`
    <div class="form" id="form${count}">
       <img id="flag${count}"> 
       <h2 id="country${count}"></h2>
       <div class="info-div"> 
            <div>
                <p> capital: </p> 
                <p id="capital${count}"> </p>
            </div>
            <div class="data">
                <p> region: </p> 
                <p id="region${count}"> </p> 
            </div>
            <div>
                <p> population: </p> 
                <p id="population${count}"> </p> 
            </div>
            <div>
                <p> official language: </p> 
                <p id="language${count}"> </p> 
            </div>
       </div>
    </div>
    `
    div.insertAdjacentHTML('beforeend', html);
}

function checkLanguage (item, field) {
    if(item.languages) {
        field.innerHTML=Object.values(item.languages)[0];
    }
    else {
        field.innerHTML="";
    }
}
function checkValue (item, field) {
    if (item==undefined || item==null) {
        field.innerHTML="";
    }
    else {
        field.innerHTML=item;
    }
}

function filterByRegion () {
    const region = selectOptionInput.value;
    for (let country in countriesObject) {
        if(region=='All') {
            makeDivVisible(document.getElementById(`form${Object.keys(countriesObject).indexOf(country)}`));
        }
        else if(countriesObject[country].region==region) {
            //console.log(countriesObject[country].name);
            makeDivVisible(document.getElementById(`form${Object.keys(countriesObject).indexOf(country)}`));
        }
        else {
            //let wasashleli= document.getElementById(`form${Object.keys(countriesObject).indexOf(country)}`);
            makeDivUnvisible(document.getElementById(`form${Object.keys(countriesObject).indexOf(country)}`));
        }
    }
}
function filterByCountry () {
    let input=inputField.value;
    input=input.charAt(0).toUpperCase() + input.slice(1);
    for (let country in countriesObject) {
        if(countriesObject[country].name==input) {
            makeDivVisible(document.getElementById(`form${Object.keys(countriesObject).indexOf(country)}`))
        }
        else {
            makeDivUnvisible(document.getElementById(`form${Object.keys(countriesObject).indexOf(country)}`))
        }
    }

}

function makeDivUnvisible (div) {
    const children=div.querySelectorAll('*');
    div.style.display="none";
    children.forEach(child => {
       child.style.display="none";
    });
}
function makeDivVisible (div) {
    const children=div.querySelectorAll('*');
    div.style.display="flex";
    children.forEach(child => {
        child.style.display="flex";
    });
}
function darkModeOn () {
    document.body.classList.add("dark-mode-bg");
    document.getElementsByTagName("header")[0].classList.add('dark-mode-form');
    document.getElementsByTagName("h1")[0].classList.add('dark-mode-font');
    document.getElementsByTagName("h3")[0].classList.add('dark-mode-font');
    inputField.classList.add('dark-mode-form');
    inputField.classList.add('dark-mode-font');
    submitBtn.style.backgroundColor="hsl(209, 23%, 22%)";
    submitBtn.classList.add('dark-mode-font');
    selectOptionInput.classList.add('dark-mode-form');
    selectOptionInput.classList.add('dark-mode-font');
    for (let i=0; i<document.querySelectorAll('.form').length; i++) {
        document.querySelectorAll('.form')[i].classList.add('dark-mode-form');
    }
    for (let i=0; i<document.getElementsByTagName('h2').length; i++) {
        document.getElementsByTagName('h2')[i].classList.add('dark-mode-font');
    }
    let elements=document.querySelectorAll('.info-div');
    for (let i=0; i<elements.length; i++) {
        let children=elements[i].getElementsByTagName("p");
        for (let j=0; j<children.length; j++) {
            children[j].classList.add('dark-mode-font');
        }
    }
}
function darkModeOff () {
    document.body.classList.remove("dark-mode-bg");
    document.getElementsByTagName("header")[0].classList.remove('dark-mode-form');
    document.getElementsByTagName("h1")[0].classList.remove('dark-mode-font');
    document.getElementsByTagName("h3")[0].classList.remove('dark-mode-font');
    inputField.classList.remove('dark-mode-form');
    inputField.classList.remove('dark-mode-font');
    submitBtn.style.backgroundColor="hsl(0, 0%, 100%)";
    submitBtn.classList.remove('dark-mode-font');
    selectOptionInput.classList.remove('dark-mode-form');
    selectOptionInput.classList.remove('dark-mode-font');
    document.getElementsByTagName('ion-icon')[0].classList.remove('dark-mode-form');
    for (let i=0; i<document.querySelectorAll('.form').length; i++) {
        document.querySelectorAll('.form')[i].classList.remove('dark-mode-form');
    }
    for (let i=0; i<document.getElementsByTagName('h2').length; i++) {
        document.getElementsByTagName('h2')[i].classList.remove('dark-mode-font');
    }
    let elements=document.querySelectorAll('.info-div');
    for (let i=0; i<elements.length; i++) {
        let children=elements[i].getElementsByTagName("p");
        for (let j=0; j<children.length; j++) {
            children[j].classList.remove('dark-mode-font');
        }
    }
}