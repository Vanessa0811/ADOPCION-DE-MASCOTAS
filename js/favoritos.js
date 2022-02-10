let favoritos = JSON.parse(localStorage.getItem('favoritos'))

cargarFavoritos()

function cargarFavoritos() {
    if (favoritos) {
        favoritos.forEach(mascota => {
            let misFavoritos = document.querySelector('.mis-favoritos')
            misFavoritos.innerHTML += `<a href="detallemascota.html?id=${mascota.id}">
                                    <div class="item2">
                                        <img id=img22 src="${mascota.img}" alt="">
                                    </div>
                                </a>`
        })
    }
}