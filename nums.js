// Numbers API

let numBaseURL = 'http://numbersapi.com'

let numFacts = axios.get(`${numBaseURL}/1..10`)
const multipleNums = document.getElementById("multiple-nums")

numFacts 
    .then(data => {
        console.log(data.data)
        for(let d in data.data) {
            let fact = document.createElement('li')
            fact.innerText = data.data[d]
            multipleNums.append(fact)
        }
    })
    .catch(err => console.log(err))

const favNum = document.getElementById("fav-num")
let favNumPromises = []

for(let i = 0; i < 4; i++) {
    let fact = axios.get(`${numBaseURL}/27`)
    favNumPromises.push(fact)
}

Promise.all(favNumPromises)
    .then(favNumFacts => {
        for(let data in favNumFacts) {
            let fact = favNumFacts[data].data
            console.log(fact)
            let factLi = document.createElement('li')
            factLi.innerText = fact
            favNum.append(factLi)
        }
    })
