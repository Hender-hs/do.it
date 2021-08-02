import styled from 'styled-components'
import { Grid, Button } from '@material-ui/core'

export const H1 = styled.h1 `
  font-size: 200%;
  text-shadow: 2px 1px 3px black;
`

export const Span = styled.span `
  font-size: 150%;
  color: #c87125;
`

export const P = styled.p `
  font-size: 130%;
`

export const MainGrid = styled(Grid) `
  background-color: #F1EDE0;
  width: 100vw;
  height: 100vh;

  color: black;
`

export const MeddleGrid = styled(Grid) `
  width: 40vw !important;
  height: 45vh;
`

export const CommunGrid = styled(Grid) `

`

export const SignButton = styled(Button) `
  background-color: white !important;
  width: 10vw;
  text-transform: unset !important;
`

export const LogButton = styled(Button) `
  background-color: black !important;
  width: 10vw;
  color: white !important;
  text-transform: unset !important;
`