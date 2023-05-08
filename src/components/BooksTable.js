import styled from "styled-components";
import Row from "./Row";

const Container = styled.div`
  height: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  box-sizing: border-box;
`;

const Table = styled.div`
  width: 90%;
  max-height: 600px;
  background: white;
  box-shadow: 10px 10px 35px 0px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: scroll;
  p {
    font-size: 30px;
    text-align: center;
    padding: 15px 0;
    margin-bottom: 15px;
  }
`;

export default function BooksTable({ books }) {
  const data = books.map((e, index) => (
    <Row
      key={index}
      id={index}
      title={e.title}
      author={e.author}
      edition={e.edition}
    />
  ));

  return (
    <Container>
      <Table>
        <p>Lista de libros</p>
        <Row
          main={true}
          id="ID"
          title="Título"
          author="Autor"
          edition="Edición"
        />
        {data}
      </Table>
    </Container>
  );
}
