document.addEventListener('DOMContentLoaded', () => {
    const dogList = document.getElementById('dog-list');
    const dogModal = document.getElementById('dog-modal');
    const closeButton = document.getElementById('close-button');
    const modalDogImage = document.getElementById('modal-dog-image');
    const modalDogTitle = document.getElementById('modal-dog-title');
    const modalDogSex = document.getElementById('modal-dog-sex');
    const modalDogAge = document.getElementById('modal-dog-age');
    const modalDogDescription = document.getElementById('modal-dog-description');

    fetch('https://usersdogs.dmytrominochkin.cloud/dogs')
        .then(response => response.json())
        .then(dogs => {
            dogs.forEach(dog => {
                const dogItem = document.createElement('div');
                dogItem.className = 'dog-item';
                dogItem.innerHTML = `
                    <img src="https://usersdogs.dmytrominochkin.cloud${dog.dogImage}" alt="${dog.title}" width="50" height="50">
                    <div>
                        <h3>${dog.title}</h3>
                        <p>${dog.sex}</p>
                    </div>
                `;
                dogItem.addEventListener('click', () => {
                    modalDogImage.src = `https://usersdogs.dmytrominochkin.cloud${dog.dogImage}`;
                    modalDogTitle.textContent = dog.title;
                    modalDogSex.textContent = dog.sex;
                    modalDogAge.textContent = dog.age;
                    modalDogDescription.textContent = dog.description;
                    dogModal.style.display = 'flex';
                });
                dogList.appendChild(dogItem);
            });
        });

    closeButton.addEventListener('click', () => {
        dogModal.style.display = 'none';
    });

    window.addEventListener('click', event => {
        if (event.target === dogModal) {
            dogModal.style.display = 'none';
        }
    });
});
