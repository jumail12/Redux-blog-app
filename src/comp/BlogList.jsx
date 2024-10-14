import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteB } from '../features/blogSlice'
import { useNavigate } from 'react-router-dom'

const BlogList = () => {
  const items = useSelector((state) => state.Nblog.blogs)
  const dispatch = useDispatch()

  //delete
  const Delete = (id) => {
    dispatch(deleteB(id))
  }

  const nav = useNavigate()

//   new blog
  const handleNav = () => {
    nav("/newblog")
  }

  //content 
  const contentB = (id) => {
    nav(`c/${id}`)
  }

  //edit
  const EditFun = (id) => {
    nav(`/edit/${id}`)
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Blog List</h1>

        <div className="flex justify-center mb-8">
          <button
            onClick={handleNav}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Create New
          </button>
        </div>

        {items.length > 0 ? (
          items.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md rounded-lg p-6 mb-4"
            >
              <h4
                className="text-xl font-semibold text-gray-800 cursor-pointer hover:text-blue-500"
                onClick={() => contentB(blog.id)}
              >
                {blog.title}
              </h4>
              <div className="mt-4 flex space-x-4">
                <button
                  onClick={() => Delete(blog.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
                <button
                  onClick={() => EditFun(blog.id)}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Edit
                </button>
              </div>
            </div>
          ))
        ) : (
          <h2 className="text-xl font-bold text-center text-gray-600">No blogs yet..!</h2>
        )}
      </div>
    </div>
  )
}

export default BlogList
