import React from 'react'

export default function AuthorCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
  
  <div className="flex items-center animation-fadeIn">
  
  <img 
  className="w-16 rounded-full mr-4 object-cover border-2 border-red-500"
  src="../image.jpg"
  alt="Author Image"
  />
  
  <div className="text-lg font-bold" >Tabinda
    <p className="text-slate-500">Electronic Engineer | SEO Expert | Web Developer |</p>

  </div>
  
  </div>
 <p className="mt-4 text-black leading-relaxed">
  Tabinda is an experienced electronics engineer with a passion for web development and sharin knowledge though articles
 </p>

<div className="mt-4 flex space-x-3">
  <a
  href="www.Twitter.com"
  className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">

twitter
</a>


<a
  href="www.linkedin.com"
  className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">
Linkedin
</a>


<a
  href="www.Github.com"
  className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">

Github
</a>


  </div>



  </div>
  )
}
