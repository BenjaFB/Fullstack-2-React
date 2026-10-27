"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const claseLink = (ruta: string) =>
    `nav-link ${pathname === ruta ? "active" : ""}`;

  return (
    <nav
      className="navbar navbar-expand-lg navbar-becs sticky-top"
      data-bs-theme="dark"
    >
      <div className="container">
        <Link className="navbar-brand" href="/">
          <img src="/img/logo.jpeg" alt="Logo BECS" width="70" height="70" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className={claseLink("/")} href="/">
              🏠 Inicio
            </Link>

            <Link className={claseLink("/productos")} href="/productos">
              🛍️ Productos
            </Link>

            <Link className={claseLink("/registro")} href="/registro">
              👤 Registro
            </Link>

            <a
              className="nav-link"
              href="https://maps.app.goo.gl/oVSXJAqgXjCdLjFg6"
              target="_blank"
              rel="noreferrer"
            >
              📍 Ubicación
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
