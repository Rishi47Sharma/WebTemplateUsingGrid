import {allContent} from './data'
function App() {
  const renderStudent = allContent.map((elm,i)=>{
    return(<div className=' rounded-md bg-blue-200   border border-solid h-[15vh] ' key={i}>
     {elm.name}
     <div className=' grid grid-cols-6 grid-rows-3 px-2  '> 
     <div className=' row-start-3 row-end-4 col-start-6 col-end-7 bg-yellow-100 border border-solid rounded-full '>em</div></div>
    </div>)
  })

  return (
    <>
     <div className=" text-center  w-full bg-blue-500 h-[10%] p-4  ">
      <div>Header with logo</div>
      </div>
     
      <div className="grid grid-cols-11 text-center lg:grid-rows-5 grid-rows-4 p-2 gap-2 ">
      <div className=" lg:h-[80vh] bg-gray-500   row-start-1 row-end-2 col-start-1 col-end-12  lg:col-start-1 lg:col-end-9 lg:row-start-1 rounded-md lg:row-end-6"><div className='py-2'>Intstructional video player</div></div>
      <div className=" lg:col-start-9 lg:col-end-13 lg:row-start-1 lg:row-end-6 row-start-2 row-end-5 col-start-1 col-end-12 rounded-md  bg-blue-50"> <div className='py-2'>live Video of students listening</div>
     <div className=' grid grid-cols-2 grid-rows-4 p-2 gap-2 mt-10 '>
     {renderStudent}
      </div>
      
      </div>
     </div>
   
      
      <div className=" text-center  w-full bg-blue-500 h-[10%] p-4     ">
      <div>Footer with logo</div>
      </div>
    
     
    </>
  )
}

export default App
