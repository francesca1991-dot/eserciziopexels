
const API_KEY = "j07T8QsQvpZqfnyAsDymK7niTDdjcxqvkiwbT4KSzpyDBFiyoJ8skkLn"; 
const gallery = document.getElementById('gallery'); 

const options = {
    method: 'GET', 
    headers: {
        Authorization: API_KEY 
    }
};


fetch('https://api.pexels.com/v1/search?query=fiori', options)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        displayImages(data.photos); 
    })
    .catch(error => console.error('Errore:', error));

function displayImages(photos) {
    gallery.innerHTML = ''; 

    photos.forEach(photo => {
        const col = document.createElement('div');
        col.classList.add('col-md-4', 'mb-4');

        col.innerHTML = `
            <div class="card">
                <img src="${photo.src.medium}" class="card-img-top" alt="${photo.alt}">
                <div class="card-body">
                    <h5 class="card-title">Fotografo: ${photo.photographer}</h5>
                    <a href="${photo.src.original}" target="_blank" class="btn btn-primary">Scarica Immagine</a>
                </div>
            </div>
        `;

        gallery.appendChild(col);
    });
}

