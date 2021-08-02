import styled from 'styled-components'
import { Grid, Button, TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'

export const MainGrid = styled(Grid) `
  background-color: #F1EDE0;
  width: 100vw;
  height: 100vh;
`

export const CommunGrid = styled(Grid) `
  width: 55% !important;
`

export const MiddleGrid = styled(Grid) `
  width: 70% !important;
  height: 90% !important;
  /* background-color: orange; */
`

export const CommunGridInput = styled(Grid) `
  width: 100% !important;
  /* background-color: orangered; */
`

export const ImageTag = styled.img `
  background-color: black;
  height: 100%;
  width: 45%;
`

export const InputText = styled(TextField) `
  width: 80%;
`

export const Form = styled.form `
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledButton = styled(Button) `
  text-transform: unset !important;
  background-color: black !important;
  color: white !important;
  width: 40% !important;
  height: 100% !important;
`

export const H1 = styled.h1 `
  font-size: 200%;
  color: black;
  text-shadow: 2px 1px 15px rgb(0, 0, 0, 0.7);
`

export const P = styled.p `
  font-size: 60%;
  color: black;
`

export const StyledLink = styled(Link) `
  font-size: 100%;
  text-decoration: unset;
  color: orangered;
`