'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import CommunityComponentCSS from '../../style/Home.module.css';
import QuestionsAndAnswers from '../../components/QuestionsAndAnswers';

const PricingPage: React.FC = () => {
  const router = useRouter();
  const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);
  const [billMonthly, setBillMonthly] = useState(false);
  console.log(billMonthly)
  return (
    <div>
      <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex justify-center'>Subscription</h1>
      <p className='flex justify-center my-2 italic'>Cost-effective Plans for Bulk Email Service</p>
      <div className='flex justify-around my-2'>
        <div className='flex justify-around bg-slate-50 rounded-lg p-2 gap-2'>
          <p onClick={() => setBillMonthly(!billMonthly)} className={`${billMonthly ? '' : 'bg-slate-700 text-white rounded-lg'} py-2 px-4 text-black hover:cursor-pointer `}>Billed Monthly</p>
          <p onClick={() => setBillMonthly(!billMonthly)} className={`${!billMonthly ? '' : 'bg-slate-700 text-white rounded-lg'} py-2 px-4 text-black hover:cursor-pointer `}>Billed Yearly</p>
        </div>
      </div>

      {/* Changeable servce according to bill time duration... */}
      <div className='flex justify-around'>
        <div className='border border-slate-200 text-white bg-slate-700 p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 rounded-lg gap-y-3'>
          <p className='flex justify-center text-yellow-500'>Free</p>
          <h1 className='flex justify-center text-4xl my-4'>$00</h1>
          <p className='flex justify-center mb-2'>Email service Benifit</p>
          <p className='flex justify-center mb-2'>Email service Benifit </p>
          <p className='flex justify-center mb-2'>Email service Benifit </p>
          <p className='flex justify-center mb-2'>Email service Benifit </p>
          <p className='flex justify-center mb-2'>Email service Benifit </p>
          <div className='my-4 flex justify-center'>
            <button className={`btn border-0 btn-md w-[200px] normal-case ${CommunityComponentCSS.orderExtraItemButton}`}>Current Plan</button>
          </div>
        </div>
        <div className='border border-slate-200 text-white bg-slate-700 p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 rounded-lg gap-y-3'>
          <p className='flex justify-center text-red-400'>Premium</p>
          <h1 className='flex justify-center text-4xl my-4'>{billMonthly ? '$08' : '$10'} <span className='text-xl pt-3'>/month</span> </h1>
          <p className='flex justify-center mb-2'>Email service Benifit</p>
          <p className='flex justify-center mb-2'>Email service Benifit</p>
          <p className='flex justify-center mb-2'>Email service Benifit </p>
          <p className='flex justify-center mb-2'>Email service Benifit </p>
          <p className='flex justify-center mb-2'>Email service Benifit </p>
          <div className='my-4 flex justify-center'>
            <button className={`btn border-0 btn-md w-[200px] normal-case ${CommunityComponentCSS.orderExtraItemButton}`}>Upgrade Now</button>
          </div>
        </div>
        <div className='border border-slate-200 text-white bg-slate-700 p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 rounded-lg gap-y-3'>
          <p className='flex justify-center text-yellow-700 font-bold'>Professional</p>
          <h1 className='flex justify-center text-4xl my-4'>{billMonthly ? '$20' : '$25'} <span className='text-xl pt-3'>/month</span></h1>
          <p className='flex justify-center mb-2'>Email service Benifit </p>
          <p className='flex justify-center mb-2'>Email service Benifit </p>
          <p className='flex justify-center mb-2'>Email service Benifit </p>
          <p className='flex justify-center mb-2'>Email service Benifit </p>
          <p className='flex justify-center mb-2'>Email service Benifit </p>
          <div className='my-4 flex justify-center'>
            <button className={`btn border-0 btn-md w-[200px] normal-case ${CommunityComponentCSS.orderExtraItemButton}`}>Upgrade Now</button>
          </div>
        </div>



      </div>

      <QuestionsAndAnswers></QuestionsAndAnswers>



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