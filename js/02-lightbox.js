import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const makeImgElem = ({ preview, original, description }) =>
  ` <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>`;

const galleryElements = galleryItems.map(makeImgElem).join('');
gallery.insertAdjacentHTML('afterbegin', galleryElements);
new SimpleLightbox('.gallery .gallery__link', { captionsData: 'alt', captionDelay: 250 });

console.log(galleryItems);
