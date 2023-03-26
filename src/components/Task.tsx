import styled from "styled-components";
import {Circle, Trash, CheckCircle} from "phosphor-react";
import { useRef, useState } from "react";
import {TaskObject} from "./Main"


interface TaskContainerProps{
    check: boolean;
}

const TaskContainer = styled.div<TaskContainerProps>`
    display: flex;
    gap: 0.75rem;
    flex: 1;
    text-decoration: ${(props)=>(props.check ? "line-through":"none")};
    //? "line-through" : "none";

    padding: 1rem 0.75rem;
    margin-bottom: 0.75rem;
    background-color: ${props=>props.theme["gray-400"]};
    border-radius: 8px;
    color:  ${props=>props.theme["gray-100"]};

    div{
        cursor: pointer;
        height: 0;

    }

    span{
        display: flex;
        flex: 1;
    }

`;


interface TypeProps {
    comment: String;
    objectTask: TaskObject;
    deleteTask: (task: string)=>void;
    onCountDoneTask:(countTask:number)=>void;
    keyValue:string;
    
}

export function Task(props:TypeProps){
    const [taskList, setTaskList] = useState<TaskObject[]>([]);
    const lineThrough = useRef<HTMLSpanElement>(null);
    const [isCheckEnable, setIsCheckEnable] = useState(false);
    const [countTaskDone, setCountTaskDone] = useState(0);

    let countTaskDoneSuport = 0;

    function handleDelete(){
        props.deleteTask(props.keyValue);

        if(isCheckEnable){
            setCountTaskDone(value=>value-1);
            countTaskDoneSuport--;
            props.onCountDoneTask(countTaskDoneSuport);
        }
    }


    function handleCheck(){

        setIsCheckEnable(state=>!state);
        //props.objectTask.done=!props.objectTask.done;
         
        if(!props.objectTask.done){
            //setIsCheckEnable(props.objectTask.done);
            setCountTaskDone(value=>value+1);
            countTaskDoneSuport++;
            props.objectTask.done=true;

        }else{
            //lineThrough.current!.style.textDecoration = "none";
            setCountTaskDone(value=>value-1);
            props.objectTask.done=false;
            countTaskDoneSuport--;
        }

        console.log(isCheckEnable);
        //console.log(countTaskDoneSuport);
        props.onCountDoneTask(countTaskDoneSuport);
    }

    

    return(
        <TaskContainer check={props.objectTask.done}>
            <div>

                {   
                    
                    props.objectTask.done ? (<CheckCircle size={20} color="#8284FA" onClick={handleCheck}/>) : (<Circle size={20} color="#4EA8DE" onClick={handleCheck}/>)
                    
                }
                 
            </div>

                <span ref={lineThrough}>{props.comment}</span>

            <div>
                <Trash size={20} color="#808080" onClick={handleDelete}/>
            </div>
        </TaskContainer>
    );
}