import { MainGrid, HeaderGrid, BodyGrid, InputAddList, AddButton }  from './style'
import { CommunGrid }                                               from './style'
import EditIcon                                                     from '@material-ui/icons/Edit'
import { useEffect, useState }                                      from 'react'
import { useHistory }                                               from 'react-router-dom'
import axios                                                        from 'axios'
import { AddingTasks }                                              from './AddingTask'
import { PrintEachCard }                                            from './PrintingEachCard'

export const Home = () => {

  const history = useHistory()

  const token = localStorage.getItem('@do.it/token')

  const Authorization = { 'headers': { 
    'Authorization': `Bearer ${token}`,
    'Content-Type':	'application/json'
    } 
  }

  const [isAValidToke, setIsAValidToken]  = useState(false)
  const [allUserTasks, setAllUserTasks]   = useState(null)
  const [dataOfNewTask, setDataOfNewTask] = useState(null)

  const { requestToAddTasks }             = AddingTasks()
  const { tasks }                         = PrintEachCard()

  const getAllTasks = async () => {
    const response = await axios.get('https://api-nodejs-todolist.herokuapp.com/task', Authorization)
    setAllUserTasks(response.data.data)
  }

  useEffect( () => {    
    !isAValidToke 
    && 
    (
      axios.get('https://api-nodejs-todolist.herokuapp.com/user/me', Authorization)
        .then( () => {
          getAllTasks()
          setIsAValidToken(true) 
        } )
        .catch( () => {
          localStorage.clear()
          history.push('/login')
        } )
    )
  } )

  return (
    <MainGrid>
      { 
        isAValidToke 
        ?
          <>
            <HeaderGrid>
              <CommunGrid>
                <EditIcon color='action' />
                <InputAddList variant='outlined' placeholder='Adicione uma tarefa' onChange={ (el) => setDataOfNewTask(el.target.value) } />
                <AddButton variant='outlined' onClick={ () => !!dataOfNewTask && requestToAddTasks(dataOfNewTask, Authorization, allUserTasks, setAllUserTasks, getAllTasks) } >Adicionar</AddButton>
              </CommunGrid>
            </HeaderGrid>
            <BodyGrid>
                { allUserTasks && allUserTasks.map((el, index) => tasks(el, index, Authorization, allUserTasks, setAllUserTasks, getAllTasks)) }
            </BodyGrid>
          </>
        :
        <h1>Carregando</h1>
      }
    </MainGrid>
  )
}