const app = document.getElementById('root');

//create container for film content
const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

//Access Ghibli API on load
var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {

  //Begin accessing JSON data here
  var data = JSON.parse(this.response);
  var count =1;
	
  data.forEach(film => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
	  h1.textContent = "Movie"+ count;
	  
	  const pDes = document.createElement('p');
 	  pDes.textContent = film.title;
	  
	  count++;
	  
      const p = document.createElement('p');
	  const pyear = document.createElement('p');
      pyear.textContent = `${film.release_date}`;
      film.description = film.description.substring(0, 300);
      p.textContent = `${film.description}...`;

      container.appendChild(card);
      card.appendChild(h1);
	  card.appendChild(pyear);
	  card.appendChild(p);
	  const btn = document.createElement("BUTTON");
	  btn.textContent = "Answer";
	  btn.addEventListener('click', function() {
			card.appendChild(pDes);
	  }, false);
	  card.appendChild(btn);
    });
}

request.send();