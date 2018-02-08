import { Component, ViewChild } from '@angular/core';
import { List } from 'ionic-angular';

@Component({...})
export class MyClass {
  @ViewChild(List) list: List;

  constructor() { }

  stopSliding() {
    this.list.enableSlidingItems(false);
  }
}
function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",'https://jsonplaceholder.typicode.com/users',false);
    Httpreq.send(null);
    return Httpreq.responseText;
}
var json_obj = JSON.parse(Get('https://jsonplaceholder.typicode.com/users'));
console.log("this is the author name: "+json_obj.author_name);

const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(userId => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h3 = document.createElement('h3');
      h3.textContent = users.name;

      const p = document.createElement('p');
      users.email = users.email.substring(0, 300);
      p.textContent = `${users.email}...`;

      container.appendChild(card);
      card.appendChild(h3);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();
