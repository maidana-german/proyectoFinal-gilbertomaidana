//Database de Cafe Cookies at rapidapi

const url = 'https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc';
const opciones = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '898d681752msh24cf461a48063e0p1c78c4jsn882c85b57910',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
};

//Traer elementos del carrito
function carritoLocalSt() {
    const carritoElemtGuard = localStorage.getItem('carritoElemt');
    return carritoElemtGuard ? JSON.parse(carritoElemtGuard) : []
}
//Guardar elementos
function carritoSalvaLocalSt() {
    localStorage.setItem('carritoElemt', JSON.stringify(carritoElemt));
}

//Funcion para hacer catch de los productos
async function listaProductos() {
    try {
        const respuesta = await fetch(url, opciones);
        const resultado = await respuesta.json();
        const veinteProductos = resultado.slice(0, 10);


        //reescritura del id
        let i = 1;
        for (index of veinteProductos) {
            index.id = i;
            i++;
        }

        //Se aplican los precios y se cambian los nombres y descripciones
        veinteProductos.forEach(producto => {
            switch (producto.id) {
                case 1:
                    producto.title = 'Macaron';
                    producto.short_description = 'Galleta tradicional de la gastronomía francesa hecha de clara de huevo, harina de almendra, azúcar y azúcar glas. Precio Unitario';
                    producto.precio = 500;
                    producto.thumbnail = './img/producto-1.jpg';
                    break;
                case 2:
                    producto.title = 'Pain au chocolat';
                    producto.short_description = 'Masa hojaldrada elaborada con manteca de primera calidad rellena con una barra de chocolate. Es la misma masa que los croissants. Precio Unitario';
                    producto.precio = 400;
                    producto.thumbnail = './img/producto-2.jpg';
                    break;
                case 3:
                    producto.title = 'Donuts';
                    producto.short_description = 'Una dona, también llamada dónut​​​, rosquilla, rosquita, rosqueta, rosca, berlina o berlín, es una rosca de pan dulce que tradicionalmente está frito en grasa de cerdo. Precio Unitario';
                    producto.precio = 300;
                    producto.thumbnail = './img/producto-3.jpg';
                    break;
                case 4:
                    producto.title = 'Porción de torta';
                    producto.short_description = 'Deliciosa porción de torta Balcarce, elaborada con bizcochuelo de vainilla, crema chantilly, dulce de leche y merengue. Precio por porción';
                    producto.precio = 300;
                    producto.thumbnail = './img/producto-4.jpg';
                    break;
                case 5:
                    producto.title = 'Pan integral';
                    producto.short_description = 'El pan integral, también conocido como pan moreno o pan marrón, es aquel pan que ha sido elaborado con harina no refinada, es decir, que se ha dejado el grano integral, lo que incluye el salvado, ​ por lo que posee una gran cantidad de fibra dietética. Precio por rodaja.';
                    producto.precio = 100;
                    producto.thumbnail = './img/producto-5.jpg';
                    break;
                case 6:
                    producto.title = 'Café con 2 macaron';
                    producto.short_description = 'Café expresso, tamaño jarrito, de granos recién molidos más 2 maron a elección.';
                    producto.precio = 2500;
                    producto.thumbnail = './img/producto-6.jpg';
                    break;
                case 7:
                    producto.title = 'Baguette';
                    producto.short_description = 'La baguette o baguete​ es una variedad de pan originaria de Francia que se caracteriza por una forma alargada. Es uno de los formatos de pan más conocidos, producidos y consumidos a nivel internacional. Contiene harina de trigo, agua, levadura y sal. Precio unitario';
                    producto.precio = 1000;
                    producto.thumbnail = './img/producto-7.jpg';
                    break;
                case 8:
                    producto.title = 'Pan de campo';
                    producto.short_description = 'También se lo conoce como pan de campo, pan de centeno o pan de trigo sarraceno. A diferencia del pan blanco, que se elabora con harina refinada, el pan rústico contiene más fibra y nutrientes, lo que lo convierte en el mejor pan del mundo. Precio unitario, peso aproximado 400grs';
                    producto.precio = 2500;
                    producto.thumbnail = './img/producto-8.jpg';
                    break;
                case 9:
                    producto.title = 'Cupcakes';
                    producto.short_description = 'Un cupcake —literalmente en español ‘pastel de taza’— es una pequeña tarta proporcionado para una persona. Se hornean en un molde igual que el de las magdalenas y muffins. En el molde se colocan unos papeles llamados cápsulas. Precio unitario.';
                    producto.precio = 500;
                    producto.thumbnail = './img/producto-9.jpg';
                    break;
                case 10:
                    producto.title = 'Tartas';
                    producto.short_description = 'Una torta o tarta es un tipo de pastel tradicionalmente redondo compuesto de una o más capas de masa dulce cocida al horno, rellenas y decoradas con crema pastelera, trufa de chocolate, Nata montada, fruta, chocolate u otros ingredientes. Precio unitario, peso aproximado 500grs.';
                    producto.precio = 10;
                    producto.thumbnail = './img/producto-10.jpg';
                    break;
                default:
                    producto.precio = 2500;
                    break
            }

        })


        return veinteProductos;
    } catch (error) {
        console.error(error);
    }
}
// listaProductos()

async function renderizarProductos() {
    const contenedorProductos = document.getElementById('contenedorCards');
    const datosProducto = await listaProductos();




    datosProducto.forEach(producto => {
        // console.log(producto);

        //Creación de variables para iterar
        const prodTit = 'titulo-' + producto.id;
        const prodImg = 'imagen-' + producto.id;
        const prodPrec = 'precio-' + producto.id;
        const prodDescr = 'descripcion-' + producto.id;
        const prodBoton = 'boton-' + producto.id;

        //Creación de contenedor para el nombre del producto
        const tarjetaTitulo = document.createElement('div');
        tarjetaTitulo.classList.add(prodTit);
        const titulo = document.createElement('h2');
        titulo.textContent = producto.title;
        tarjetaTitulo.appendChild(titulo);
        contenedorProductos.appendChild(tarjetaTitulo);
        //Creación del contenedor para la descripción
        const tarjetaDescripcion = document.createElement('div');
        tarjetaDescripcion.classList.add(prodDescr);
        const descripcion = document.createElement('p');
        descripcion.textContent = producto.short_description;
        tarjetaDescripcion.appendChild(descripcion);
        contenedorProductos.appendChild(tarjetaDescripcion);
        //Creación del contenedor para la imagen
        const tarjetaImagen = document.createElement('div');
        tarjetaImagen.classList.add(prodImg);
        const imagen = document.createElement('img');
        imagen.src = producto.thumbnail;
        tarjetaImagen.appendChild(imagen);
        contenedorProductos.appendChild(tarjetaImagen);
        //Creación del contenedor para el precio
        const tarjetaPrecio = document.createElement('div');
        tarjetaPrecio.classList.add(prodPrec);
        const precio = document.createElement('p');
        precio.textContent = `Precio: $${producto.precio || 'gratis'}`;
        tarjetaPrecio.appendChild(precio);
        contenedorProductos.appendChild(tarjetaPrecio);
        //Creación del contenedor para el boton de comprar
        const tarjetaBoton = document.createElement('div');
        tarjetaBoton.classList.add(prodBoton);
        const botonComprar = document.createElement('button');
        botonComprar.textContent = 'Comprar';
        botonComprar.addEventListener('click', () => agregarCarrito(producto))
        tarjetaBoton.appendChild(botonComprar);
        contenedorProductos.appendChild(tarjetaBoton);



    });
}

//Carrito
const carritoElemt = carritoLocalSt();
let carritoTotal = 0;

function agregarCarrito(producto) {

    //chequear si ya existe objeto
    const chequearProd = producto.title;

    const chequear = carritoElemt.some((el) => el.title === chequearProd);
    if (chequear) {
        console.log('Pre-carga carrito / el producto ya existe');
        producto.cant++;
        console.log(`Pre-carga carrito / la cantidad ahora es ${producto.cant}`);
    } else {
        console.log('Pre-carga carrito / el producto NO existe');
        let i = 1;
        producto.cant = i;
        console.log(`Pre-carga carrito / la cantidad ahora es ${i}`);
    }

    carritoElemt.push(producto)
    console.log(carritoElemt);



    if (producto.precio) {
        carritoTotal += parseFloat(producto.precio)
    }
    carritoSalvaLocalSt();
    renderizarCarrito();
}

function renderizarCarrito() {
    const carrito = document.getElementById('carrito');
    const carritoTotalElem = document.getElementById('carritoTotal');
    carrito.innerHTML = '';
    carritoElemt.forEach(elemento => {


            const lista = document.createElement('li');
            lista.textContent = `${elemento.title} cant: ${elemento.cant}`;
            const listaClass = 'listaClass-' + elemento.id;
            lista.classList.add(listaClass);
            carrito.appendChild(lista);


            //inicio de lo agregado
            const checkProd = elemento.title;
            const chequear = carritoElemt.some((el) => el.title === checkProd);
            if(chequear){
                if(elemento.cant > 1){
                    const listaClassCount = elemento.id;
                    console.log(`cantidad mayor a 1, el valor del id del elemento repetido es ${listaClassCount}`);
                    
/*                     const lista2 = document.createElement('li');
                    lista2.textContent = `${elemento.title} cant: ${elemento.cant}`;
                    const listaClass2 = 'listaClass-' + elemento.id;
                    lista2.classList.add(listaClass2);
                    // carrito.appendChild(lista2); */

                }
                
            }
            //fin de lo agregado



        })
    carritoTotalElem.textContent = carritoTotal.toFixed(2);
}

renderizarProductos();

