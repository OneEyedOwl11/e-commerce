import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
        Free Shipping on Orders over R700
    </Container>
  )
}

export default Announcement