import React from 'react'
import { useSelector } from 'react-redux'
import {useParams} from "react-router-dom"

const BlogContent = () => {
    const items=useSelector((state)=>state.Nblog.blogs)
    const {id}=useParams();
  
    const blog=(items.length!==0)? items.find((blog)=>blog.id===parseInt(id)) : null;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
    <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
      <div className="mb-4">
        <h2 className="text-4xl font-bold text-gray-800">{blog.title}</h2>
      </div>

      <div className="mt-6">
        <h4 className="text-lg text-gray-700">{blog.content}</h4>
      </div>
    </div>
  </div>
  )
}

export default BlogContent