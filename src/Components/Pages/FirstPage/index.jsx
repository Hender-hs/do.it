import { H1, Span, P, MainGrid, MeddleGrid, CommunGrid } from './style'
import { SignButton, LogButton } from './style'
import { useHistory } from 'react-router-dom'

export const FirstPage= () => {

  const history = useHistory()
  const LoginLink = () => history.push('/login')
  const SignupLink = () => history.push('/signup')

  return (
    <MainGrid container direction='column' justify='center' alignItems='center' >
      <MeddleGrid container direction='column' justify='space-around' alignItems='center' >
        <CommunGrid>
          <H1>do<Span>.</Span>it</H1>
        </CommunGrid>
        <CommunGrid>
          <P>Organize-se de forma fácil e efetiva</P>
        </CommunGrid>
        <CommunGrid container justify='space-evenly' alignItems='center'>
          <SignButton onClick={SignupLink } variant='contained' >Cadastre-se</SignButton>
          <LogButton  onClick={LoginLink} variant='contained' >Login</LogButton>
        </CommunGrid>
      </MeddleGrid>
    </MainGrid>
  )
}