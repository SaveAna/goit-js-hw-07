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

gallery.addEventListener('click', onImageClick);

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  //   const imgDataSource = event.target.getAttribute('data-source');

  //   const instance = basicLightbox.create(`<img src = "${imgDataSource}">`);
  //   instance.show(() => document.addEventListener('keydown', onDocumentKeyDown));

  //   function onDocumentKeyDown(event) {
  //     if (event.code !== 'Escape') {
  //       return;
  //     }
  //     instance.close(() => document.removeEventListener('keydown', onDocumentKeyDown));
  //   }
}

console.log(galleryItems);
