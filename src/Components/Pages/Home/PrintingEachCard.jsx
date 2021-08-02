import { TaskPaper, Hr, Span, HeaderTask, BodyTask }                from './style'
import { CommunTaskGrid, TaskConclutionButton }                     from './style'
import AssignmentIcon                                               from '@material-ui/icons/Assignment'
import TodayIcon                                                    from '@material-ui/icons/Today'
import { RemovingTasks }                                             from './RemovingTasks'

export const PrintEachCard = () => {

  const { removingTask }  = RemovingTasks()

  const tasks = ({description, createdAt, _id}, index, Authorization, allUserTasks, setAllUserTasks, getAllTasks) => {

    const date  = new Date(createdAt)
    const day   = date.getDate()
    const month = new Intl.DateTimeFormat('pt-BR', {month: 'long'}).format(date)

    return (
      <TaskPaper key={index} >
        <HeaderTask>
          <AssignmentIcon color='action' />
          <Span>{description}</Span>
        </HeaderTask>
        <Hr/>
        <BodyTask>
          <CommunTaskGrid container justify='space-evenly' alignItems='center' >
            <TodayIcon color='action' />
            <Span>{`${day} de ${month}`}</Span>
          </CommunTaskGrid>
        </BodyTask>
        <TaskConclutionButton variant='outlined' onClick={() => removingTask(_id, allUserTasks, setAllUserTasks, Authorization, getAllTasks)} >Concluir</TaskConclutionButton>
      </TaskPaper>
    )
  }

  return { tasks }
}