import styled from 'styled-components'
import { TextField, Button } from '@material-ui/core'

export const MainGrid = styled.div `
  width: 100vw;
  min-height: 100vh;
  background-color: #F1EDE0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeaderGrid = styled.div `
  width: 100%;
  height: 25%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BodyGrid = styled.div `
  width: 80%;
  min-height: 75%;
  /* background-color: green; */
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

export const CommunGrid = styled.div `
  width: 60%;
  height: 23%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const InputAddList = styled(TextField) `
  width: 75%;
  background-color: white;
`

export const AddButton = styled(Button) `
  background-color: black !important;
  color: white !important;
  height: 100%;
  width: 16%;
  text-transform: unset !important;
`

export const TaskPaper = styled.div `
  background-color: white;
  width: 200px;
  height: 280px;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 10px 10px 10px black;
  padding: 1%;
  display: flex;
  flex-direction: column;
  margin: 15px;
`

export const Hr = styled.hr `
  width: 40%;
`

export const Span = styled.span `
  color: black;
  font-size: 50%;
`

export const HeaderTask = styled.div `
  /* background-color: red !important; */
  width: 100% !important;
  /* height: 0% !important; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const BodyTask = styled.div `
  /* background-color: green; */
  height: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CommunTaskGrid = styled.div `
  /* background-color: green; */
  min-width: 60%;
  width: 60%;
`

export const TaskConclutionButton = styled(Button) `
  background-color: black !important;
  color: white !important;
  text-transform: unset !important;
`