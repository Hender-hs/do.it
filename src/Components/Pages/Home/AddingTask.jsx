import axios from 'axios'

export const AddingTasks = () => {

  const requestToAddTasks = async (data, Authorization, allUserTasks, setAllUserTasks, callbackGetAllTasks) => {
    
    const dataToRequest = {
      'description': data
    }

    dataToRequest['createdAt'] = Date.now()
    setAllUserTasks([...allUserTasks, dataToRequest])

    const response = await axios.post('https://api-nodejs-todolist.herokuapp.com/task', dataToRequest, Authorization)
    if (response.status === 201) callbackGetAllTasks()
  }

  return { requestToAddTasks }
}