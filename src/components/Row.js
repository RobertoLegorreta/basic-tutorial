import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  border-right: none !important;
  p {
    margin: 0 !important;
    font-size: 15px !important;
    font-weight: ${(props) => (props.main ? "700 !important" : "")};
    border-right: 1px solid gray;
  }
  #id {
    flex-grow: 1;
  }
  #title,
  #author,
  #edition {
    flex-grow: 2;
  }
`;

export default function Row({ main, id, title, author, edition }) {
  return (
    <Container main={main}>
      <p id="id">{id}</p>
      <p id="title">{title}</p>
      <p id="author">{author}</p>
      <p id="edition">{edition}</p>
    </Container>
  );
}
