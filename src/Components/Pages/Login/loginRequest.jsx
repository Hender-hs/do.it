import axios from 'axios'
import { useHistory } from 'react-router-dom'

export const LoginRequest = () => {

  const history = useHistory()

  const makeLoginRequest = async (data) => {

    const headers = {
      'Content-Type': 'application/json'
    }
  
    const response = await axios.post('https://api-nodejs-todolist.herokuapp.com/user/login', data, headers)
    if (response.status === 200) {
      localStorage.setItem('@do.it/token', response.data.token)
      history.push('/home')
    }
  }

  return { makeLoginRequest }
}