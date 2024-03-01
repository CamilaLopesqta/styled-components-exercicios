import { BoxPaginaPrincipal, ImagemVideo, Titulo } from "./StyleCard";

function CardVideo(props) {
  function reproduzVideo(props) {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <BoxPaginaPrincipal className="box-pagina-principal" onClick={reproduzVideo}>
      <ImagemVideo src={props.image1} alt={props.textoAlternativo} />
      <Titulo>{props.titulo}</Titulo>
    </BoxPaginaPrincipal>
  );
}

export default CardVideo;
