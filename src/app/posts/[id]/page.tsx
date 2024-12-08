// 'use client';
// import React from 'react';
// import CommentSection from '@/components/commentSection';
// import AuthorCard from '@/components/AuthorCard';

// const posts = [
//   {
//     id: '1',
//     title: "HTML Block of WEB Development",
//     description: "Explore the foundation of HTML, the backbone of every web page.",
//     image: "../images/Slide1.jpg",
//   },
//   {
//     id: '2',
//     title: "CSS: Styling the Web",
//     description: "Dive into CSS and how it beautifies your web applications.",
//     image: "../images/Slide2.jpg",
//   },
//   {
//     id: '3',
//     title: "JavaScript: Bringing the Web to Life",
//     description: "Learn about JavaScript, the programming language of the web.",
//     image: "../images/Slide3.jpg",
//   },
//   {
//     id: '4',
//     title: "React: Building Modern UI",
//     description: "React makes building user interfaces a breeze. Find out how.",
//     image: "../images/Slide4.jpg",
//   },
//   {
//     id: '5',
//     title: "Next.js: The Future of Web Development",
//     description: "Discover Next.js and its capabilities for modern web apps.",
//     image: "../images/Slide5.jpg",
//   },
// ];

// export default function Post({ params }: { params: { id: string } }) {
//   const { id } = params;
//   const post = posts.find((p) => p.id === id);

//   if (!post) {
//     return (
//       <h2 className="text-2xl font-bold text-center mt-10">No post found</h2>
//     );
//   }

//   const renderParagraphs = (description: string) => {
//     return description.split('\n').map((para, index) => (
//       <p key={index} className="mt-4 text-justify">
//         {para.trim()}
//       </p>
//     ));
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-5">
//       <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center">
//         {post.title}
//       </h1>

//       {post.image && (
//         <img
//           src={post.image}
//           alt={post.title}
//           className="w-full h-auto rounded-md mt-4"
//         />
//       )}
//       <div className="mt-6 text-lg text-slate-700">
//         {renderParagraphs(post.description)}
//       </div>
//       <CommentSection postId={post.id} />
//       <AuthorCard />
//     </div>
//   );
// }
