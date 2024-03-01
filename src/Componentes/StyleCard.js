import styled from "styled-components";

export const PainelDeVideos = styled.section`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  row-gap: 10px;
  column-gap: 10px;
  margin: 10px;
`;

export const BoxPaginaPrincipal = styled.div`
    width: 100%;
    height: 200px;
  `;

export const ImagemVideo = styled.img`
    width: 100%;
    height: 200px;
`

export const Titulo = styled.h4`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-left: 20px;
`