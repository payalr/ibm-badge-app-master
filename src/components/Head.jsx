import React from "react";
import { useHistory, Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import { toast } from "react-toastify";

const Container = styled.div`
  background-color: #000000;
  color: #fff;
  height: 70px;
`;

const Wrapper = styled.div`
  padding: 10px 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
`;
const Center = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 3;
`;

const Logo = styled.div`
  font-size: 30px;
`;
const Right = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: space-evenly;
  font-weight: 300;
  text-transform: uppercase;
`;

const Menu = styled.div`
  display: flex;
  align-items: end;
`;

const MenuUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-right: 50px;
`;

const MenuItem = styled.li`
  list-style: none;
  margin: 0 10px;
  font-weight: 300;
`;

const LogOutbtn = styled.button`
  border: none;
  padding: 5px 10px;
  border-radius: 2px;
  cursor: pointer;
  letter-spacing: 1px;
  background: #fff;
  color: #000;
`;

const Head = () => {
  const LoggedIn = sessionStorage.getItem("loggedIn");
  const UserDetails = JSON.parse(sessionStorage.getItem("loggedinUser"));
  const history = useHistory();

  const logoutHandler = () => {
    sessionStorage.clear();
    toast.success("Logout sucessfully");
    history.push("/login");
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          {" "}
          <Logo>
            <Link to="/">IBM</Link>
          </Logo>
        </Left>
        <Center>
          <Menu>
            <MenuUl>
              <MenuItem>
                <Link to="/">Home</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/qr-scanner">QR Code Scanner</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/about-us">About Us</Link>
              </MenuItem>
            </MenuUl>
          </Menu>
        </Center>
        <Right>
          {LoggedIn === "true" ? (
            <>
              Hi!! {UserDetails.id},{" "}
              <LogOutbtn onClick={logoutHandler}>Logout</LogOutbtn>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link> |
              <Link to="/signup">Signup</Link>
            </>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Head;
