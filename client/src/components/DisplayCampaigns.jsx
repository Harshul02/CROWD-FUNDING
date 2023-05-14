import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import "./navbar.css";


import FundCard from './FundCard';
import { loader } from '../assets';


const DisplayCampaigns = ({ title, isLoading, campaigns,Search,categoryname}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAllcategory = location.pathname === '/dashboard';
  const filteredCampaigns = campaigns.filter((campaign) =>{
  
      return campaign.title.toLowerCase().includes(Search.toLowerCase())
    

  });
  const campaign1 = campaigns.filter((campaign)=>{
    return campaign.category==="Environmental Causes" && campaign.title.toLowerCase().includes(Search.toLowerCase())
  })
  
  const campaign2 = campaigns.filter((campaign)=>{
    return  campaign.category === "Education and Learning" && campaign.title.toLowerCase().includes(Search.toLowerCase())
  })
  
  const campaign3 = campaigns.filter((campaign)=>{
    return  campaign.category === "Health and Medical Expenses" && campaign.title.toLowerCase().includes(Search.toLowerCase())
  })
  
  const campaign4 = campaigns.filter((campaign)=>{
    return  campaign.category === "Humanitarian Aid and Disaster Relief" && campaign.title.toLowerCase().includes(Search.toLowerCase())
  })
  
  const campaign5 = campaigns.filter((campaign)=>{
    return  campaign.category === "Personal and Family Emergencies" && campaign.title.toLowerCase().includes(Search.toLowerCase())
  })
  
  const campaign6 = campaigns.filter((campaign)=>{
    return  campaign.category === "Social Causes and Activism" && campaign.title.toLowerCase().includes(Search.toLowerCase())
  })
  
  const campaign7 = campaigns.filter((campaign)=>{
    return  campaign.category === "Technology and Innovation" && campaign.title.toLowerCase().includes(Search.toLowerCase())
  })
  
  const campaign8 = campaigns.filter((campaign)=>{
    return  campaign.category === "Wildlife and Animal Conservation" && campaign.title.toLowerCase().includes(Search.toLowerCase())
  })
  
  const campaign9 = campaigns.filter((campaign)=>{
    return  campaign.category === "Others" && campaign.title.toLowerCase().includes(Search.toLowerCase())
  })
  





  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign})
  }
  
  return (

    
    
    <div className="ml-0 sm:ml-20">
      {isLoading &&(
         <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
      )}
      :
      { !isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            No Campaigns to Display
          </p>
        )}
      :
      
 
{!isLoading && isAllcategory && filteredCampaigns.length>0 &&(
  
         <div id='all' >
      
      <h1 className="font-epilogue font-semibold text-18 text-white text-left">
  {title}
</h1>


      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        
      

        

        {!isLoading && campaigns.length > 0 && filteredCampaigns.map((campaign) => <FundCard 
          key={campaign.id}
          {...campaign}
          handleClick={() => handleNavigate(campaign)}
        />)}
   
      </div>  
      </div>
)}


{!isLoading && !isAllcategory && campaign1.length>0 &&(
    
      <div>
        {isLoading &&(
         <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
      )}
      : 
      { !isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            No Campaigns To Display
          </p>
        )} 
        <h1 className="font-epilogue font-semibold text-[18px]  text-white text-left">Environmental Causes</h1>

    <div className="flex flex-wrap mt-[20px] gap-[26px]">
 
  { campaign1.map((campaign) => <FundCard 
    key={campaign.id}
    {...campaign}
    handleClick={() => handleNavigate(campaign)}
  />)}
             
</div>
</div>

)}

{!isLoading && !isAllcategory && campaign2.length>0 &&(
<div>
{isLoading &&(
         <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
      )}
      :
      { !isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
             No Campaigns To Display
          </p>
        )}
  
<h1 className="font-epilogue font-semibold text-[18px] text-white text-left">Education and Learning</h1>

<div className="flex flex-wrap mt-[20px] gap-[26px]">
 
   {campaign2.map((campaign) => <FundCard 
    key={campaign.id}
    {...campaign}
    handleClick={() => handleNavigate(campaign)}
  />)}
   
</div>

</div>
)}

{!isLoading && !isAllcategory && campaign3.length>0 &&( 
<div >
{isLoading &&(
         <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
      )}
      :
      { !isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
             No Campaigns To Display
          </p>
        )}

<h1 className="font-epilogue font-semibold text-[18px] text-white text-left">Health and Medical Expenses</h1>

<div className="flex flex-wrap mt-[20px] gap-[26px]">
 
  {campaign3.map((campaign) => <FundCard 
    key={campaign.id}
    {...campaign}
    handleClick={() => handleNavigate(campaign)}
  />)}
     
</div>

</div>
)}

{!isLoading && !isAllcategory && campaign4.length>0 &&(
<div >
{isLoading &&(
         <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
      )}
      :
      { !isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
             No Campaigns To Display
          </p>
        )}
<h1 className="font-epilogue font-semibold text-[18px] text-white text-left">Humanitarian Aid and Disaster Relief</h1>

<div className="flex flex-wrap mt-[20px] gap-[26px]">
  

  
  
   { campaign4.map((campaign) => <FundCard 
    key={campaign.id}
    {...campaign}
    handleClick={() => handleNavigate(campaign)}
  />)}
     
</div>

</div>

)}

{!isLoading && !isAllcategory && campaign5.length>0 &&(

<div >
{isLoading &&(
         <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
      )}
      :
      { !isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
             No Campaigns To Display
          </p>
        )}




<h1 className="font-epilogue font-semibold text-[18px] text-white text-left">Personal and Family Emergencies </h1>

<div className="flex flex-wrap mt-[20px] gap-[26px]">
  
  
   { campaign5.map((campaign) => <FundCard 
    key={campaign.id}
    {...campaign}
    handleClick={() => handleNavigate(campaign)}
    
  />)}
     
</div>

</div>
)}

{!isLoading && !isAllcategory && campaign6.length>0 &&(
<div >
{isLoading &&(
         <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
      )}
      :
      { !isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
             No Campaigns To Display
          </p>
        )}
<h1 className="font-epilogue font-semibold text-[18px] text-white text-left">Social Causes and Activism </h1>

<div className="flex flex-wrap mt-[20px] gap-[26px]">
  {isLoading && (
    <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
  )}

  {!isLoading && campaigns.length === 0 && (
    <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
      You have not created any campigns yet
    </p>
  )}
  
   {!isLoading && campaigns.length > 0 && campaign6.map((campaign) => <FundCard 
    key={campaign.id}
    {...campaign}
    handleClick={() => handleNavigate(campaign)}
   
  />)}
     
</div>
</div>

)}

{!isLoading && !isAllcategory && campaign7.length>0 &&(
<div >
{isLoading &&(
         <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
      )}
      :
      { !isLoading && campaign7.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            No Campaigns To Display
          </p>
        )}

<h1 className="font-epilogue font-semibold text-[18px] text-white text-left">Technology and Innovation </h1>

<div className="flex flex-wrap mt-[20px] gap-[26px]">
 
  
   {campaign7.map((campaign) => <FundCard 
    key={campaign.id}
    {...campaign}
    handleClick={() => handleNavigate(campaign)}
  />)}
    
  

</div>

</div>
)}

{!isLoading && !isAllcategory && campaign8.length>0 &&(
<div >
{isLoading &&(
         <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
      )}
      :
      { !isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            No Campaigns To Display
          </p>
        )}

<h1 className="font-epilogue font-semibold text-[18px] text-white text-left">Wildlife and Animal Conservation </h1>

<div className="flex flex-wrap mt-[20px] gap-[26px]">
 
  
   {campaign8.map((campaign) => <FundCard 
    key={campaign.id}
    {...campaign}
    handleClick={() => handleNavigate(campaign)}
  />)}
    
</div>

</div>
)}

{!isLoading && !isAllcategory && campaign9.length>0 &&(
<div id='others'>
{isLoading &&(
         <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
      )}
      :
      { !isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
             No Campaigns To Display
          </p>
        )}

<h1 className="font-epilogue font-semibold text-[18px] text-white text-left">Others </h1>

<div className="flex flex-wrap mt-[20px] gap-[26px]">
 
  
   {campaign9.map((campaign) => <FundCard 
    key={campaign.id}
    {...campaign}
    handleClick={() => handleNavigate(campaign)}
  />)}
    
</div>

</div>
)}

</div>


   



    

    
  )
}

export default DisplayCampaigns