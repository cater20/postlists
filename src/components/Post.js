import React ,{useState}from 'react'

function Posts({title,content,author,deleteApost,id,isFun,changeDisplayedPosts}) {
  const [isRead,setIsRead]= useState(false);


  function handleDelete(){
    fetch(`http://localhost:8004/posts/${id}`,{
      method:'DELETE'
    })
    .then(response=>response.json())
    .then(data=>deleteApost(id))
    .catch(error=>console.log(error))
    
  }
  function changeFun(){
    fetch(`http://localhost:8004/posts/${id}`,{
      method:'PATCH',
      headers:{

        'Content-Type':'Application/json',
        'Accept':'Application/json'
      },
      body:JSON.stringify({funny:!isFun})
      })
    .then(response=>response.json())
    .then(data=>{
    
      changeDisplayedPosts(data);
    })
    .catch(error=>console.log(error))
  }
  return (
  <div>
     <h3> 
      {title}</h3>
      <p>{content}</p>
      <p>
        <strong>By {author}</strong>
      </p>
      <button onClick={()=>setIsRead(!isRead)} >{isRead?'Mark as unread':'Mark as read'}</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={changeFun}>{isFun?'Remove from fun':'Add to fun,'}</button>
  </div>
  )
}

export default Posts
