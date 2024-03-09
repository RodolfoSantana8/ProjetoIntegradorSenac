import Image from "next/image";

export default function Produto(props) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card-group h-100" style={{width:"100%"}}>
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
             <p className="card-text">
              <h4 className="text-body-secondary">
              {Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(props.preco)}
              </h4>
            </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
