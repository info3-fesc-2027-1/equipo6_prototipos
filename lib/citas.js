export function asignarFechaCita({ fecha, hoy }) {
  if (fecha < hoy) {
    throw new Error('La fecha no puede ser anterior a hoy');
  }
  return fecha;
}