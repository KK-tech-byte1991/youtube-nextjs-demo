import React from 'react'

type PageProps= {
    params:{
        todoid:number
    }
}

function TodoPage ({params:{todoid}}:PageProps){
    
    return <div className="">Todo Page  {todoid}</div>

}

export default TodoPage