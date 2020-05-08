import React from 'react';
import styled from 'styled-components';
import Form from './components/Form'

function App() {
  const Container = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `
  const Title = styled.h1`
    position: absolute;
    top: 0;
  `

 

  return (
    <Container>
      <Title>Binary to Decimal</Title>
      <Form/>
    </Container>
  );
}

export default App;
