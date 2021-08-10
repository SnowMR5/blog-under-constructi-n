let tinta;
let gx = new Array();
window.onload = function () {
    for (let i = 0; i <= 200; i++) {
        let fug = {
            x: 0,
            y: 0,
            v: 0,
        };
        fug.x = Math.floor(Math.random() * 500);
        fug.y = Math.floor(Math.random() * 500);
        fug.v = Math.floor(Math.random() * 4) + 1;
        gx[i] = fug;
    }
    tinta = lienzo.getContext("2d");
    tk = setInterval(function () {
        dibujar();
    }, 1000 / 25);
};

function dibujar() {
    tinta.fillStyle = "black";
    tinta.fillRect(0, 0, 500, 500);

    for (let i = 0; i < 200; i++) {
        tinta.fillStyle = "rgba(255,255,255," + gx[i].v * 0.25 + ")";
        tinta.fillRect(gx[i].x, gx[i].y, 2, 2);
        gx[i].x += gx[i].v;
        if (gx[i].x >= 500) {
            gx[i].x = 0;
            gx[i].y = Math.floor(Math.random() * 500);
        }
    }
}