import React from 'react';
import BlogCard from "@/components/BlogCard";

export default function Mega() {
  const posts = [
    {
      id: '1',
      title: "HTML Block of WEB Development",
      description: "Explore the foundation of HTML, the backbone of every web page.",
      date: "2024-11-28",
      imageUrl: "../images/Slide1.jpg",
    },
    {
      id: '2',
      title: "CSS: Styling the Web",
      description: "Dive into CSS and how it beautifies your web applications.",
      date: "2024-11-29",
      imageUrl: "../images/Slide2.jpg",
    },
    {
      id: '3',
      title: "JavaScript: Bringing the Web to Life",
      description: "Learn about JavaScript, the programming language of the web.",
      date: "2024-11-30",
      imageUrl: "../images/Slide3.jpg",
    },
    {
      id: '4',
      title: "React: Building Modern UI",
      description: "React makes building user interfaces a breeze. Find out how.",
      date: "2024-12-01",
      imageUrl: "../images/Slide4.jpg",
    },
    {
      id: '5',
      title: "Next.js: The Future of Web Development",
      description: "Discover Next.js and its capabilities for modern web apps.",
      date: "2024-12-02",
      imageUrl: "../images/Slide5.jpg",
    },
  ];

  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
        Explore the World of AI and Technology
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <BlogCard post={post} isDarkBackground={index % 2 === 0} />
          </div>
        ))}
      </div>
    </div>
  );
}
