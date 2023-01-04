import styled from "styled-components";
import {Circle, Trash, CheckCircle} from "phosphor-react";

const TaskContainer = styled.div`
    display: flex;
    gap: 0.75rem;
    flex: 1;

 

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



export function Task(props:any){

    function handleDelete(){
        props.deleteTask(props.comment);
    }

    function handleCheck(){

    }

    return(
        <TaskContainer>
            <div>
                 <CheckCircle size={20} color="#8284FA" />
                <Circle size={20} color="#4EA8DE" onClick={handleCheck}/>
            </div>
                <span>{props.comment}</span>
            <div>
                <Trash size={20} color="#808080" onClick={handleDelete}/>
            </div>
        </TaskContainer>
    );
}