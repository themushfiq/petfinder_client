'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const PricingPage: React.FC = () => {
  return (
      <div>
        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex justify-center my-4'>Questions and Answers</h1>
        <div className='px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
          <div className="collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-slate-700 text-white peer-checked:bg-slate-700 peer-checked:text-white">
              How does Mail Tym works?
            </div>
            <div className="collapse-content bg-slate-700 text-white peer-checked:bg-slate-700 peer-checked:text-white">
              <p>Mail Tym actualyy works for sending email to the multiple user you may have in your business or family. So, Mail Tym helps you to send announcement to them.</p>
            </div>
          </div>



          
          <div className="collapse my-4">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-slate-700 text-white peer-checked:bg-slate-700 peer-checked:text-white">
              Is there any limit to send the emails?
            </div>
            <div className="collapse-content bg-slate-700 text-white peer-checked:bg-slate-700 peer-checked:text-white">
              <p>Yes, for free plan you can have some of our benifits. To have more benifits you will need to pay.</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default PricingPage;




{/* <div style={{
      borderRadius: "5px",
      backgroundImage: "linear-gradient(to right top, rgb(139, 92, 246), rgb(253, 186, 116))",
      backgroundSize: "100%",
      backgroundRepeat: "repeat",
    }} className='mt-[100px]'>
      <h1>This is prising page.</h1>
    </div> */}