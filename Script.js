console.log(bebidas);

const contenedor_cards = document.getElementById("contenedor_cards");

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

const inputBusqueda = document.getElementById('lblbuscar');

let templateCard = "";

function crearTarjetas() {
    templateCard = "";
    bebidas.forEach((bebida) => {
        let tamañoClase = "";
        switch (bebida.tamaño) {
            case "Chico":
                tamañoClase = "tamaño-chico";
                break;
            case "Mediano":
                tamañoClase = "tamaño-mediano";
                break;
            case "Grande":
                tamañoClase = "tamaño-grande";
                break;
            default:
                tamañoClase = "tamaño-mediano";
        }
        templateCard += `<a class="card" href="./bebidaSeleccionada.html?id=${bebida.id}">
            <div class="card-content">
                <p class="card-name">${bebida.name}</p>
                <img class="card-image ${tamañoClase}" src="${bebida.image}" alt="${bebida.name}">
                <p class="card-price">${bebida.precio}</p>
            </div>
        </a>`;
    });
    contenedor_cards.innerHTML = templateCard;
}

crearTarjetas(); 

let checkboxesSeleccionados = [];

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        checkboxesSeleccionados = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
            .map(checkbox => checkbox.value);

        crearTarjetasFiltradas();
    });
});

function crearTarjetasFiltradas() {
    contenedor_cards.innerHTML = "";

    const bebidasFiltradas = bebidas.filter(bebida =>
        checkboxesSeleccionados.includes(bebida.type)
    );

    bebidasFiltradas.forEach((bebida) => {
        let tamañoClase = "";
        switch (bebida.tamaño) {
            case "Chico":
                tamañoClase = "tamaño-chico";
                break;
            case "Mediano":
                tamañoClase = "tamaño-mediano";
                break;
            case "Grande":
                tamañoClase = "tamaño-grande";
                break;
            default:
                tamañoClase = "tamaño-mediano";
        }
        const cardHTML = `<a class="card" href="./bebidaSeleccionada.html?id=${bebida.id}">
            <div class="card-content">
                <p class="card-name">${bebida.name}</p>
                <img class="card-image ${tamañoClase}" src="${bebida.image}" alt="${bebida.name}">
                <p class="card-price">${bebida.precio}</p>
            </div>
        </a>`;
        
        contenedor_cards.innerHTML += cardHTML;
    });

    if (checkboxesSeleccionados.length === 0) {
        bebidas.forEach(bebida => {
            let tamañoClase = "";
            switch (bebida.tamaño) {
                case "Chico":
                    tamañoClase = "tamaño-chico";
                    break;
                case "Mediano":
                    tamañoClase = "tamaño-mediano";
                    break;
                case "Grande":
                    tamañoClase = "tamaño-grande";
                    break;
                default:
                    tamañoClase = "tamaño-mediano";
            }
            const cardHTML = `<a class="card" href="./bebidaSeleccionada.html?id=${bebida.id}">
                <div class="card-content">
                    <p class="card-name">${bebida.name}</p>
                    <img class="card-image ${tamañoClase}" src="${bebida.image}" alt="${bebida.name}">
                    <p class="card-price">${bebida.precio}</p>
                </div>
            </a>`;
            contenedor_cards.innerHTML += cardHTML;
        });
    }
}

inputBusqueda.addEventListener('input', () => {
    const textoBusqueda = inputBusqueda.value.trim().toLowerCase();

    if (textoBusqueda === "") {
        return crearTarjetas();
    }

    const bebidasFiltradas = bebidas.filter(bebida =>
        bebida.name.toLowerCase().includes(textoBusqueda)
    );

    templateCard = "";
    bebidasFiltradas.forEach((bebida) => {
        let tamañoClase = "";
        switch (bebida.tamaño) {
            case "Chico":
                tamañoClase = "tamaño-chico";
                break;
            case "Mediano":
                tamañoClase = "tamaño-mediano";
                break;
            case "Grande":
                tamañoClase = "tamaño-grande";
                break;
            default:
                tamañoClase = "tamaño-mediano";
        }
        templateCard += `<<a class="card" href="./bebidaSeleccionada.html?id=${bebida.id}">
        <div class="card-content">
            <p class="card-name">${bebida.name}</p>
            <img class="card-image ${tamañoClase}" src="${bebida.image}" alt="${bebida.name}">
            <p class="card-price">${bebida.precio}</p>
        </div>
    </a>`;
    });
    contenedor_cards.innerHTML = templateCard;
});
