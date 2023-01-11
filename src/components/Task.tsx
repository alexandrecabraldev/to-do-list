import styled from "styled-components";
import {Circle, Trash, CheckCircle} from "phosphor-react";
import { useRef, useState } from "react";

const TaskContainer = styled.div`
    display: flex;
    gap: 0.75rem;
    flex: 1;
    //text-decoration: line-through;

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
    deleteTask: (task: String)=>void;
}

export function Task(props:TypeProps){

    const lineThrough = useRef<HTMLDivElement>();

    let isCheckEnable: Boolean = false;  

    function handleDelete(){
        props.deleteTask(props.comment);
    }

    function handleCheck(){

        isCheckEnable = !isCheckEnable;

        if(isCheckEnable){
            lineThrough.current!.style.textDecoration = "line-through";
        }else{
            lineThrough.current!.style.textDecoration = "none";
        }

        console.log(isCheckEnable);
        
    }

    return(
        <TaskContainer>
            <div>

                {   
                    
                    (isCheckEnable)?<CheckCircle size={20} color="#8284FA" onClick={handleCheck}/>:<Circle size={20} color="#4EA8DE" onClick={handleCheck}/>
                    
                }
                 
            </div>

                <span ref={lineThrough}>{props.comment}</span>

            <div>
                <Trash size={20} color="#808080" onClick={handleDelete}/>
            </div>
        </TaskContainer>
    );
}