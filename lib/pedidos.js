export function crearPedido(pedido, contexto) {
  if (!contexto.clientes.includes(pedido.cliente_id)) {
    throw new Error('Cliente no registrado (RN-01)');
  }
  return {
    cliente_id: pedido.cliente_id,
    servicios: pedido.servicios,
    estado: 'pendiente'
  };
}