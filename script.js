const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');
let photoArray = [];

//Unsplash API
const count = 10;
// 10 photos et plus peuvent étre affichées
const apiKey = 'rnl2uXv8UHghp5USHuUrDOdTvmbRg5mFagoHMh2LGGM';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Helper Function to Set attribute on Dom
function displayPhotos(){
    //Run function for each objecy in photos
photoArray.forEach(photo =>{
    //Create <a> to link to unsplash
    const item = document.createElement('a');
    item.setAttribute('href',photo.links.html);
    item.setAttribute('target','_blank');
    //create <img> for photo
    const img =document.createElement('img');
    img.setAttribute('src',photo.urls.regular);
    img.setAttribute('alt',photo.urls.alt_description);
    img.setAttribute('title',photo.urls.alt_description);
// Put <img> inside <a> , then put both inside imagecontainer element
item.appendChild(img);
imageContainer.appendChild(item);
});

}


// Create Elements for links & photos,add to DOM

// Get photos from unsplash API
async function getPhotos () {

    try {
        const response = await fetch(apiUrl);
       photoArray = await response.json();
        console.log(photoArray);
        displayPhotos();
    } catch (error) {
        // Catch Error Here
    }
}
// on Load

//check to see if scrolling near bottom of page , load more photos
window.addEventListener('scroll',()=>{
  if(window.innerHeight+window.scrollY>=document.body.offsetWidth -1000)
  getPhotos();
  console.log('load more');
  });

  getPhotos();

