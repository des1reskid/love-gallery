const photoContainer = document.querySelector(".photos");

// Добавь названия фото, которые лежат в папке "images"
const photoList = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
    "photo4.jpg",
    "photo5.jpg",
    "photo6.jpg"
];

// Генерация галереи с сердечками 💖
photoList.forEach(photo => {
    const wrapper = document.createElement("div");
    wrapper.style.position = "relative";
    
    const img = document.createElement("img");
    img.src = `images/${photo}`;
    img.alt = "Наши моменты";

    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.bottom = "5px";
    heart.style.right = "5px";
    heart.style.fontSize = "20px";
    
    wrapper.appendChild(img);
    wrapper.appendChild(heart);
    photoContainer.appendChild(wrapper);
});
