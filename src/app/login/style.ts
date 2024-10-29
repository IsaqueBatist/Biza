"use client";

import styled from "styled-components";
interface MainContainerProps {
  background: string
}


export const MainContainer = styled.div<MainContainerProps>`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
`

export const Form = styled.form`
  height: 60%;
  width: 60%;
  background-color: red;
  padding: 1rem;
`