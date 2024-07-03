const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = parseInt(params.get("id"));

const bebidaBuscada = bebidas.find(bebida => bebida.id === id);

const contenedor = document.querySelector(".contenedor_info");

contenedor.innerHTML = `
    <section class="cuadro">
        <div class="Informacion">
            <div class="info-contenedor">
                    <img id="imagen-bebida" src="${bebidaBuscada.image}" alt="${bebidaBuscada.name}" class="imagen-grande">
                    <div class="nombre-descripcion">
                        <h2 id="nombre-bebida">${bebidaBuscada.name}</h2>
                        <p id="descripcion-bebida">${bebidaBuscada.descripcion}</p>
                    </div>
                    <div class="precio-comprar">
                        <p>Precio:${bebidaBuscada.precio}</p>
                        <button class="boton-comprar">Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;
