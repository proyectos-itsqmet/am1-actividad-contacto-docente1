import { useState } from "react";

export const useAcumulador = () => {
  const [acumulado, setAcumulado] = useState<number>(0);

  const gestionarAcumulado = (numero: number) => {
    if (acumulado + numero < 0) return;

    setAcumulado(acumulado + numero);
  };

  return {
    acumulado,
    gestionarAcumulado,
  };
};
