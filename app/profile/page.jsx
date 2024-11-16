"use client"
import React from 'react'
import { useState,useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Profile from '@components/Profile'

const MyProfile = () => {
    const router = useRouter();
   const {data:session} = useSession()
   const [posts, setPosts] = useState([])
   
    
      useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${session?.user.id}/posts`);
            const data = await response.json();
        
            setPosts(data);
          };
       if(session?.user.id) fetchPosts();
      }, []);
    
    const handleEdit = (post)=>{
        router.push(`/update-prompt?id=${post._id}`)
    }
    const handleDelete = async (post)=>{
      const hasConfirmed = confirm("are you sure to delete this prompt")
      if(hasConfirmed){
        try {
          await fetch(`/api/prompt/${post._id.toString()}`,{
            method:'DELETE'
          });
          const filterPosts = posts.filter((p)=>p._id !== post._id);
          setPosts(filterPosts);
        } catch (error) {
          
        }
      }
    }



  return (
     <Profile
      name= "My"
      desc="welcome to profile"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
     />
  )
}

export default MyProfile