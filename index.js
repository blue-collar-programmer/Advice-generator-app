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
async function getAdviceOnLoad(URL) {
    try {
        res = await fetch(URL);
        data = await res.json();
        console.log("here is the data =>,", data)
        return data;

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

window.onload = function () {
    getAdviceOnLoad(url)
        .then((advice) => {
            const div = document.createElement("div");
            div.innerHTML = "";
            //const contentContainer = div.classList.add('contentContainer');
            contentContainer.appendChild(div);
            console.log(advice)
            div.innerHTML = `

            <div class = flexContainer > 
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

button.addEventListener('click', ()=>{
    contentContainer.innerHTML='';
   /* const button = document.createElement('button');
    button.classList.add('button');
    mainContainer.appendChild(button);
    button.innerHTML = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>`*/
    getAdviceOnClick(url)
    .then((advice) => {
        const div = document.createElement("div");
        div.innerHTML = "";
        //const contentContainer = div.classList.add('contentContainer');
        contentContainer.appendChild(div);
        console.log(advice)
        div.innerHTML = `

        <div class = flexContainer > 
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