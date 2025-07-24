export const DividirArreglo = () => {
  const arreglo: number[] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

  const calcularDivision = (numeros: number[]): number[] => {
    const division = numeros.map((i) => i / 5);

    return division;
  };

  return (
    <div>
      <h4>
        3. Del siguiente arreglo "[5, 10, 15, 20, 25, 30, 35, 40, 45, 50]",
        devolver un nuevo arreglo con los valores divididos para 5.
      </h4>
      <p className="m-0 mt-4 text-secondary">
        <span className="fw-bold">Arreglo dividido para 5: </span>[
        {calcularDivision(arreglo).join(", ")}]
      </p>
    </div>
  );
};
