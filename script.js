const photos = [
    "img/gal/all photos/1.png",
    "img/gal/all photos/2.png",
    "img/gal/all photos/3.png",
    "img/gal/all photos/4.png",
    "img/gal/all photos/5.png",
    "img/gal/all photos/6.png",
    "img/gal/all photos/7.png",
    "img/gal/all photos/8.png",
    "img/gal/all photos/9.png",
    // {src: "img/gal/all photos/10.png"},
]

function removePhotos(number){
    for(let i = 1; i <= number; i++){
        const image1 = document.getElementById('img-' + i);
        image1.parentNode.removeChild(image1);
    }
}

function displayGallery(){
    const box = document.getElementById('box');
    const date = document.getElementById('date');
    const click = document.getElementById('click-here');

    click.style.display = 'none';
    box.style.display = 'flex';
    box.style.opacity = '1';
    box.style.transition = '0.5s ease';
    date.style.display = 'flex';
    date.style.opacity = '1';
    date.style.transition = '0.5s ease';
    
    for(let i = 1; i <= 10; i++){
        const image = document.getElementById('img-' + i);
        image.style.display = 'initial';
        image.style.opacity = '1';
        image.style.transition = '0.5s ease';
        // requestAnimationFrame(() => image.classList.add("show"));
    }
}

function displayPhotos(display){
    let source = "img/gal/all_photos/";
    // hide image
    for(let i = 10; i > display; i--){
        const image = document.getElementById('img-' + i);
        image.style.display = 'none';
    }

    // show image
    for(let i = 1; i <= display; i++){
        const image = document.getElementById('img-' + i);
        image.style.display = 'initial';
        image.style.opacity = '1';
        image.style.transition = '0.5s ease';
        // requestAnimationFrame(() => image.classList.add("show"));
    }
}