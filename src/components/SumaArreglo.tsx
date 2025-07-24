export const SumaArreglo = () => {
  const numeros: number[] = Array.from(
    { length: 5 },
    () => Math.floor(Math.random() * 100) + 1
  );

  const sumarArreglo = (arreglo: number[]): number => {
    const suma = arreglo.reduce((total, i) => total + i, 0);

    return suma;
  };

  return (
    <div>
      <h4>
        2. Desarrolle una función que reciba un arreglo como parámetro y como
        resultado retorne la suma de los elementos del arreglo.
      </h4>
      <p className="m-0 mt-4 text-secondary">
        <span className="fw-bold">Arreglo de numeros:</span>{" "}
        {numeros.join(" ,")}
      </p>
      <p className="m-0 text-secondary">
        <span className="fw-bold">Suma de elementos:</span>{" "}
        {sumarArreglo(numeros)}
      </p>
    </div>
  );
};
