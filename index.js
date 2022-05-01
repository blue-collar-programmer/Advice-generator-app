/* 
    -Create an initial onload event when triggered makes a fetch request
        - this will be initial piece of advice when the browser loads the window
    
    -next create a click event and attach it to a button that has the icon dice image
    as the button content 
        - when fired this makes a new api    
*/

const url = "https://api.adviceslip.com/advice";
const mainContainer = document.getElementById('mainContainer');
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

window.onload = function () {
    getAdviceOnLoad(url)
        .then((advice) => {
            const div = document.createElement("div");
            div.innerHTML = "";
            const contentContainer = div.classList.add('contentContainer');
            mainContainer.appendChild(div);
            console.log(advice)
            div.innerHTML = `

            <div class = flexContainer > 
            <h5 class = adviceId> Advice #${advice.slip.id} <h5>
            <p>${advice.slip.advice}</p>
            <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
            <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/>
            <g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/>
            <rect x="14" width="6" height="16" rx="3"/></g></g></svg>
            </div>
        <button class= button>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
        </button>
        `
       

        })

}