import styled from "styled-components";
import Navbar from "./components/Navbar";
import BooksForm from "./components/BooksForm";
import BooksTable from "./components/BooksTable";

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
