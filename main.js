const gallery = document.querySelector(".gallery")
const overlay = document.querySelector(".overlay")
const overlayImage = overlay.querySelector("img")
const overlayClose = overlay.querySelector(".close")

/* Generar html dinamico */
/* clases en comun para cuando generar track, horizontal y vertical */

/* Esta funcion me genera el html que quiero renderizar, cada div será un item de la galeria */
function generateHTML([h,v]){
    return (
        `<div class='item h${h} v${v}'>
            <img src='https://picsum.photos/500/500/?random'/>
            <div class='item__overlay'>
                <button> View </button>
            </div>
        </div>`
)      
}

/* funcion que me genera un numero random entre cierto limite */
function randomNumber(limit){
    return Math.floor(Math.random() * limit ) + 1 ; 
}

/* Cuando abra la tarjeta tengo que ver la foto del elemento que estoy clickeando, */
function handleClick(e) {
    const src = e.currentTarget.querySelector('img').src
    overlayImage.src = src

    overlay.classList.add("open")
}

function close(){
    overlay.classList.remove("open")
}

/* funcion que me genera un arreglo del largo que yo le diga */
/* [ [1,3], [4,1] ...] 
Con esto genero cuanto espacio horizontal y vertical va a ocupar el div 
*/
const digits = Array.from({length: 50}, () => [randomNumber(4), randomNumber(4)]).concat([ [1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]]).concat( Array.from({length: 20}, () => [randomNumber(4), randomNumber(4)]))
/*Por cada uno de estos digitos voy a generar un html, 
le agrego un join('') para convertirlo a string, si no quedaría como un array  */
const html = digits.map(generateHTML).join('')
gallery.innerHTML = html

/* Agregar evento de click a todos los items */

const items= document.querySelectorAll('.item')
items.forEach( item => item.addEventListener('click', handleClick ) )

/* Cerrar la tarjeta */
overlayClose.addEventListener('click', close)