import Image from "next/image";

export default function Produto() {
  return (
    <div>
      <div className="card-group" style={{width:500}}>
        <div className="card">
          <Image
            src={"/assets/carroamarelo.png"}
            className="card-img-top"
            alt="..."
            width={920}
            height={618}
          />
          <div className="card-body">
            <h5 className="card-title">Carro Hot Wheels Amarelo</h5>
            <p className="card-text">
            Adicione velocidade à sua coleção com este incrível carrinho de Hot Wheels.
            Com design inspirado em carros de corrida e detalhes autênticos, este carrinho é perfeito para fãs de velocidade de todas as idades.
            Adquira já e prepare-se para emocionantes corridas em sua pista Hot Wheels!
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
