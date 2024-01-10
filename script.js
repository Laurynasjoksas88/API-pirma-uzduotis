document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'G4YRAJtjGHJg61r9DDP8mqZV11EUZs2mZTMkTjjH76c';
    const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}`;

    const randomImageButton = document.getElementById('changeImageButton');
    const randomImage = document.getElementById('randomImage');

    async function getRandomImage() {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            const imageUrl = data.urls.regular;
            randomImage.src = imageUrl;
        } catch (error) {
            console.error('Error fetching random image:', error);
        }
    }

    randomImageButton.addEventListener('click', getRandomImage);


    getRandomImage();
});






