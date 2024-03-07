import Link from "next/link";

export default function Cabecalho(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
           <img src="/assets/radex.webp" alt="Logo" width="100" height="40" className="d-inline-block align-text-top"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">
                Home
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/cadastro">
                Cadastro
              </Link>
            </li>

          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Pesquisar"             
              onChange={props.pesquisar}
            />            
          </form>
        </div>
      </div>
    </nav>
  );
}
