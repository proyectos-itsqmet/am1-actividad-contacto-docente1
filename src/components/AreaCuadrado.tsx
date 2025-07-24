export const AreaCuadrado = () => {
  const lado: number = Math.floor(Math.random() * (10 - 20 + 1)) + 20;

  const calcularArea = (value: number): number => {
    return value * value;
  };

  return (
    <div>
      <h4>
        1. Crear una función con parámetros que permita calcular el área de un
        cuadrado.
      </h4>
      <p className="m-0 mt-4 text-secondary">
        <span className="fw-bold">Lado:</span> {lado}
      </p>
      <p className="m-0 text-secondary">
        <span className="fw-bold">Area del cuadrado:</span> {calcularArea(lado)}
      </p>
    </div>
  );
};
