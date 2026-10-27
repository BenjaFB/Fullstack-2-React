import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio",
};

const imagenesCarrusel = [
  { src: "/img/japones.jpeg", alt: "Maní japonés merkén" },
  { src: "/img/pistachos.jpeg", alt: "Pistachos" },
  { src: "/img/mani.jpeg", alt: "Maní sin sal" },
  { src: "/img/maizcur.jpeg", alt: "Maíz curagua" },
  { src: "/img/maniconfitadomora.jpeg", alt: "Maní confitado mora crema" },
  { src: "/img/mieles.jpeg", alt: "Variedad de mieles" },
  { src: "/img/moteconhuesillo.jpeg", alt: "Mote con huesillo" },
  { src: "/img/coco.jpeg", alt: "Coco chips" },
  { src: "/img/alinocompleto.jpeg", alt: "Aliño completo" },
];

const productosDestacados = [
  {
    nombre: "MANÍ JAPONÉS MERKÉN",
    precio: "$850 x 100GR",
    imagen: "/img/japones.jpeg",
  },
  {
    nombre: "CASTAÑAS DE CAJÚ",
    precio: "$2.000 x 100GR",
    imagen: "/img/caju.jpeg",
  },
  {
    nombre: "NUECES",
    precio: "$1.400 x 100GR",
    imagen: "/img/nueces.jpeg",
  },
  {
    nombre: "PISTACHOS",
    precio: "$2.100 x 100GR",
    imagen: "/img/pistachos.jpeg",
  },
];

export default function Home() {
  return (
    <>
      <section className="inicio-carrusel">
        <div
          id="carruselInicio"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {imagenesCarrusel.map((imagen, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={imagen.src}
              >
                <img
                  src={imagen.src}
                  className="d-block w-100"
                  alt={imagen.alt}
                />
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carruselInicio"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
            <span className="visually-hidden">Anterior</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carruselInicio"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </section>

      <section className="inicio-informacion">
        <h2 id="infoLocal">INFORMACIÓN DEL LOCAL</h2>

        <p id="resumenTienda">
          BECS es una tienda familiar ubicada en Maipú, dedicada a la venta de
          frutos secos, productos a granel, deshidratados, harinas, aliños,
          mieles y otras variedades pensadas para el consumo diario. Nuestro
          objetivo es ofrecer productos ricos, frescos y de buena calidad,
          manteniendo siempre una atención cercana y personalizada. Nos gusta
          ser parte del barrio y atender a nuestros vecinos de forma simple y
          acogedora, ofreciendo distintas alternativas para cada necesidad,
          incluyendo opciones vegetarianas, veganas, sin gluten y sin azúcar.
          Además, durante fechas especiales preparamos productos tradicionales
          como nuestro mote con huesillo, buscando mantener ese espíritu casero
          y familiar que representa a BECS. Más que una tienda, queremos ser un
          espacio cercano donde puedas encontrar productos de confianza,
          atención amable y opciones para compartir en familia.
        </p>
      </section>

      <section className="inicio-productos">
        <h2>PRODUCTOS DESTACADOS</h2>

        <div className="container">
          <div className="row g-4">
            {productosDestacados.map((producto) => (
              <div
                className="col-12 col-sm-6 col-lg-3"
                key={producto.nombre}
              >
                <div className="producto-destacado">
                  <img src={producto.imagen} alt={producto.nombre} />
                  <h3>{producto.nombre}</h3>
                  <p>{producto.precio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="inicio-videos">
        <h2>CONOCE BECS</h2>

        <p className="video-descripcion">
          Conoce algunos de nuestros productos y parte de lo que puedes
          encontrar en BECS
        </p>

        <div className="video-tarjeta">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/MkJWXel3bzo"
              title="Video de productos BECS"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <h1 id="tituloUbicacion">UBICACIÓN</h1>

      <section className="ubicacion">
        <div id="mapaBECS">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.0714809783494!2d-70.7484559!3d-33.4734897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c311c135ca27%3A0x16e72997ca0d7ac3!2sBandurria%20Azul%20585%2C%209250000%20Maip%C3%BA%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1788999679895!5m2!1ses!2scl"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Ubicación de BECS"
          ></iframe>
        </div>
      </section>
    </>
  );
}
