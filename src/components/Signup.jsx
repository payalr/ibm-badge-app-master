import React from "react";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import { toast } from "react-toastify";

const Container = styled.div`
  display: flex;
  background-image: url("https://source.unsplash.com/user/c_v_r/1900x800");
  background-size: cover;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 200px 0px;
`;
const Wrapper = styled.div`
  width: 400px;
  padding: 30px 40px;
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
  margin-bottom: 30px;
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

const Signup = () => {
  const [id, Setid] = useState("");
  const [userPass, SetuserPass] = useState("");
  const [userCity, SetuserCity] = useState("");
  const [userCountry, SetuserCountry] = useState("India");
  const [userPhone, SetuserPhone] = useState("");
  const [userEmail, SetuserEmail] = useState("");

  const history = useHistory();

  const SignupHandler = (e) => {
    e.preventDefault();
    let regObj = {
      id,
      userPass,
      userCity,
      userCountry,
      userPhone,
      userEmail,
    };

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(regObj),
    })
      .then((res) => {
        toast.success("Registration has been successfully");
        setTimeout(()=>{
          history.push('/login');
        }, 2000)
      })
      .catch((err) => {
        toast.warning(err);
      });
  };
  return (
    <div>
      <Container>
        <Wrapper>
        <Link to="/" style={{"color":"blue"}}>Home</Link>
          <form onSubmit={SignupHandler}>
            <Title>Signup</Title>

            <Label>User Name</Label>
            <Input
              required
              placeholder="Please enter username"
              type="text"
              value={id}
              onChange={(e) => Setid(e.target.value)}
            />

            <Label>Password</Label>
            <Input
              required
              placeholder="Please enter Password"
              type="password"
              value={userPass}
              onChange={(e) => SetuserPass(e.target.value)}
            />

            <Label>City</Label>
            <Input
              required
              placeholder="Please enter City"
              type="text"
              value={userCity}
              onChange={(e) => SetuserCity(e.target.value)}
            />

            <Label>Country</Label>
            <Input
              required
              placeholder="Please enter Country"
              type="text"
              value={userCountry}
              onChange={(e) => SetuserCountry(e.target.value)}
            />

            <Label>Phone No.</Label>
            <Input
              required
              placeholder="Please enter Phone no."
              type="text"
              value={userPhone}
              onChange={(e) => SetuserPhone(e.target.value)}
            />

            <Label>Email</Label>
            <Input
              required
              placeholder="Please enter Email id"
              type="text"
              value={userEmail}
              onChange={(e) => SetuserEmail(e.target.value)}
            />
            <Button type="submit">Submit</Button>
            <p>
              if you have account, Please{" "}
              <Link to="/login" style={{"color":"blue"}}>Login</Link>
            </p>
          </form>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Signup;
