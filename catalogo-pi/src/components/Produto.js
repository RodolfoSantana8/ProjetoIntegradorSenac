import Image from "next/image";

export default function Produto(props) {
  return (
    <div>
      <div className="card-group" style={{width:500}}>
        <div className="card">
          <img
            src={props.imagem}
            className="card-img-top"
            alt="..."
            width="100%"
            height="auto"
          />
          <div className="card-body">
            <h5 className="card-title">{props.nome}</h5>
            <p className="card-text">
            {props.descricao}
            </p>
            <div className="d-flex justify-content-between align-items-center">
              {
                props.disponivel == false
                  ? <span className="badge text-bg-secondary">Indisponível</span>
                  : null
              }
              {
                props.novidade == true
                  ? <span className="badge text-bg-success">Novidade</span>
                  : null
              }
             
            </div>
            <p className="card-text">
              <small className="text-body-secondary">
              R${props.preco},00
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
