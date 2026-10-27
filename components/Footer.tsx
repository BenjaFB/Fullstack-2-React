export default function Footer() {
  return (
    <footer>
      <div id="barra_footer">
        <a
          href="https://wa.me/56944542829"
          target="_blank"
          rel="noreferrer"
          id="item_footer1"
        >
          <i className="fa-brands fa-whatsapp" id="logo_whatsapp"></i>
          <span className="textoFooter">+56944542829</span>
        </a>

        <div id="separador_footer1"></div>

        <a
          href="https://www.instagram.com/becs.frutossecos/"
          target="_blank"
          rel="noreferrer"
          id="item_footer2"
        >
          <i className="fa-brands fa-instagram" id="logo_instagram"></i>
          <span className="textoFooter">BECS Frutos Secos</span>
        </a>
      </div>
    </footer>
  );
}
