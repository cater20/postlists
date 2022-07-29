

import React,{useState} from 'react'
import Post from './Post'


function PostContainer({posts,setPosts}) {
  const [selectedCategory,setSelectedCategory]= useState('All')

function handleCategoryChange(event){
  setSelectedCategory(event.target.value);
}

function changeDisplayedPosts(data){
setPosts(posts.map(post=>{
  if(post.id === data.id)return data
  return post;
}));
}

function deleteApost(id){
setPosts(posts.filter(post=>post.id !== id));
}

const filteredPosts = posts.filter(post=>{
  if(selectedCategory=== 'All') return true;
  return post.favourite === true && 
  selectedCategory === 'favourite';
});

  return (
    <div className='post-container'>
 <select onChange={handleCategoryChange} value={selectedCategory}>
       <option value='All'>All Posts</option>
       <option value='funny'>Funny</option>
      </select>
{filteredPosts.map(post=>(<Post key={post.id}  title={post.title}
  content={post.content} author={post.author}isFun={post.funny}
   changeDisplayedPosts={changeDisplayedPosts} 
   deleteApost={deleteApost} />))}
    </div>
  )
}

export default PostContainer;
