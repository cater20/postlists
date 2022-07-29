
import React,{useState} from 'react'

function NewPostForm(onSubmission) {
  
  const [postFormData,setPostData]= useState({title:"",content: "",author: ""});

function handleInputChange(event){
  setPostData({...postFormData,[event.target.name]:event.target.value})
}

function handleNewPost(event){
  event.preventDefault();
  fetch('http://localhost:8004/posts',{
    method:'POST',
    headers:{
      'Content-Type':'Application/json',
      'Accept':'Application/json'
    },
    body:JSON.stringify(postFormData)
  })
  .then(response=>response.json())
  .then(data=>{
    setPostData({title:"",content: "",author: ""})
    onSubmission(data);
  })
  .catch(error=>console.log(error))
}
  return (
    <div>
         <form className="new-post-form" onSubmit={handleNewPost}>
      <input placeholder="author" name='author' 
     value={postFormData.title} onChange={handleInputChange} />
      <input placeholder="Title" name='title'value={postFormData.title} onChange={handleInputChange}/>
      <textarea placeholder="Content" 
      rows={10} name="content" value={postFormData.content} onChange={handleInputChange}/>
      <input type="submit" value="Add your post" />
           </form>
    </div>
  )
}

export default NewPostForm
