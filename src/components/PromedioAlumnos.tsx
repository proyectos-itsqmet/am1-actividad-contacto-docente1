interface Alumno {
  nombre: string;
  edad: number;
  calificacion: number;
}

const alumnos: Alumno[] = [
  {
    nombre: "Viviana",
    edad: 33,
    calificacion: Math.floor(Math.random() * (10 - 5 + 1)) + 5,
  },
  {
    nombre: "Gerardo",
    edad: 31,
    calificacion: Math.floor(Math.random() * (10 - 5 + 1)) + 5,
  },
  {
    nombre: "Wendy",
    edad: 20,
    calificacion: Math.floor(Math.random() * (10 - 5 + 1)) + 5,
  },
];

export const PromedioAlumnos = () => {
  const calcularPromedio = (alumnos: Alumno[]): number => {
    const promedio: number =
      alumnos.reduce((total, i) => total + i.calificacion, 0) / alumnos.length;
    return promedio;
  };

  return (
    <div>
      <h4>
        4. Crear un arreglo con objetos "alumno" y sus propiedades son nombre,
        edad y calificaciones. Luego, escribir una función que calcule el
        promedio de las calificaciones.
      </h4>
      <p className="m-0 mb-2 mt-4 text-secondary fw-bold">Lista de alumnos:</p>
      <ul className="list-group ">
        {alumnos.map((alunmo, index) => (
          <li key={index} className="list-group-item text-secondary">
            <span className="fw-bold">Nombre: </span>
            {alunmo.nombre}
            <span className="fw-bold"> / Edad: </span>
            {alunmo.edad}
            <span className="fw-bold"> / Calificacion: </span>
            {alunmo.calificacion}
          </li>
        ))}
      </ul>
      <p className="m-0 mt-4 text-secondary">
        <span className="fw-bold">Promedio de calificaciones: </span>
        {calcularPromedio(alumnos).toFixed(2)}
      </p>
    </div>
  );
};
