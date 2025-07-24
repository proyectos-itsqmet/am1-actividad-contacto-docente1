import { Acumulador } from "./components/Acumulador";
import { AreaCuadrado } from "./components/AreaCuadrado";
import { DividirArreglo } from "./components/DividirArreglo";
import { PromedioAlumnos } from "./components/PromedioAlumnos";
import { SumaArreglo } from "./components/SumaArreglo";

function App() {
  return (
    <>
      <div className="m-5">
        <h2>Tema: Actividad contacto docente 1</h2>
        <h3>Alumno: Araque Gerardo</h3>
        <hr className="mb-5" />
        <AreaCuadrado />
        <hr className="mb-5" />
        <SumaArreglo />
        <hr className="mb-5" />
        <DividirArreglo />
        <hr className="mb-5" />
        <PromedioAlumnos />
        <hr className="mb-5" />
        <Acumulador />
      </div>
    </>
  );
}

export default App;
