import TasksShow from "./TasksShow";
const TaskList = ({tasks,onDelete, onUpdate})=>{
    return(
        //<form action=""></form>
        <div className="task-list">
            {tasks.map((task,index)=>{
                return (
                    <TasksShow key={index} task={task} onDelete={onDelete} onUpdate={onUpdate}
                    />
                )
            })}
        </div>
    )
}
export default TaskList;