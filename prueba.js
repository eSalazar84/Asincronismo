fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {

        const tarjetasContainer = document.getElementById("tarjetasContainer")

       data.results.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("card");
            div.classList.add("card-format")
            const nombreCell = document.createElement("h4");
            const speciesCell = document.createElement("p");
            const genderCell = document.createElement("p");
            const fotoCell = document.createElement('img');
            fotoCell.classList.add("img-thumbnail");
            nombreCell.textContent = item.name;
            speciesCell.textContent = `Species: ${item.species}`;
            genderCell.textContent = `Gender: ${item.gender}`;
            fotoCell.src = item.image;
            div.appendChild(fotoCell);
            div.appendChild(nombreCell);
            div.appendChild(speciesCell);
            div.appendChild(genderCell);
            tarjetasContainer.appendChild(div);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });



