import { useState } from 'react'; 
import './App.css'; 
import image from "./assets/icon-arrow.svg" 
import calculateAge from './AgeCalculator';



function App() {
  const [day, setDay] = useState(12);
  const [month, setMonth] = useState(12);
  const [year, setYear] = useState(2020); 

  const [output, setOutput] = useState(0) 

  return (
    <>
     
     <div className="flex flex-col items-center justify-center md:px-72 md:py-40 px-4 pt-10 pb-72 bg-gray-100 ">
        <div className="relative flex flex-col bg-white rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-[200px] sm:w-[840px] sm:h-[651px] w-full">
            <div className="mt-10 mr-10 ml-10 rounded-lg" style={{height: 144}}>
              <form className='flex flex-row flex-wrap pt-6 gap-6'> 
                <div>
                <p className="font-PopinsB text-sm text-gray-500 py-2">
                DAY
                </p>
              
                <input required onChange={(event)=> setDay(event.target.value)} className='p-4 md:h-16 md:w-40 h-16 w-20 font-PopinsB text-black-600 text-2xl border rounded-md'>
                </input>
                </div>

                <div>
                <p className="font-PopinsB text-sm text-gray-500 py-2">
                MONTH
                </p>
              
                <input required onChange={(event)=> setMonth(event.target.value)} className='p-4 md:h-16 md:w-40 h-16 w-20 font-PopinsB text-black-600 text-2xl border rounded-md'>
                </input>
                </div>

                <div>
                <p className="font-PopinsB text-sm text-gray-500 py-2">
                YEAR
                </p>
              
                <input required onChange={(event)=> setYear(event.target.value)} className='p-4 md:h-16 md:w-40 h-16 w-24 font-PopinsB text-black-600 text-2xl border rounded-md'>
                </input>
                </div>
                
               
              </form>
              
            </div>
            <div className="flex items-center justify-start ml-10 mt-6 mr-10 bg-white bg-opacity-0" style={{height: 66}}>
                <div className="border-b-4 w-full mr-10"/>
            </div> 

            <button type="submit" 
                    onClick={()=> setTimeout(() => {
                      setOutput(calculateAge(day, month, year))
                      }, 500) } >
                <div className="flex items-center justify-center w-24 h-24 px-3 py-4 absolute bg-purple-500 rounded-full md:right-12 right-40 top-48"
                >
                  <img className="w-20 h-16 rounded-lg" src={image}/>
                </div>
            </button>
            
            <div className="rounded-lg p-10" style={{width: 649, height: 375, left: 53, top: 246,}}>
              <p className=" font-PopinsB md:text-7xl text-5xl italic font-bold text-purple-500 p-4 after:content-['years'] after:ml-6 after:text-black" >{(output.years >0?output.years:"--")}</p>
              <p className=" font-PopinsB md:text-7xl text-5xl italic font-bold text-purple-500 p-4 after:content-['months'] after:ml-6 after:text-black">{(output.months >0?output.months:"--")}</p>
              <p className=" font-PopinsB md:text-7xl text-5xl italic font-bold text-purple-500 p-4 after:content-['days'] after:ml-6 after:text-black">{(output.days >0?output.days:"--")}</p>
            </div>
        </div>
        <div className='relative -bottom-20 text-2xl' >
            Challenge by <span className="text-yellow-800"><a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a></span>. 
    Coded by <span className=' text-green-800'><a href="https://www.frontendmentor.io/profile/MNSM92" target="_blank">Nazmus Sakib</a></span>.
  </div>
      </div>

      
      
    </>
  )
}

export default App
