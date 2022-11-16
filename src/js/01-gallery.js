// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const refDivGallery = document.querySelector(".gallery");
const newGalleryMarkup = createMarkup(galleryItems); 

function createMarkup(gallery){
    return gallery.map(({preview, original,description}) => {
        return `
            <li>
                <a class="gallery__item" href="${original}"">
                    <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                    />
                </a>
            </li>`;}).join("");};

refDivGallery.innerHTML = newGalleryMarkup;
var lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,});

// console.log(galleryItems);
