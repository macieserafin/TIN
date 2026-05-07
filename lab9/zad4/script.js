const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const galleryImages = document.querySelectorAll(".gallery img");
let currentImage = 0;

function showImage(index) {
    currentImage = index;
    lightboxImage.src = galleryImages[currentImage].src;
    lightboxImage.alt = galleryImages[currentImage].alt;
}

galleryImages.forEach(function (image, index) {
    image.addEventListener("click", function () {
        showImage(index);
        lightbox.classList.add("open");
    });
});

document.getElementById("close-lightbox").addEventListener("click", function () {
    lightbox.classList.remove("open");
});

document.getElementById("previous-image").addEventListener("click", function () {
    const previousImage = (currentImage - 1 + galleryImages.length) % galleryImages.length;
    showImage(previousImage);
});

document.getElementById("next-image").addEventListener("click", function () {
    const nextImage = (currentImage + 1) % galleryImages.length;
    showImage(nextImage);
});
