



        function fetchRandomImage() {
            const imageContainer = document.getElementById('imageContainer');

            // Array of sample images for demonstration
            const images = [
                'https://placekitten.com/300/200',
                'https://placeimg.com/300/200/nature',
                'https://placebear.com/300/200',
                'https://placekitten.com/300/200',
                // Add more image URLs as needed
            ];

            // Get a random index to select a random image
            const randomIndex = Math.floor(Math.random() * images.length);

            // Create an image element
            const imageElement = document.createElement('img');
            imageElement.src = images[randomIndex];
            imageElement.alt = 'Random Image';

            // Clear previous image and append the new one
            imageContainer.innerHTML = '';
            imageContainer.appendChild(imageElement);
        }
   
