const container = document.getElementById("summary-container");

function createSummaryElem(icon, category, score) {
    return (
    ` <div class="summary">
        <div>
        <img src=${icon}>
        <p class="summary__tittle">${category}</p>
        </div>
        <p class="summary__result"><span class="summary__result-score">${score}</span> / 100</p>
  </div>  
  `)
}

fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(value => {
            container.innerHTML += createSummaryElem(value.icon, value.category, value.score)
        })
    })
    .catch(e => {
        console.log(e)
    })
