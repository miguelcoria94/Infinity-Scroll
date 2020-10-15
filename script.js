document.addEventListener("DOMContentLoaded", (event) =>{
    
    const count = 10;
    const apiKey = 'gDW2iUxo4HblHeWneR5hlt9KJH73CaMKQPxRFxrqfUQ';
    const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
    
    async function getPhotos() {
        try {
            const response = await fetch(apiURL);
            const data = await response.json();
            console.log(data)
        } catch (error) {
    
        }
    }
    
    getPhotos()
})

