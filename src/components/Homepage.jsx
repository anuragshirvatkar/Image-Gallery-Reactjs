import React, { useEffect } from 'react'
import { useState } from 'react'
import '../index.css'


function Homepage(){
    const [isOpen, setIsOpen] = React.useState(false);
    const [topDiv, setTopDiv] = useState(0);

    const dropdownItems = ['Nature', 'Cozy', 'Vintage','Travel', 'Music', 'Cars'];

    const toggleDropdown = () => {
    setIsOpen(!isOpen);
    };

    const showDivAtTop = (divId) => {
    setTopDiv(divId);
    };

    
return(
<>

<header className="fixed top-0 left-0 w-full h-25 bg-white shadow-lg z-50 rounded-bl-2xl rounded-br-2xl">
  <nav className="bg-blue-500 h-25 border-gray-200 px-4 lg:px-6 py-2.5 rounded-bl-2xl rounded-br-2xl">

    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <button
        className="relative right-50 bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-2xl  "
        onClick={toggleDropdown}
      >Categories
      </button>

      <ul className={`absolute top-3 ${isOpen ? 'block' : 'hidden'} border  border-blue-500 bg-white border mt-10 text-gray-800 pt-1 min-w-12 rounded-xl` }>
        {dropdownItems.map((item, index) => (
          <li key={index} className="hover:bg-gray-200 py-2  px-4" onClick={()=>showDivAtTop(index+1)}>
            {item}
          </li>
        ))}
      </ul> 
    </div>
    
  </nav>
</header>

<div className='py-7'>

    
        {(topDiv === 0 || topDiv===1) && <div className='flex flex-row gap-2 mx-5 my-1 px-0 overflow-x-auto whitespace-nowrap'>
        <img class="h-64 w-96 rounded-2xl" src="https://images.pexels.com/photos/1262803/pexels-photo-1262803.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image description"></img>
       
       <img class="h-64 w-96 rounded-2xl" src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image description"></img>
       
       <img class="h-64 w-96 rounded-2xl" src="https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image description"></img>
        </div>}
       
       
        {(topDiv === 0 || topDiv===2) && <div  className='flex flex-row gap-2 mx-0 my-1 overflow-x-auto whitespace-nowrap'>
        <img class="h-96 w-64 rounded-2xl" src="https://images.pexels.com/photos/2659629/pexels-photo-2659629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image description"></img>
       
       <img class="relative top-20 h-52 w-52 rounded-2xl" src="https://images.pexels.com/photos/14164521/pexels-photo-14164521.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image description"></img>
       
       <img class="h-96 w-64 rounded-2xl" src="https://images.pexels.com/photos/7552035/pexels-photo-7552035.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image description"></img>
       
       <img class="relative top-20 h-52 w-52 rounded-2xl" src="https://images.pexels.com/photos/14111068/pexels-photo-14111068.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image description"></img>
       
       <img class="h-96 w-64 rounded-2xl" src="https://images.pexels.com/photos/4503875/pexels-photo-4503875.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image description"></img>
        </div>}
       
       
        {(topDiv === 0 || topDiv===3) && <div className='flex flex-row gap-2 mx-5 my-1 px-0 overflow-x-auto whitespace-nowrap'>
        <img class="h-64 w-96 rounded-2xl" src="https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image description"></img>
       
       <img class="h-64 w-96 rounded-2xl" src="https://images.pexels.com/photos/92866/pexels-photo-92866.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image description"></img>
       
       <img class="h-64 w-96 rounded-2xl" src="https://images.pexels.com/photos/1095601/pexels-photo-1095601.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image description"></img>
        </div>}
       
       
        {(topDiv === 0 || topDiv===4) && <div className='flex flex-row gap-2 mx-0 my-1 overflow-x-auto whitespace-nowrap'>
        <img class="h-96 w-64 rounded-2xl" src="https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image description"></img>
       
       <img class="relative top-20 h-52 w-52 rounded-2xl" src="https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image description"></img>
       
       <img class="h-96 w-64 rounded-2xl" src="https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image description"></img>
       
       <img class="relative top-20 h-52 w-52 rounded-2xl" src="https://images.pexels.com/photos/2244330/pexels-photo-2244330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image description"></img>
       
       <img class="h-96 w-64 rounded-2xl" src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image description"></img>
        </div>}
       
        
        {(topDiv === 0 || topDiv===5) && <div className='flex flex-row gap-2 mx-5 my-1 px-0 overflow-x-auto whitespace-nowrap'>
        <img class="h-64 w-96 rounded-2xl" src="https://images.pexels.com/photos/1778810/pexels-photo-1778810.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image description"></img>
       
       <img class="h-64 w-96 rounded-2xl" src="https://images.pexels.com/photos/1588075/pexels-photo-1588075.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image description"></img>
       
       <img class="h-64 w-96 rounded-2xl" src="https://images.pexels.com/photos/2477357/pexels-photo-2477357.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image description"></img>
        </div>}
       
        {(topDiv === 0 || topDiv===6) && <div  className='flex flex-row gap-2 mx-0 my-1 overflow-x-auto whitespace-nowrap'>
        <img class="h-96 w-64 rounded-2xl" src="https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image description"></img>
       
       <img class="relative top-20 h-52 w-52 rounded-2xl" src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image description"></img>
       
       <img class="h-96 w-64 rounded-2xl" src="https://images.pexels.com/photos/1904076/pexels-photo-1904076.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image description"></img>
       
       <img class="relative top-20 h-52 w-52 rounded-2xl" src="https://images.pexels.com/photos/2127732/pexels-photo-2127732.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image description"></img>
       
       <img class="h-96 w-64 rounded-2xl" src="https://images.pexels.com/photos/5086489/pexels-photo-5086489.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image description"></img>
        </div>}
       
       
        
       
       </div>



</>

)
}
export default Homepage
