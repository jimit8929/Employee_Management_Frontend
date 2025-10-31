import Header from '../Dashboard_Details/Header'
import TaskList from '../Dashboard_Details/TaskList'
import TaskListDetails from '../TaskList/TaskListDetails'

const EmployeeDashboard = ({props}) => {
  return (
    <div className="min-h-screen w-full bg-[#1C1C1C] text-white overflow-y-auto flex flex-col gap-8 px-4 sm:px-6 md:px-10 py-6 md:py-10 scrollbar-hide">
      <Header data={props.data} changeUser={props.changeUser}/>
      <TaskList data={props.data}/>
      <TaskListDetails data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
