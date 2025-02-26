import { useState } from "react";

export default function Budgets({ onCancel, onAddTask }) {
    const [title, setTitle] = useState("");
    const [duration, setDuration] = useState("");
    const [date, setDate] = useState("");

    const handleAdd = () => {
        if (!title || !duration || !date)
             return; 
        
        
        const dateObj = new Date(date);
        const newTask = {
            month: dateObj.toLocaleString("en-US", { month: "short" }),
            day: dateObj.getDate(),
            title,
            duration: Number(duration),
        };

        onAddTask(newTask); 
    };

    return (
        <div className="  flex flex-col md:w-full md:flex-row  flex-wrap justify-center gap-4 bg-[#1a1a2e] rounded-xl p-4">
            <div className="w-full md:w-[30%]">
                <label className="block mb-1 text-gray-300 text-start text-lg font-bold">Title</label>
                <input  
                    type="text" 
                    className="w-full p-3 rounded-md border-none bg-gray-600 text-gray-300" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}/>
            </div>

            <div className="w-full md:w-[30%]">
                <label className="block mb-1 text-gray-300 text-start text-lg font-bold">Duration (Days)</label>
                <input 
                    type="number" 
                    className="w-full p-3 rounded-md border-none bg-gray-600 text-gray-300" 
                    value={duration} 
                    onChange={(e) => setDuration(e.target.value)}/>
            </div>

            <div className="w-full md:w-[30%]">
                <label className="block mb-1 text-gray-300 text-start text-lg font-bold">Date</label>
                <input 
                    type="date"  
                    className="w-full p-3 rounded-md border-none bg-gray-600 text-gray-300" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)}/>
            </div>

            <div className="w-full flex justify-center gap-8 mt-4">
                <button 
                    className="px-6 py-3 bg-blue-500 rounded-lg font-bold shadow-md w-32 text-[#c8e8fc] hover:bg-blue-600 transition"
                    onClick={handleAdd}>Add
                </button>
                <button 
                    className="px-6 py-3 bg-blue-500 rounded-lg shadow-md font-bold text-[#c8e8fc] w-32 hover:bg-blue-600 transition"
                    onClick={onCancel}> Cancel
                </button>
            </div>
        </div>
    );
}
