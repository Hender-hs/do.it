import axios from 'axios'

export const RemovingTasks = () => {

  const removingTask = async (id, allUserTasks, setAllUserTasks, Authorization, callbackGetAllTasks) => {

    const filteringTasksBeforeRequest = () => {
      const newTaksState = allUserTasks.filter((el) => el._id !== id)
      setAllUserTasks(newTaksState)
    }
    filteringTasksBeforeRequest()

    try {

      const response = await axios.delete(`https://api-nodejs-todolist.herokuapp.com/task/${id}`, Authorization)
      if (response.status === 200) callbackGetAllTasks()
    }
    catch (error) {
      console.error('Ocured a error')
    }
  }

  return { removingTask }
}