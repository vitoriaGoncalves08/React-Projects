import "./Colaborador.css";

const Colaborador = ({ nome, cargo, imagem, corCard }) => {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: corCard }}>
        <img src={imagem} alt="" />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
