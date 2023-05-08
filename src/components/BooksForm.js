import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  box-sizing: border-box;
`;

const Form = styled.div`
  box-shadow: 10px 10px 35px 0px rgba(0, 0, 0, 0.15);
  width: 80%;
  height: fit-content;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  p {
    font-size: 30px;
    text-align: center;
    padding: 15px 0;
  }
  input {
    display: block;
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    box-sizing: border-box;
    margin: 20px 0;
  }
  button {
    width: fit-content;
    align-self: flex-end;
    padding: 10px 30px;
    border-radius: 100px;
  }
`;

export default function BooksForm({ setForm, values, saveBook }) {
  return (
    <Container>
      <Form>
        <p>Registra</p>
        <input
          type="text"
          placeholder="Título"
          value={values.title}
          onChange={(e) => {
            setForm({ ...values, title: e.target.value });
          }}
        ></input>
        <input
          type="text"
          placeholder="Autor"
          value={values.author}
          onChange={(e) => {
            setForm({ ...values, author: e.target.value });
          }}
        ></input>
        <input
          type="text"
          placeholder="Edición"
          value={values.edition}
          onChange={(e) => {
            setForm({ ...values, edition: e.target.value });
          }}
        ></input>
        <button onClick={saveBook}>Enviar</button>
      </Form>
    </Container>
  );
}
