import styled from "styled-components"
import {PlusCircle} from "phosphor-react";
import { HeaderTask } from "./HeaderTask";
import { Task } from "./Task";
import { ChangeEvent, FormEvent, useState } from "react";

const FormContainer = styled.main`
    width: 46rem;
    margin: auto;

    form{
    
        button{
            display: flex;
            justify-content: center;
            align-items: center;
            gap:0.5rem;

            margin-top: -1.5rem;
            padding: 0 1rem;
            border-radius: 8px;
            border: none;
            background-color: ${props=>props.theme.blueDark};
            color: ${props=>props.theme["gray-100"]};

            font-weight: 700;

            &:hover{
                cursor: pointer; 
            }

            &:disabled{
                background-color: ${props=>props.theme["gray-400"]};
                cursor: not-allowed;
            }
        }
        
    }
`;

const ContainerInputButton = styled.div`
    display: flex;
    
    justify-content: center;
    gap: 0.5rem;

    margin-bottom: 4rem;
`;

const TextInput = styled.input`

    padding: 1rem;
    width: 100%;
    margin-top: -1.5rem;
    background-color: ${props=>props.theme["gray-500"]};
    border-radius: 8px;
    border: 1px solid ${props=>props.theme["gray-700"]};
    color: ${props=>props.theme["gray-300"]};
    
`;

class TaskObject{
    constructor(comment:String, keyValue:String){
        this.comment =comment;
        this.keyValue = keyValue;
    }

    comment:String;
    keyValue:String;
}

export function Main(){

    const [taskList, setTaskList] = useState<TaskObject[]>([]);
    const [text, setText] = useState("");

    function handleWrite(event: ChangeEvent<HTMLInputElement>){
        setText(event.target.value);
    }

    function handleSubmit(event: FormEvent){
        event.preventDefault();

        const dateInMilliseconds = new Date().getTime().toString();

        setTaskList(state=>[...state, new TaskObject(text, dateInMilliseconds)]);
        console.log(dateInMilliseconds);
        setText("");
    }

    function deleteTask(task: String){

        let newListWhithoutDeleted = taskList.filter(element=>element.comment!=task);
        setTaskList(newListWhithoutDeleted);
        console.log(newListWhithoutDeleted);
    }


    return(
        <FormContainer>
            <form action="" onSubmit={handleSubmit}>   
                <ContainerInputButton>

                    <TextInput title="createTask" type="text" placeholder="Adicione uma nova tarefa" onChange={handleWrite} value={text} required/>
                    <button title="button" type="submit">Criar <PlusCircle size={20} /> </button>
                    
                </ContainerInputButton>
                

                <HeaderTask countTask={taskList.length}/>
                {taskList.map((element, key)=> <Task key={key} comment={element.comment} deleteTask={deleteTask}/>)}
                
            </form>
        </FormContainer>
    )
}