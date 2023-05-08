import styled from "styled-components";
import Navbar from "./components/Navbar";
import BooksForm from "./components/BooksForm";
import BooksTable from "./components/BooksTable";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainSection = styled.div`
  display: flex;
  flex-grow: 1;
`;

function App() {
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    edition: "",
  });
  const [books, setBooks] = useState([]);

  return (
    <Container>
      <Navbar></Navbar>
      <MainSection>
        <BooksForm
          setForm={setNewBook}
          values={newBook}
          saveBook={() => setBooks([...books, newBook])}
        ></BooksForm>
        <BooksTable books={books}></BooksTable>
      </MainSection>
    </Container>
  );
}

export default App;
