import { describe, it, expect } from 'vitest';
import { validarCliente } from '../lib/clientes.js';
import { crearPedido } from '../lib/pedidos.js';
import { asignarFechaCita } from '../lib/citas.js';

const contexto = {
  clientes: ['CLI-01'],
  servicios: ['SERV-01', 'SERV-02', 'SERV-03'],
};

describe('RF1 validarCliente', () => {
  it('CP-RF1-01 registra un cliente con datos normales', () => {
    expect(validarCliente({ nombre: 'Carlos Pérez', telefono: '5512345678', correo: 'carlos@mail.com' })).toBe(true);
  });
  it('CP-RF1-02 acepta nombre de un carácter y correo mínimo', () => {
    expect(validarCliente({ nombre: 'A', telefono: '5512345678', correo: 'a@m.co' })).toBe(true);
  });
  it('CP-RF1-03 rechaza teléfono y correo con formato inválido', () => {
    expect(() => validarCliente({ nombre: 'Carlos Pérez', telefono: '123', correo: 'correo-invalido' })).toThrow();
  });
});

describe('RF3 crearPedido', () => {
  it('CP-RF3-01 crea el pedido con cliente y servicio en estado inicial', () => {
    const pedido = crearPedido({ cliente_id: 'CLI-01', servicios: ['SERV-01'] }, contexto);
    expect(pedido.cliente_id).toBe('CLI-01');
    expect(pedido.servicios).toEqual(['SERV-01']);
    expect(pedido.estado).toBe('pendiente');
  });
  it('CP-RF3-02 acepta un pedido con 3 servicios del catálogo', () => {
    const pedido = crearPedido({ cliente_id: 'CLI-01', servicios: ['SERV-01', 'SERV-02', 'SERV-03'] }, contexto);
    expect(pedido.servicios).toHaveLength(3);
  });
  it('CP-RF3-03 rechaza un cliente no registrado (RN-01)', () => {
    expect(() => crearPedido({ cliente_id: 'CLI-NOEXISTE', servicios: ['SERV-01'] }, contexto)).toThrow();
  });
});

describe('RF3 asignarFechaCita', () => {
  it('CP-RF3-04 asigna una fecha posterior a hoy', () => {
    expect(asignarFechaCita({ fecha: '2026-11-12', hoy: '2026-11-09' })).toBe('2026-11-12');
  });
  it('CP-RF3-05 acepta la fecha de hoy', () => {
    expect(asignarFechaCita({ fecha: '2026-11-09', hoy: '2026-11-09' })).toBe('2026-11-09');
  });
  it('CP-RF3-06 rechaza una fecha anterior a hoy', () => {
    expect(() => asignarFechaCita({ fecha: '2026-11-08', hoy: '2026-11-09' })).toThrow();
  });
});