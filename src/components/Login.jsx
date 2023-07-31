import React from "react";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
import styled from "styled-components";
import heroImage from '../images/bg-img.jpg';

const Container = styled.div`
  display: flex;
  background-image: url(${heroImage});
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
`;
const Wrapper = styled.div`
  width: 400px;
  padding: 30px 50px;
  background: #fff;
`;
const Label = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: #000;
  margin-bottom: 10px;
`;
const Input = styled.input`
  font-size: 14px;
  font-weight: 300;
  color: #000;
  width: 100%;
  padding: 5px 10px;
  border: 1px solid #000;
  margin-bottom: 20px;
  height: 35px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 300;
  color: #000;
`;


const Button = styled.button`
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  background: #377f01;
  width: 150px;
  margin-bottom: 20px;
  border: 1px solid #c0b9b9;
  cursor: pointer;
  padding: 10px 20px;
  border: none;
  transition: background-color 0.3s ease;
  border-radius: 20px;
`;

const Login = () => {
  const [userName, SetuserName] = useState([]);
  const [userPass, SetuserPass] = useState([]);
  const history = useHistory();

  const loginHandler = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/users/" + userName)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        if (Object.keys(resp).length === 0) {
          toast.warning("Please enter valid username");
        } else {
          if (resp.userPass === userPass) {
            toast.success("User Login sucessfully");
            sessionStorage.setItem("loggedIn","true");
            sessionStorage.setItem("loggedinUser", JSON.stringify(resp));
          } else {
            toast.error("Please enter vaild credintails");
          }
        }
      });
  };
  return (
    <div>
      <Container>
        <Wrapper>
        <Link to="/" style={{"color":"blue"}}>Home</Link>
          <form onSubmit={loginHandler}>
            <Title>Login</Title>
            <Label>User Name</Label>
            <Input
              placeholder="Please enter username"
              type="text"
              required
              value={userName}
              onChange={(e) => SetuserName(e.target.value)}
            />
            <Label>Password</Label>
            <Input
              placeholder="Please enter Password"
              type="password"
              required
              value={userPass}
              onChange={(e) => SetuserPass(e.target.value)}
            />
            <Button type="submit">Submit</Button>
            <p>
              if you don't have account, Please{" "}
              <Link to="/register" style={{"color":"blue"}}>Register</Link>
            </p>
          </form>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Login;
