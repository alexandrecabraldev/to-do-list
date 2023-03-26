import { createContext } from "react";
import { TaskObject } from "../components/Main";

interface ContextListType{
    countTaskDone:number;
    setCountTaskDone:React.Dispatch<React.SetStateAction<number>>
}

export const ContextList = createContext<ContextListType>({

    countTaskDone:0,
    setCountTaskDone:()=>{},
});