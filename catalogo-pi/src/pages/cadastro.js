import Cabecalho from "@/components/Cabecalho";
import CustomCheckboxLabel from "@/components/CustomCheckboxLabel";
import CustomInputLabel from "@/components/CustomInputLabel";
import CustomTextAreaLabel from "@/components/CustomTextAreaLabel";
import axios from "axios";
import { useState } from "react";

export default function cadastro(){

    const [dadosProduto, setDadosProduto] = useState({})

    function handleSalvar()
    {
        //Enviaremos o post para a API
        axios.post("https://localhost:7087/api/Produto", dadosProduto)
            .then(res => console.log(res))
    }

    return (
        <>
        <Cabecalho />
        <div className="container-fluid">
            <div className="row">
                <CustomInputLabel id="nome" texto="Nome" col="8"/>
                <CustomInputLabel id="preco" texto="Preço" col="4"/>
                <CustomTextAreaLabel id="descricao" texto="Descrição" col="12"/>
                <CustomInputLabel id="imagem" texto="URL da Imagem" col="12" />
                <CustomCheckboxLabel id="disponivel" texto="Disponivel" col="6" />
                <CustomCheckboxLabel id="novidade" texto="Novidade" col="6" />

            </div>
            <div className="row">
                <div className="col-12">
                    <button className="btn btn-primary" onClick={handleSalvar}>Salvar</button>
                </div>
            </div>
        </div>
        </>
    )
}