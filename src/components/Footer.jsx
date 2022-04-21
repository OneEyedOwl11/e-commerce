import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({flexDirection: "column"})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.h1`
  display: flex;
`;

const SocialIcon = styled.h1`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  transition: all 0.3s ease;

  &:hover {
    color: black;
    transform: scale(1.1);
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display: "none"})}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({backgroundColor: "#fff8f8"})}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;

`;

const Payment = styled.img`
    width: 100%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SERD.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          sapiente laudantium, quas architecto, tenetur est temporibus
          consequatur exercitationem reprehenderit saepe corporis necessitatibus
          iure repellat sit a aut nam, vitae veniam.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="313DE2">
            <LinkedIn />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men's Fashion</ListItem>
          <ListItem>Woman's Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>
            Contact
        </Title>
        <ContactItem>
            <Room style={{marginRight:"10px"}}/> 420 Banana Rd, Ice-Cream 1401
        </ContactItem>
        <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +27 81 555 5555
        </ContactItem>
        <ContactItem>
            <MailOutline style={{marginRight:"10px"}}/> email@email.co.za
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  );
};

export default Footer;
