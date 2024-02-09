document.addEventListener('DOMContentLoaded', function () {
   // Fetch data from the People in Space API
   fetch('http://api.open-notify.org/astros.json')
       .then(response => response.json())
       .then(data => {
           displaySpaceInfo(data.people);
           displaySpaceships(data.people);
       })
       .catch(error => console.error('Error fetching data:', error));
});

function displaySpaceInfo(people) {
   const spaceInfoContainer = document.getElementById('space-info');

   // Display the total number of people in space
   const totalPeople = document.createElement('p');
   totalPeople.textContent = `Total people in space: ${people.length}`;
   spaceInfoContainer.appendChild(totalPeople);

   // Display information about each person
   const peopleList = document.createElement('ul');
   people.forEach(person => {
       const listItem = document.createElement('li');
       listItem.textContent = `${person.name} is on ${person.craft}.`;
       peopleList.appendChild(listItem);
   });
   spaceInfoContainer.appendChild(peopleList);
}

function displaySpaceships(people) {
   const spaceshipsContainer = document.getElementById('spaceships');

   people.forEach(person => {
       const spaceship = document.createElement('div');
       spaceship.className = 'spaceship';
       spaceship.dataset.info = `${person.name}\n${person.craft}`;
       
       // Set the background image for each spaceship
       spaceship.style.backgroundImage = `url('spaceship.png')`;

       spaceshipsContainer.appendChild(spaceship);
   });
}