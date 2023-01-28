const loadPhotoes = async () => {
    const url = `https://jsonplaceholder.typicode.com/photos`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhotoes(data);
}

const displayPhotoes = (data) => {
    const showPhotoesContainer = document.getElementById('show-photoes-container');
    const showAll = document.getElementById('show-all-container');
    if (data.length > 10) {
        data = data.slice(0, 10);
        showAll.classList.remove('d-none');
    }
    else {
        showAll.classList.add('d-none');
    }
    data.forEach(photo => {
        console.log(photo);
        const photoesDiv = document.createElement('div');
        photoesDiv.classList.add('col');
        photoesDiv.innerHTML = `
        <div onclick="" class="card">
            <img src="${photo.url}" class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5 class="text-success">ID: ${photo.id}.<br> Album ID: ${photo.albumId}</h5>
                <h5 class="card-title text-primary">${photo.title}</h5>
                <a target="_blank" href="${photo.thumbnailUrl}" class="card-text">${photo.thumbnailUrl}</a>
            </div>
            <div class="text-center py-4">
            <button onclick="loadPhotoDetails(${photo.albumId})" id="btn-show-details" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#photoModal">Details</button>
            </div>

        </div>
    `;
        showPhotoesContainer.appendChild(photoesDiv);
    });

}

const loadPhotoDetails = (albumId) => {
    const photoDetailsConatiner = document.getElementById('photo-details-conatiner');
    const detailsDiv = document.createElement('div');
    detailsDiv.innerHTML = `
     <h3></h3>
      <p></p>
    `;
    modalConatiner.appendChild(modalDiv);
}




loadPhotoes();