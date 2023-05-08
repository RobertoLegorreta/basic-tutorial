import styled from "styled-components";
import Navbar from "./components/Navbar";
import BooksForm from "./components/BooksForm";
import BooksTable from "./components/BooksTable";

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const MainSection = styled.div``;

function App() {
  return (
    <Container>
      <Navbar></Navbar>
      <MainSection>
        <BooksForm></BooksForm>
        <BooksTable></BooksTable>
      </MainSection>
    </Container>
  );
}

export default App;
