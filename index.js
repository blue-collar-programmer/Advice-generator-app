/* 
    -Create an initial onload event when triggered makes a fetch request
        - this will be initial piece of advice when the browser loads the window
    
    -next create a click event and attach it to a button that has the icon dice image
    as the button content 
        - when fired this makes a new api    
*/
// --Global variables
const url = "https://api.adviceslip.com/advice";
const mainContainer = document.getElementById('mainContainer');
const contentContainer = document.getElementById('contentContainer');
const button = document.getElementById('btn');

//Create a 404 page and use in error handling

// Made initial fetch api request using an async function await keyword
async function getAdviceOnLoad(URL) {
    try {
        res = await fetch(URL);
        data = await res.json();
        console.log("here is the data =>,", data)
        return data;
// handling any errors in the api call through try and catch statement to test for any errors in the try block
    } catch (e) { 
        console.log('the error', e);
    }
}

async function getAdviceOnClick(URL) {
    try {
        res = await fetch(URL);
        data = await res.json();
        console.log("here is the data =>,", data)
        return data;

    } catch (e) {
        console.log('the error', e);
    }
}
// Makes a api request once the window is loaded i.e. the initial api request 
window.onload = function () {
    getAdviceOnLoad(url)
        .then((advice) => {
            const div = document.createElement("div");
            div.innerHTML = "";
            contentContainer.appendChild(div);
            console.log(advice)
            div.innerHTML = `

            <div class = contentContainer > 
            <h5 class = adviceId> Advice #${advice.slip.id} <h5>
            <p>"${advice.slip.advice}"</p>
            <div class = partitionContainer>
            <div class = leftLine></div>
            <div class = dotsContainer>
            <div class = middleDots leftDot></div>
            <div class = middleDots rightDot></div>
            </div>
            <div class = rightLine></div>
            </div>
            </div>
        `
                    
        })

}

/* This is the button event, makes an api call when clicked*/ 
button.addEventListener('click', ()=>{
    contentContainer.innerHTML='';
    getAdviceOnClick(url)
    .then((advice) => {
        const div = document.createElement("div");
//This clears the previous dynamic content form the main-container before rendering new content from api request
        div.innerHTML = ""; 
        contentContainer.appendChild(div);
//Testing the parsed object data recived from the api request in the console
        console.log(advice)
        div.innerHTML = `

        <div class = contentContainer > 
        <h5 class = adviceId> Advice #${advice.slip.id} <h5>
        <p>"${advice.slip.advice}"</p>
        <div class = partitionContainer>
        <div class = leftLine></div>
        <div class = dotsContainer>
        <div class = middleDots leftDot></div>
        <div class = middleDots rightDot></div>
        </div>
        <div class = rightLine></div>
        </div>
        </div>
    `
    
                
    })

})



/*

*/