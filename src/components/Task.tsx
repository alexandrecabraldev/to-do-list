import styled from "styled-components";
import {Circle, Trash, CheckCircle} from "phosphor-react";
import { useRef, useState } from "react";
import {TaskObject} from "./Main"

const TaskContainer = styled.div`
    display: flex;
    gap: 0.75rem;
    flex: 1;
    //text-decoration: ${(true) ? "line-through" : "none"};

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
         
        if(!isCheckEnable){
            lineThrough.current!.style.textDecoration = "line-through";
            setCountTaskDone(value=>value+1);
            countTaskDoneSuport++;
        }else{
            lineThrough.current!.style.textDecoration = "none";
            setCountTaskDone(value=>value-1);
            countTaskDoneSuport--;
        }

        console.log(isCheckEnable);
        //console.log(countTaskDoneSuport);
        props.onCountDoneTask(countTaskDoneSuport);
    }

    

    return(
        <TaskContainer>
            <div>

                {   
                    
                    isCheckEnable ? (<CheckCircle size={20} color="#8284FA" onClick={handleCheck}/>) : (<Circle size={20} color="#4EA8DE" onClick={handleCheck}/>)
                    
                }
                 
            </div>

                <span ref={lineThrough}>{props.comment}</span>

            <div>
                <Trash size={20} color="#808080" onClick={handleDelete}/>
            </div>
        </TaskContainer>
    );
}