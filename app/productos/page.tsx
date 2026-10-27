import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos",
};

const productos = [
  ["MANI JAPONES MERKEN", "$850 x 100GR", "/img/japones.jpeg", "Maní japonés merkén"],
  ["CASTAÑAS DE CAJU", "$2000 x 100GR", "/img/caju.jpeg", "Castañas de cajú"],
  ["MANI SIN SAL", "$750 x 100GR", "/img/mani.jpeg", "Maní sin sal"],
  ["MAIZ CURAGUA", "$1250 x 1/2 Kilo", "/img/maizcur.jpeg", "Maíz curagua"],
  ["MANI CONFITADO MORA CREMA", "$600 x 100GR", "/img/maniconfitadomora.jpeg", "Maní confitado mora crema"],
  ["MIELES VARIEDAD", "$6500 x Unidad", "/img/mieles.jpeg", "Variedad de mieles"],
  ["MOTE CON HUESILLO", "$2000 x Vaso 500ml", "/img/moteconhuesillo.jpeg", "Mote con huesillo"],
  ["NUECES", "$1400 x 100GR", "/img/nueces.jpeg", "Nueces"],
  ["PISTACHOS", "$2100 x 100GR", "/img/pistachos.jpeg", "Pistachos"],
  ["FLOR DE JAMAICA", "$2000 x 100GR", "/img/flor.jpeg", "Flor de Jamaica"],
  ["COCO CHIPS", "$900 x 100GR", "/img/coco.jpeg", "Coco chips"],
  ["ALIÑO COMPLETO", "$700 x 100GR", "/img/alinocompleto.jpeg", "Aliño completo"],
] as const;

export default function ProductosPage() {
  return (
    <main className="container productos-container">
      <h1 id="headerProductos" className="container tituloProductosContainer">
        CATALOGO DE PRODUCTOS
      </h1>

      <div className="row g-4">
        {productos.map(([nombre, precio, imagen, alt]) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={nombre}>
            <div className="card h-100">
              <img src={imagen} className="card-img-top" alt={alt} />

              <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">{precio}</p>

                <button className="btn btn-becs" type="button">
                  INFORMACION
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
