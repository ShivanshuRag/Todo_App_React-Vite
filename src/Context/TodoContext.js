import { createContext , useContext } from "react"

export const TodoContext = createContext({
    todos : [
       {
        id : 1,
        todo : "Learn React",
        completed : false
       }

    ],

    addTodo : (todo)=>  {},
    updateTodo: (id , todo)=>{},
    deleteTodo: (id)=>{},
    toggleTodo: (id)=>{}


})



export const TodoContextProvider = TodoContext.Provider;

export  function useTodo(){

    return useContext(TodoContext);

}