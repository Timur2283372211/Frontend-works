"use strict";

var galleryItems = [{
  preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
  description: 'Hokkaido Flower'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
  description: 'Container Haulage Freight'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
  description: 'Aerial Beach View'
}, {
  preview: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
  description: 'Flower Blooms'
}, {
  preview: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
  description: 'Alpine Mountains'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
  description: 'Mountain Lake Sailing'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
  description: 'Alpine Spring Meadows'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
  description: 'Nature Landscape'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
  description: 'Lighthouse Coast Sea'
}]; // Пошук елементів DOM

var galleryContainer = document.querySelector('.js-gallery');
var lightbox = document.querySelector('.js-lightbox');
var lightboxImage = document.querySelector('.lightbox__image');
var closeBtn = document.querySelector('[data-action="close-lightbox"]');
var overlay = document.querySelector('.lightbox__overlay'); // 1. Рендер галереї

function renderGallery() {
  var galleryMarkup = galleryItems.map(function (_ref) {
    var preview = _ref.preview,
        original = _ref.original,
        description = _ref.description;
    return "\n    <li class=\"gallery__item\">\n      <a class=\"gallery__link\" href=\"".concat(original, "\">\n        <img\n          class=\"gallery__image\"\n          src=\"").concat(preview, "\"\n          data-source=\"").concat(original, "\"\n          alt=\"").concat(description, "\"\n        />\n      </a>\n    </li>\n  ");
  }).join('');
  galleryContainer.innerHTML = galleryMarkup;
} // 2. Делегування подій на галереї


galleryContainer.addEventListener('click', function (e) {
  e.preventDefault();
  var target = e.target;
  if (target.nodeName !== 'IMG') return;
  var largeImageUrl = target.dataset.source;
  var altText = target.alt;
  openLightbox(largeImageUrl, altText);
}); // 3. Відкриття модального вікна

function openLightbox(url, alt) {
  lightbox.classList.add('is-open');
  lightboxImage.src = url;
  lightboxImage.alt = alt; // Додаємо слухачі для закриття

  window.addEventListener('keydown', handleKeyPress);
  closeBtn.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', closeLightbox);
} // 4. Закриття модального вікна


function closeLightbox() {
  lightbox.classList.remove('is-open');
  lightboxImage.src = '';
  lightboxImage.alt = ''; // Видаляємо слухачі

  window.removeEventListener('keydown', handleKeyPress);
  closeBtn.removeEventListener('click', closeLightbox);
  overlay.removeEventListener('click', closeLightbox);
} // 5. Закриття по ESC


function handleKeyPress(e) {
  if (e.code === 'Escape') {
    closeLightbox();
  }
} // Ініціалізація


renderGallery();
//# sourceMappingURL=script.dev.js.map
