import { MainGrid, CommunGrid, CommunGridInput, MiddleGrid }            from './style'
import { ImageTag, StyledButton , InputText, Form, H1, P, StyledLink }  from './style'
import login_image                                                      from '../../../Assets/login_image.svg'
import MailOutlineIcon                                                  from '@material-ui/icons/MailOutline'
import LockIcon                                                         from '@material-ui/icons/Lock'
import * as yup                                                         from 'yup'
import { yupResolver }                                                  from '@hookform/resolvers/yup'
import { useForm }                                                      from 'react-hook-form'
import { LoginRequest }                                                 from './loginRequest'
import { useHistory }                                                   from 'react-router-dom'

export const Login = () => {

  const history = useHistory()

  const token = localStorage.getItem('@do.it/token')

  if (token !== null) history.push('/home')

  const { makeLoginRequest } = LoginRequest()

  const formSchema = yup.object().shape({
    'email': yup.string().required('Email Obrigatório').email('Email Inválido'),
    'password': yup.string().required('Senha Obrigatória'),
  })

  const { register, handleSubmit, formState: { errors } } = useForm( { resolver: yupResolver(formSchema) } )

  const funcSubmitForm = (data) => makeLoginRequest(data)

  return (
    <MainGrid container direction='row' justify='space-between' >
      <CommunGrid>
        <Form onSubmit={handleSubmit(funcSubmitForm)} >
          <MiddleGrid 
            container 
            direction='column' 
            justify='space-evenly' 
            alignItems='center' 
          >
              <CommunGridInput 
                container 
                justify='center' 
                alignItems='center' 
              >
                <H1>Login</H1>
              </CommunGridInput>
              <CommunGridInput 
                container 
                spacing={10} 
                justify='space-evenly' 
                alignItems='center' 
              >
                <MailOutlineIcon color='action' />
                <InputText 
                  {...register('email')} 
                  error={errors.email?.message ? true : false} 
                  helperText={errors.email?.message} 
                  placeholder='Seu Email' 
                  variant='outlined' 
                  label='Email' 
                ></InputText>
              </CommunGridInput>
              <CommunGridInput 
                container 
                spacing={10} 
                justify='space-evenly' 
                alignItems='center' 
              >
                <LockIcon color='action' />
                <InputText 
                  {...register('password')} 
                  type='password' 
                  error={errors.password?.message ? true : false} 
                  helperText={errors.password?.message} 
                  placeholder='Sua senha' 
                  variant='outlined' 
                  label='Senha' 
                ></InputText>
              </CommunGridInput>
              <CommunGridInput 
                container 
                spacing={10} 
                justify='space-evenly' 
                alignItems='center' 
              >
                <StyledButton type='submit' variant='contained' >Entrar</StyledButton >
              </CommunGridInput>
              <P>Ainda não possui uma conta? <StyledLink to='/signup'>Cadastrar</StyledLink></P>
          </MiddleGrid>
        </Form>
      </CommunGrid>
      <ImageTag src={login_image} />
    </MainGrid>
  )
}