const libros = [
  {
    titulo: "1984",
    autor: "George Orwell",
    año: 1949,
    prestado: false,
  },
];

function listarLibros(libros) {
  libros.forEach((libros) => {
    console.log(
      `titulo: ${libros.titulo}, autor: ${libros.autor}, año: ${
        libros.año
      }, prestado: ${libros.prestado ? "si" : "no"}`
    );
  });
}

listarLibros(libros);

function agregarLibro(nuevoLibro) {
  libros.push(nuevoLibro);
}

const Frankenstein = {
  titulo: "Frankenstein",
  autor: "Mary Shelly",
  año: 1818,
  prestado: true,
};

agregarLibro(Frankenstein);
listarLibros(libros);

function buscarLibro(tituloBuscado) {
  const libroEncontrado = libros.find(
    (libro) => libro.titulo.toLowerCase() === tituloBuscado.toLowerCase()
  );
  if (libroEncontrado) {
    return libroEncontrado;
  } else {
    console.log(`El libro "${tituloBuscado}" no está disponible.`);
  }
}
buscarLibro("Frankenstein");
console.log(buscarLibro("Frankenstein"));

function prestarLibro(tituloBuscado) {
  const libro = libros.find(
    (libro) => libro.titulo.toLowerCase() === tituloBuscado.toLowerCase()
  );

  if (!libro) {
    console.log(
      `El libro "${tituloBuscado}" no se encuentra en la biblioteca.`
    );
  } else if (libro.prestado) {
    console.log(`El libro "${tituloBuscado}" ya está prestado.`);
  } else {
    libro.prestado = false;
    console.log(`El libro "${tituloBuscado}" se encuentra en la biblioteca.`);
  }
}
prestarLibro("1984");
prestarLibro("Frankenstein");
prestarLibro("el senior de los anillos");
