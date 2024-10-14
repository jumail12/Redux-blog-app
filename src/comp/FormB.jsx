import React, { useState } from 'react'
import { addB,deleteB } from '../features/blogSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const FormB = () => {
    const [head,setHead]=useState("")
    const [content,setContent]=useState("")

    const dispatch=useDispatch();
    const nav=useNavigate()

  

    const handleSub=(e)=>{
        e.preventDefault();

        if (!head.trim()&&!content.trim()) return;
        dispatch(addB({id:Date.now() , title:head , content:content}));
        setContent('')
        setHead('')
        nav("/")
    }

    
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create New Blog
        </h1>

        <form onSubmit={handleSub} className="space-y-6">
          {/* Title Input */}
          <div>
            <label htmlFor="title" className="block text-gray-700 text-sm font-semibold mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Heading"
              value={head}
              onChange={(e) => setHead(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Content Textarea */}
          <div>
            <label htmlFor="content" className="block text-gray-700 text-sm font-semibold mb-2">
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="6"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormB