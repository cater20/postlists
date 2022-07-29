import React, { useEffect, useState } from "react";
import NewPostForm from "./components/NewPostForm";
import PostContainer from "./components/PostContainer";
import './App.css';
//import Posts from "./components/Posts";

function App() {
 const [posts,setPosts]=useState([])
 const [isDisplayed,setIsDisplayed]=useState(false)

  useEffect(()=>{
    fetch('http://localhost:3000/posts')
    .then((responce)=>responce.json())
    .then(posts=>setPosts(posts))
  },[])

 function handleClick(){
setIsDisplayed(isDisplayed=>isDisplayed=!isDisplayed)
 }

 function handleNewPost(newPost){
  setPosts([...posts,newPost])
}
  return (
    <div className="App">
      <div className="sidebar">
      <h1>Learn react</h1>
      <button onClick={handleClick} >{isDisplayed? "Show ":"hide "}new post form</button>
        {isDisplayed ? <NewPostForm onSubmission={handleNewPost}
        
        
        
        /> : null}
      </div>
      <PostContainer posts={posts}/>
    </div>
  );
}

export default App;
