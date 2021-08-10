document.getElementById("btn").addEventListener("click", () => {
    document.querySelector(".bottom").classList.toggle("active");
});


onload = cliker();
function cliker() {
    const id_link = {
        cat: "https://es.wikipedia.org/wiki/Felidae",
        dog: "https://es.wikipedia.org/wiki/Raza_de_perro",
        bird: "https://es.wikipedia.org/wiki/Aves",
        mamm: "https://es.wikipedia.org/wiki/Mammalia",
        reptile: "https://es.wikipedia.org/wiki/Reptilia",
    };

    for (const key in id_link) {
        document.getElementById(key).addEventListener("click", () => {
            window.open(id_link[key]);
        });
    }
}


onload = net();
function net() {
    const link = {
        git: 'https://www.github.com',
        face: 'https://www.facebook.com',
        tel: 'https://www.telegram.com',
        wha: 'https://www.whatsapp.com',
        twi: 'https://www.twitter.com',
    };

    for (const keys in link) {
        document.getElementById(keys).addEventListener('click', () => {
            window.open(link[keys]);
        })
    }
}


let obj_link = {
    blogg: 'https://meme-memereitor.blogspot.com/',
    history_web: 'https://spaceplace.nasa.gov/all-about-earth/sp/'
};
for (const lock in obj_link) {
        document.getElementById(lock).addEventListener('click', () => {
            window.open(obj_link[lock]);
        })
    }