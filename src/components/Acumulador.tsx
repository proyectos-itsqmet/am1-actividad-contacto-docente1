import { useAcumulador } from "../hooks/useAcumulador";

export const Acumulador = () => {
  const { acumulado, gestionarAcumulado } = useAcumulador();

  return (
    <div>
      <h4>
        5. Empleado el hook useState crear un acumulador de 5. Se debe
        visualizar el valor del acumular y dos botones (incrementar - disminuir)
      </h4>
      <div className="card mt-4 mb-5">
        <div className="d-flex flex-column card-body gap-3">
          <div className="d-flex justify-content-center">
            <div className="border rounded d-inline-block px-4 py-2 text-center">
              {acumulado}
            </div>
          </div>
          <div className="d-flex justify-content-center gap-3">
            <button
              className="btn btn-success"
              onClick={() => gestionarAcumulado(5)}
            >
              +5
            </button>
            <button
              className="btn btn-danger"
              onClick={() => gestionarAcumulado(-5)}
            >
              -5
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
