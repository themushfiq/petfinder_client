'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import CommunityComponentCSS from '../../style/Home.module.css';
import QuestionsAndAnswers from '../../components/QuestionsAndAnswers';

const AboutPage: React.FC = () => {
  const router = useRouter();
  const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);
  const [billMonthly, setBillMonthly] = useState(false);
  console.log(billMonthly)
  return (
    <div>
      <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex justify-center'>About</h1>
      <p className='flex justify-center my-2 italic'>This is about page. Vai, before you modify please do knock me!!!! Happy codding vai.</p>
      <div className='flex justify-around my-2'>
        <div className='flex justify-around bg-slate-50 rounded-lg p-2 gap-2'>
          <p onClick={() => setBillMonthly(!billMonthly)} className={`${billMonthly ? '' : 'bg-slate-700 text-white rounded-lg'} py-2 px-4 text-black hover:cursor-pointer `}>Billed Monthly</p>
          <p onClick={() => setBillMonthly(!billMonthly)} className={`${!billMonthly ? '' : 'bg-slate-700 text-white rounded-lg'} py-2 px-4 text-black hover:cursor-pointer `}>Billed Yearly</p>
        </div>
      </div>


      {/* The another conten will appear heare.... */}

    </div>
  );
};

export default AboutPage;




{/* <div style={{
      borderRadius: "5px",
      backgroundImage: "linear-gradient(to right top, rgb(139, 92, 246), rgb(253, 186, 116))",
      backgroundSize: "100%",
      backgroundRepeat: "repeat",
    }} className='mt-[100px]'>
      <h1>This is prising page.</h1>
    </div> */}