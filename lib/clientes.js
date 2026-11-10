export function validarCliente(cliente) {
  if (!cliente || !cliente.nombre || !cliente.telefono || !cliente.correo) {
    throw new Error("Datos de cliente incompletos");
  }
  if (cliente.telefono.length < 10 || !cliente.correo.includes('@')) {
    throw new Error("Formato de teléfono o correo inválido");
  }
  return true;
}