// const productos = [
// { id: 1, nombre: 'Laptop', precio: 1200, stock: 15, categoria: 'electrónica' },
// { id: 2, nombre: 'Mouse', precio: 25, stock: 50, categoria: 'electrónica' },
// { id: 3, nombre: 'Teclado', precio: 45, stock: 30, categoria: 'electrónica' },
// { id: 4, nombre: 'Monitor', precio: 300, stock: 20, categoria: 'electrónica' },
// { id: 5, nombre: 'Libro', precio: 15, stock: 100, categoria: 'libros' }
// ];

// // 1. Usando forEach: Mostrar en consola cada producto con su nombre y precio
// productos.forEach(p => console.log(p.nombre + ": $" + p.precio));

// // 2. Usando map: Crear un array con solo los nombres de los productos
// const prodNombres = productos.map(p => p.nombre);
// console.log(prodNombres);


// // 3. Usando filter: Obtener productos electrónicos con stock mayor a 20
// const prodFilter = productos.filter(p => p.categoria === 'electrónica' && p.stock > 20);
// console.log(prodFilter);

// // 4. Usando find: Encontrar el producto con id 3
// const prodFind = productos.find(p => p.id === 3);
// console.log(prodFind);

// // 5. Usando reduce: Calcular el valor total del inventario (precio * stock)
// const prodReduce = productos.reduce((total, p) => total + p.precio * p.stock, 0);
// console.log(prodReduce);

// const estudiantes = [
// { id: 1, nombre: 'Ana', edad: 20, calificaciones: [8, 9, 7, 8] },
// { id: 2, nombre: 'Carlos', edad: 22, calificaciones: [6, 7, 8, 7] },
// { id: 3, nombre: 'María', edad: 21, calificaciones: [9, 9, 8, 10] },
// { id: 4, nombre: 'Juan', edad: 19, calificaciones: [7, 6, 5, 8] }
// ];

// // 1. Usando forEach: Mostrar nombre y edad de cada estudiante
// estudiantes.forEach(e => console.log(e.nombre + " tiene " + e.edad));

// // 2. Usando map: Crear array de objetos con nombre y promedio de calificaciones
// const eProm = estudiantes.map(e => ({nombre: e.nombre,
//     promedio: e.calificaciones.reduce((acc, n) => acc + n, 0) / e.calificaciones.length
// }));
// console.log(eProm);

// // 3. Usando filter: Obtener estudiantes con promedio mayor a 7.5
// const eFilter = eProm.filter(e => e.promedio > 7.5);
// console.log(eFilter);

// // 4. Usando find: Encontrar estudiante llamado 'María'
// const eFind = estudiantes.find(e => e.nombre === 'María');
// console.log(eFind);

// // 5. Usando reduce: Calcular la edad promedio de los estudiantes
// const eReduce = estudiantes.reduce((acc,n) => acc + n.edad, 0) / estudiantes.length;
// console.log(eReduce);

const peliculas = [
{ id: 1, titulo: 'El Padrino', año: 1972, duracion: 175, genero: 'drama', rating: 9.2 },
{ id: 2, titulo: 'Pulp Fiction', año: 1994, duracion: 154, genero: 'crimen', rating: 8.9 },
{ id: 3, titulo: 'El Señor de los Anillos', año: 2001, duracion: 178, genero: 'fantasía', rating: 8.8 },
{ id: 4, titulo: 'Interestelar', año: 2014, duracion: 169, genero: 'ciencia ficción', rating: 8.6 },
{ id: 5, titulo: 'Parásitos', año: 2019, duracion: 132, genero: 'drama', rating: 8.6 }
];

// 1. Usando forEach: Mostrar título y año de cada película
peliculas.forEach(pelicula => console.log(pelicula.titulo + " - AÑO " + pelicula.año));

// 2. Usando map: Crear array de títulos en mayúsculas
const peliculaMap = peliculas.map(p => p.titulo.toUpperCase());
console.log(peliculaMap);

// 3. Usando filter: Obtener películas de drama con rating mayor a 8.5
const peliculaFilter = peliculas.filter(p => p.genero === 'drama' && p.rating > 8.5);
console.log(peliculaFilter);
// 4. Usando find: Encontrar película estrenada en 2014
const peliculaFind = peliculas.find(p => p.año === 2014);
console.log(peliculaFind);

// 5. Usando reduce: Calcular la duración total de todas las películas
const peliculaReduce = peliculas.reduce((acc, p) => acc + p.duracion, 0);
console.log((peliculaReduce / 60).toFixed(1) + " horas.");