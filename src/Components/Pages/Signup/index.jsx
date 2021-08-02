import { MainGrid, CommunGrid, CommunGridInput, MiddleGrid }            from './style'
import { ImageTag, StyledButton , InputText, Form, H1, P, StyledLink }  from './style'
import signup_image                                                     from '../../../Assets/signup_image.svg'
import MailOutlineIcon                                                  from '@material-ui/icons/MailOutline'
import PersonIcon                                                       from '@material-ui/icons/Person'
import LockIcon                                                         from '@material-ui/icons/Lock'
import { useForm }                                                      from 'react-hook-form'
import { yupResolver }                                                  from '@hookform/resolvers/yup'
import * as yup                                                         from 'yup'
import { SignupRequest }                                                from './signupRequest'
import { useHistory }                                                   from 'react-router-dom'

export const Signup = () => {

  const history = useHistory()

  const token = localStorage.getItem('@do.it/token')

  if (token !== null) history.push('/home')

  const { makeSignupRequest } = SignupRequest();

  const formSchema = yup.object().shape({
    'email': yup.string().required('Email Obrigatório').email('Email Inválido'),
    'name': yup.string().required('Nome Obrigatório'),
    'password': yup.string().min(7, 'São Necessários no Mínimo Sete Caracteres').required('Senha Obrigatória'),
    'confirmPassword': yup.string().min(7, 'São Necessários no Mínimo Sete Caracteres').oneOf([yup.ref('password')], 'As Senhas Não Se Coincidem').required('Confirmação Obrigatória')
  })

  const { register, handleSubmit, formState: { errors } } = useForm( { resolver: yupResolver(formSchema) } )

  const funcSubmitForm = (data) => makeSignupRequest(data)

  return (
    <MainGrid container direction='row' justify='space-between' >
       <ImageTag src={signup_image} />
      <CommunGrid>
        <Form onSubmit={handleSubmit(funcSubmitForm)} >
          <MiddleGrid container direction='column' justify='space-evenly' alignItems='center' >
              <CommunGridInput container justify='center' alignItems='center' >
                <H1>Sign Up</H1>
              </CommunGridInput>
              <CommunGridInput container spacing={10} justify='space-evenly' alignItems='center' >
                <PersonIcon color='action' />
                <InputText {...register('name')} error={errors.name?.message ? true : false} helperText={errors.name?.message} placeholder='Seu nome completo' variant='outlined' label='Nome' ></InputText>
              </CommunGridInput>
              <CommunGridInput container spacing={10} justify='space-evenly' alignItems='center' >
                <MailOutlineIcon color='action' />
                <InputText {...register('email')} error={errors.email?.message ? true : false} helperText={errors.email?.message} placeholder='Seu melhor Email' variant='outlined' label='Email' ></InputText>
              </CommunGridInput>
              <CommunGridInput container spacing={10} justify='space-evenly' alignItems='center' >
                <LockIcon color='action' />
                <InputText {...register('password')} type='password' error={errors.password?.message ? true : false} helperText={errors.password?.message} placeholder='Escolha uma senha' variant='outlined' label='Senha' ></InputText>
              </CommunGridInput>
              <CommunGridInput container spacing={10} justify='space-evenly' alignItems='center' >
                <LockIcon color='action' />
                <InputText {...register('confirmPassword')} type='password' error={errors.confirmPassword?.message ? true : false} helperText={errors.confirmPassword?.message} placeholder='Confirme sua senha' variant='outlined' label='Confimação da senha' ></InputText>
              </CommunGridInput>
              <CommunGridInput container spacing={10} justify='space-evenly' alignItems='center' >
                <StyledButton type='submit' variant='contained' >Enviar</StyledButton >
              </CommunGridInput>
              <P>Já tem uma conta? <StyledLink to='/login'>Login</StyledLink></P>
          </MiddleGrid>
        </Form>
      </CommunGrid>
    </MainGrid>
  )
}