import axios from 'axios'
import { useHistory } from 'react-router'

export const SignupRequest = () => {

  const history = useHistory()

  const headers = {
    'Content-Type': 'application/json'
  }

  const makeSignupRequest = async (data) => {
    const response = await axios.post('https://api-nodejs-todolist.herokuapp.com/user/register', data, headers)
    if (response.status === 201) {
      localStorage.setItem('@do.it/token', response.data.token)
      history.push('/home')
    }
  }

  return { makeSignupRequest }
}