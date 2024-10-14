import React, { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { edit } from '../features/blogSlice'

const EditF = () => {
    const [head,setHead]=useState("")
    const [content,setContent]=useState("")

    const {eid}=useParams()

    const blog=useSelector((state)=>state.Nblog.blogs);
    const data=blog.find((item)=>item.id===parseInt(eid))  //filterd the curent blog
   
    useEffect(()=>{
         setHead(data.title)
         setContent(data.content)
    },[])  //set the form to the blog content

    const dispatch=useDispatch();
    const nav=useNavigate()

    const handleSub=(e)=>{
        e.preventDefault();

        if (!head.trim()&&!content.trim()) return;
        
        dispatch(edit({id:eid , titleU:head , contentU:content})); //called edit action
        setContent('')
        setHead('')
        nav("/")
    }


  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Edit Blog
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

export default EditF