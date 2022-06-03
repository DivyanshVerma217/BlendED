import React from 'react';
import { useRouter } from 'next/router';

function NavBar() {
    const router = useRouter();
  return (
    <div className='fixed top-0 bg-[#171515] w-screen p-4 text-[#FE595E] text-3xl font-bold cursor-pointer flex justify-between items-start px-8'>
        <h1 onClick={() => router.push('/')}>BlendED</h1>
    </div>
  )
}

export default NavBar;