document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from the People in Space API
    fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {
            displaySpaceships(data.people);
            displaySpaceInfo(data.people);
            updatePeopleCount(data.number);
        })
        .catch(error => console.error('Error fetching data:', error));
});

function updatePeopleCount(count) {
    const peopleCountElement = document.getElementById('peopleCount');
    peopleCountElement.textContent = `There are ${count} people in space`;
}

function displaySpaceInfo(people) {
    const spaceInfoContainer = document.getElementById('space-info');

    // Display information about each person at the bottom
    const peopleList = document.createElement('div');
    peopleList.id = 'people-list';
    people.forEach(person => {
        const personInfo = document.createElement('p');
        personInfo.textContent = `${person.name} is on ${person.craft}.`;
        peopleList.appendChild(personInfo);
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