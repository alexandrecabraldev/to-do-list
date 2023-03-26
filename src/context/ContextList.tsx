import { createContext } from "react";
import { TaskObject } from "../components/Main";

interface ContextListType{
    taskList:TaskObject[];
    setTaskList:React.Dispatch<React.SetStateAction<TaskObject[]>>
}

export const ContextList = createContext<ContextListType>({

    taskList:[],
    setTaskList:()=>{},
});