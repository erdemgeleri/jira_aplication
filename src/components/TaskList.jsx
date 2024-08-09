import TasksShow from "./TasksShow";
//Başka bir jsx'e tasks, onDelete, onUpdate gönderir.
//3 prop alır
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