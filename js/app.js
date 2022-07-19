'use strict'

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];



let seattle = {
  cookiesPerhour: [], 
  custNum: [],
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  getRandomCustNum: function () {
    for (let i = 0; i < hours.length; i++) {
      let randomNum = randomCustNum(this.minCust, this.maxCust)
      this.custNum.push(randomNum);
    }
  },
  getRandomCookiesNum: function(){
    this.getRandomCustNum();
    for(let i = 0; i < hours.length; i++){
     let numCookies = Math.round(this.avgCookie * this.custNum[i]);
     this.cookiesPerhour.push(numCookies);
    }
  }
}
seattle.getRandomCookiesNum();
console.log(seattle);

function randomCustNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


let articleElement = document.getElementById("seattle-sales");

let ulElem = document.createElement('ul');
console.log(seattle);
for(let i = 0; i < seattle.cookiesPerhour.length; i++){
  let liElem = document.createElement('li');
  liElem.textContent = 'text' + i;
  ulElem.appendChild(liElem);
}
articleElement.appendChild(ulElem);



articleElement.textContent
