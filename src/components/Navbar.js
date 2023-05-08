import styled from "styled-components";

const Container = styled.div`
  background: black;
  height: 60px;
  padding: 0 100px;
  display: flex;
  align-items: center;
`;

const Title = styled.p`
  color: white;
  font-weight: 500;
  font-size: 20px;
`;

export default function Navbar() {
  return (
    <Container>
      <Title>My app</Title>
    </Container>
  );
}
