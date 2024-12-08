
import React from 'react';
import Navbar from '@/components/Navbar';
import AuthorCard from '@/components/AuthorCard';
import Mega from "@/components/Mega";
import Feature from "@/components/Feature";
import button from '@/components/ui/button';

export default function Home() {
  return (
    
<div >
 My Dynamic Blog
  <Navbar />
  <Feature />
  < Mega />
  <AuthorCard />
  <button />
</div>
  );
}
