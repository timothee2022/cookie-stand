'use strict'

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomCustNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let seattle = {
  name: 'Seattle',
  cookiesPerhour: [],
  cookiesTotal: 0,
  custNum: [],
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  getRandomCustNum: function () {
    for (let i = 0; i < hours.length; i++) {
      let randomNum = randomCustNum(this.minCust, this.maxCust);
      this.custNum.push(randomNum);
    }
  },
  getRandomCookiesNum: function () {
    this.getRandomCustNum();
    for (let i = 0; i < hours.length; i++) {
      let numCookies = Math.round(this.avgCookie * this.custNum[i]);
      this.cookiesPerhour.push(numCookies);
      this.cookiesTotal += numCookies;
    }

  },

  render: function () {

    let div = document.getElementById("seattle-sales");

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    div.appendChild(h2Elem);


    let ulElem = document.createElement('ul');

    for (let i = 0; i < seattle.cookiesPerhour.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiesPerhour[i]} cookies`;
      ulElem.appendChild(liElem);
    };
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.cookiesTotal} cookies`;
    ulElem.appendChild(liElem);

    div.appendChild(ulElem);
  },
};
seattle.getRandomCustNum();
seattle.getRandomCookiesNum();
console.log(seattle);
seattle.render();




let tokyo = {
  name: 'Tokyo',
  cookiesPerhour: [],
  cookiesTotal: 0,
  custNum: [],
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  getRandomCustNum: function () {
    for (let i = 0; i < hours.length; i++) {
      let randomNum = randomCustNum(this.minCust, this.maxCust);
      this.custNum.push(randomNum);
    }
  },
  getRandomCookiesNum: function () {
    this.getRandomCustNum();
    for (let i = 0; i < hours.length; i++) {
      let numCookies = Math.round(this.avgCookie * this.custNum[i]);
      this.cookiesPerhour.push(numCookies);
      this.cookiesTotal += numCookies;
    }

  },

  render: function () {

    let div = document.getElementById("seattle-sales");

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    div.appendChild(h2Elem);


    let ulElem = document.createElement('ul');

    for (let i = 0; i < tokyo.cookiesPerhour.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiesPerhour[i]} cookies`;
      ulElem.appendChild(liElem);
    };
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.cookiesTotal} cookies`;
    ulElem.appendChild(liElem);

    div.appendChild(ulElem);
  },
};
tokyo.getRandomCustNum();
tokyo.getRandomCookiesNum();
console.log(tokyo);
tokyo.render();





let dubai = {
  name: 'Dubai',
  cookiesPerhour: [],
  cookiesTotal: 0,
  custNum: [],
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  getRandomCustNum: function () {
    for (let i = 0; i < hours.length; i++) {
      let randomNum = randomCustNum(this.minCust, this.maxCust);
      this.custNum.push(randomNum);
    }
  },
  getRandomCookiesNum: function () {
    this.getRandomCustNum();
    for (let i = 0; i < hours.length; i++) {
      let numCookies = Math.round(this.avgCookie * this.custNum[i]);
      this.cookiesPerhour.push(numCookies);
      this.cookiesTotal += numCookies;
    }

  },

  render: function () {

    let div = document.getElementById("seattle-sales");

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    div.appendChild(h2Elem);


    let ulElem = document.createElement('ul');

    for (let i = 0; i < tokyo.cookiesPerhour.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiesPerhour[i]} cookies`;
      ulElem.appendChild(liElem);
    };
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.cookiesTotal} cookies`;
    ulElem.appendChild(liElem);

    div.appendChild(ulElem);
  },
};
dubai.getRandomCustNum();
dubai.getRandomCookiesNum();
console.log(dubai);
dubai.render();






let paris = {
  name: 'Paris',
  cookiesPerhour: [],
  cookiesTotal: 0,
  custNum: [],
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  getRandomCustNum: function () {
    for (let i = 0; i < hours.length; i++) {
      let randomNum = randomCustNum(this.minCust, this.maxCust);
      this.custNum.push(randomNum);
    }
  },
  getRandomCookiesNum: function () {
    this.getRandomCustNum();
    for (let i = 0; i < hours.length; i++) {
      let numCookies = Math.round(this.avgCookie * this.custNum[i]);
      this.cookiesPerhour.push(numCookies);
      this.cookiesTotal += numCookies;
    }

  },

  render: function () {

    let div = document.getElementById("seattle-sales");

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    div.appendChild(h2Elem);


    let ulElem = document.createElement('ul');

    for (let i = 0; i < tokyo.cookiesPerhour.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiesPerhour[i]} cookies`;
      ulElem.appendChild(liElem);
    };
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.cookiesTotal} cookies`;
    ulElem.appendChild(liElem);

    div.appendChild(ulElem);
  },
};
paris.getRandomCustNum();
paris.getRandomCookiesNum();
console.log(paris);
paris.render();





let lima = {
  name: 'Lima',
  cookiesPerhour: [],
  cookiesTotal: 0,
  custNum: [],
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  getRandomCustNum: function () {
    for (let i = 0; i < hours.length; i++) {
      let randomNum = randomCustNum(this.minCust, this.maxCust);
      this.custNum.push(randomNum);
    }
  },
  getRandomCookiesNum: function () {
    this.getRandomCustNum();
    for (let i = 0; i < hours.length; i++) {
      let numCookies = Math.round(this.avgCookie * this.custNum[i]);
      this.cookiesPerhour.push(numCookies);
      this.cookiesTotal += numCookies;
    }

  },

  render: function () {

    let div = document.getElementById("seattle-sales");

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    div.appendChild(h2Elem);


    let ulElem = document.createElement('ul');

    for (let i = 0; i < tokyo.cookiesPerhour.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiesPerhour[i]} cookies`;
      ulElem.appendChild(liElem);
    };
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.cookiesTotal} cookies`;
    ulElem.appendChild(liElem);

    div.appendChild(ulElem);
  },
};
lima.getRandomCustNum();
lima.getRandomCookiesNum();
console.log(lima);
lima.render();

