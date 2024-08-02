// const images = document.querySelectorAll('img[data-src]');
// const pics = [];

// document.addEventListener('DOMContentLoaded', function() {
//     function loadImage(entry) {
//         const image = entry.target;
//         // console.log(image);
//         const originalSrc = image.getAttribute('src');
//         pics.push(originalSrc)

//         image.src = data-src;
//     }  
//     console.log(loadImage)
// })

const imageObserver = new IntersectionObserver(
    (entries, observer) => {
        console.log(entries)
        entries.forEach(entry => {
            if (entry.IntersectionObserver) {
                entry.target.src = entry.target.dataset.src

                observer.unobserve(entry.target);
            }
        })
    },
    {}
);

document.querySelectorAll("img").forEach((image) => imageObserver.observe(image))

