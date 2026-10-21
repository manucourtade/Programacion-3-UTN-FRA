const main = document.querySelector('main');
const btn = document.getElementById('btn');

btn.addEventListener('click', function(e) {
    
    e.preventDefault();

    const nombre = document.getElementById('nombre').value
    const edad = document.getElementById('edad').value;
    
    const persona = {
        nombre: nombre,
        edad: edad
    }

    console.log("Hola soy " + persona.nombre + " y tengo " + persona.edad + " años.")
    const res = document.getElementById('res');
    res.textContent = "Hola soy " + persona.nombre + " y tengo " + persona.edad + " años.";
})



const btnAuto = document.getElementById('btn-auto');

btnAuto.addEventListener("click", (e) => {
    e.preventDefault();

    const color = document.getElementById('color').value
    const modelo = document.getElementById('modelo').value;
    const marca = document.getElementById('marca').value;

    const pAuto = document.getElementById('res-auto');
    const strongAuto = document.createElement('strong');

    main.appendChild(pAuto);
    pAuto.appendChild(strongAuto);
    
    const Auto = {
       color: color,
        marca: marca,
     modelo: modelo
    }

    strongAuto.textContent = `COLOR: ${Auto.color} - MODELO: ${Auto.modelo} - MARCA: ${Auto.marca}`;
})


const autos = [
{ marca: "Toyota", modelo: "Etios", color: "gris" },
{ marca: "Ford", modelo: "Focus", color: "negro" },
{ marca: "Chevrolet", modelo: "Onix", color: "blanco" },
{ marca: "Renault", modelo: "Clio", color: "gris" },
{ marca: "Volkswagen", modelo: "Golf", color: "verde" },
{ marca: "Peugeot", modelo: "208", color: "azul" },
{ marca: "Honda", modelo: "Civic", color: "rojo" },
{ marca: "Fiat", modelo: "Palio", color: "gris" },
{ marca: "Nissan", modelo: "Versa", color: "gris" },
{ marca: "Hyundai", modelo: "i30", color: "plateado" }
];

const btnBuscar = document.getElementById('color-buscar');

btnBuscar.addEventListener("click", (e) => {
    e.preventDefault()
    const lista = document.getElementById('lista');
    lista.replaceChildren();

    const color = document.getElementById('color-Search').value.toLowerCase().trim();
    const autosColor = autos.filter(a => a.color === color);
    
    autosColor.forEach(a => {
        const li = document.createElement('li');
        li.textContent = `${a.marca} ${a.modelo} - ${a.color}`;
        lista.appendChild(li);

    })
    if (autosColor.length === 0) {
        console.log('No se encontraron autos con dicho color')
    }

    console.table(autosColor);


    
    });

const btnBg = document.getElementById('btn-color');
btnBg.addEventListener('click', (e) => {
    e.preventDefault()
    const colorSeleccionado = document.getElementById('bg-color').value;

    document.body.style.backgroundColor = colorSeleccionado;
    localStorage.setItem("color", colorSeleccionado);
})
const colorGuardado = localStorage.getItem("color");

if (colorGuardado) {
    document.body.style.backgroundColor = colorGuardado;
    document.getElementById('bg-color').value = colorGuardado;   // opcional: que el input refleje el color
}


const nombres = ["Manuel", "Lucía", "Martín", "Sofía", "Juan", "Valentina", "Tomás", "Camila"];
const listaNombres = document.getElementById('lista-nombres');
const nombresMap = nombres.map(a => {
    const liMap = document.createElement('li');
    liMap.textContent = a;
    return liMap
})

listaNombres.append(...nombresMap)

const personas = [
    { nombre: "Manuel", edad: 22 },
    { nombre: "Lucía", edad: 35 },
    { nombre: "Martín", edad: 28 },
    { nombre: "Sofía", edad: 41 },
    { nombre: "Juan", edad: 30 },
    { nombre: "Valentina", edad: 19 }
];

const hayMayores = personas.some(p => p.edad > 30);

const h2Mayores = document.createElement('h2');
h2Mayores.textContent = hayMayores
    ? "Hay al menos una persona mayor de 30 años."
    : "No hay personas mayores de 30 años.";

document.body.appendChild(h2Mayores);