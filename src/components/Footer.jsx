import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    background-color: #2A2D34;
    height:70px;
    color: #fff;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    `
    


const Footer = () => {
  return (
    <Container>
        <span>&copy; All rights reserved.</span>
    </Container>
  )
}

export default Footer
