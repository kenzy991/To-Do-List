export default function YourList({ tasks }) {
    return (
        <div className="w-full flex flex-col items-center gap-1 p-4">
            <div className="flex justify-between w-full px-5 mb-4">
                <p className="text-[#9fa39f] text-xl font-bold ">Filter by mounth</p>
                <button className="  text-center border-none rounded-md bg-white w-20  h-8  text-base font-bold hover:bg-slate-200" >
                    All
                    </button>
            </div>
            <ul className="w-full flex flex-col items-center justify-center  gap-4">
                {tasks.map((task, index) => (
                    <li 
                        key={index} 
                        className="flex items-center  bg-[rgb(159,163,159,0.1)] text-gray-300 p-2 rounded-xl w-full shadow-md">
    
                        <div className="flex flex-col items-center bg-blue-500 text-[#c8e8fc]  rounded-xl border-solid border-[0.01rem] border-[#c8e8fc] ml-2  md: px-2 py-1">
                            <span className="text-base font-bold">{task.month}</span>
                            <span className="text-xs">{task.day}</span>
                        </div>
                        <div className="w-[80%]"><span className="text-xl mr-[40%] text-gray-400 font-bold md:text-lg">{task.title}</span></div>
                        <div  ><span className="bg-blue-500 text-[#c8e8fc]  rounded-xl  font-bold border-[0.01rem] text-base flex flex-end md:px-2 py-2 ">
                            {task.duration} Days
                        </span></div>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
}

