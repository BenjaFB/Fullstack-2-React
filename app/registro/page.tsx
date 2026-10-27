"use client";

import { FormEvent, useState } from "react";

type CampoEstado = {
  mensaje: string;
  valido: boolean | null;
};

type EstadosValidacion = {
  nombre: CampoEstado;
  contra: CampoEstado;
  contraConf: CampoEstado;
  mail: CampoEstado;
  telefono: CampoEstado;
};

const estadoInicial: EstadosValidacion = {
  nombre: { mensaje: "", valido: null },
  contra: { mensaje: "", valido: null },
  contraConf: { mensaje: "", valido: null },
  mail: { mensaje: "", valido: null },
  telefono: { mensaje: "", valido: null },
};

export default function RegistroPage() {
  const [nombre, setNombre] = useState("");
  const [contra, setContra] = useState("");
  const [contraConf, setContraConf] = useState("");
  const [mail, setMail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");

  const [estados, setEstados] = useState<EstadosValidacion>(estadoInicial);

  const validarNombre = (valor: string) => {
    const limpio = valor.trim();
    return limpio.length >= 3 && Number.isNaN(Number(limpio));
  };

  const validarPass = (valor: string) => valor.length >= 4;

  const validarConfirmacion = (password: string, confirmacion: string) =>
    confirmacion.length > 0 && password === confirmacion;

  const validarMail = (valor: string) => {
    const formatoMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return formatoMail.test(valor);
  };

  const validarTelefono = (valor: string) => {
    const formatoTelefono = /^[+]?[0-9]{8,12}$/;
    return formatoTelefono.test(valor.trim());
  };

  const procesar = (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    const nombreValido = validarNombre(nombre);
    const contraValida = validarPass(contra);
    const confirmacionValida = validarConfirmacion(contra, contraConf);
    const mailValido = validarMail(mail);
    const telefonoValido = validarTelefono(telefono);

    setEstados({
      nombre: {
        valido: nombreValido,
        mensaje: nombreValido
          ? "(Validado)"
          : "Su nombre debe contener al menos 3 caracteres",
      },
      contra: {
        valido: contraValida,
        mensaje: contraValida
          ? "(Validado)"
          : "La contraseña debe tener al menos 4 caracteres",
      },
      contraConf: {
        valido: confirmacionValida,
        mensaje: confirmacionValida
          ? "(Validado)"
          : "Las contraseñas deben coincidir",
      },
      mail: {
        valido: mailValido,
        mensaje: mailValido
          ? "(Validado)"
          : "Ingrese un correo válido EJ: coso@gmail.com",
      },
      telefono: {
        valido: telefonoValido,
        mensaje: telefonoValido
          ? "(Validado)"
          : "Su teléfono no cumple con el formato EJ: +569XXXXXXXX",
      },
    });
  };

  const limpiarFormulario = () => {
    setNombre("");
    setContra("");
    setContraConf("");
    setMail("");
    setTelefono("");
    setDireccion("");
    setEstados(estadoInicial);
  };

  const claseEstado = (campo: CampoEstado) => {
    if (campo.valido === null) return "mensaje_estado";

    return `mensaje_estado ${campo.valido ? "texto-valido" : "texto-invalido"}`;
  };

  return (
    <main className="container my-5">
      <div id="contenedor_formulario">
        <form id="form_registro" onSubmit={procesar}>
          <fieldset className="p-4 border">
            <legend className="text-center mb-4">Regístrate</legend>

            <div className="mb-3 campo-row">
              <input
                type="text"
                name="campo_nombre"
                id="campo_nombre"
                className="form-control"
                placeholder="Nombre"
                value={nombre}
                onChange={(evento) => setNombre(evento.target.value)}
              />
              <span className={claseEstado(estados.nombre)} id="mensaje_nombre">
                {estados.nombre.mensaje}
              </span>
            </div>

            <div className="mb-3 campo-row">
              <input
                type="password"
                name="campo_contra"
                id="campo_contra"
                className="form-control"
                placeholder="Contraseña"
                value={contra}
                onChange={(evento) => setContra(evento.target.value)}
              />
              <span className={claseEstado(estados.contra)} id="mensaje_contra">
                {estados.contra.mensaje}
              </span>
            </div>

            <div className="mb-3 campo-row">
              <input
                type="password"
                name="campo_contra_conf"
                id="campo_contra_conf"
                className="form-control"
                placeholder="Confirmar contraseña"
                value={contraConf}
                onChange={(evento) => setContraConf(evento.target.value)}
              />
              <span
                className={claseEstado(estados.contraConf)}
                id="mensaje_contra_conf"
              >
                {estados.contraConf.mensaje}
              </span>
            </div>

            <div className="mb-3 campo-row">
              <input
                type="email"
                name="campo_mail"
                id="campo_mail"
                className="form-control"
                placeholder="Mail"
                value={mail}
                onChange={(evento) => setMail(evento.target.value)}
              />
              <span className={claseEstado(estados.mail)} id="mensaje_mail">
                {estados.mail.mensaje}
              </span>
            </div>

            <div className="mb-3 campo-row">
              <input
                type="text"
                name="campo_telefono"
                id="campo_telefono"
                className="form-control"
                placeholder="Teléfono"
                value={telefono}
                onChange={(evento) => setTelefono(evento.target.value)}
              />
              <span
                className={claseEstado(estados.telefono)}
                id="mensaje_telefono"
              >
                {estados.telefono.mensaje}
              </span>
            </div>

            <div className="mb-3 campo-row">
              <input
                type="text"
                name="campo_direccion"
                id="campo_direccion"
                className="form-control"
                placeholder="Dirección (Opcional)"
                value={direccion}
                onChange={(evento) => setDireccion(evento.target.value)}
              />
              <span className="mensaje_estado"></span>
            </div>

            <div className="d-flex justify-content-center gap-3 mt-4">
              <button type="submit" className="btn btn-becs">
                Ingresar
              </button>

              <button
                type="button"
                className="btn btn-becs"
                onClick={limpiarFormulario}
              >
                Limpiar
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </main>
  );
}
