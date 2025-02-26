import { useState } from "react";
import Budgets from "./Budgets";

export default function ToDo({ onAddTask }) {
    const [showBudgets, setShowBudgets] = useState(false);

    return (
        <div className="w-full flex flex-col items-center gap-10 p-4 mb-6">
            {showBudgets ? (
                <Budgets 
                    onCancel={() => setShowBudgets(false)} 
                    onAddTask={(task) => {
                        onAddTask(task);
                        setShowBudgets(false); 
                    }} />
            ) 
            : (
                <>
                    <h2 className=" text-6xl text-[#dfe0df] font-bold md:text-4xl">To Do List</h2>
                    <button
                        className="bg-[#2972ee] text-[#c8e8fc] border-none rounded-xl w-44 h-12 font-bold hover:bg-blue-600  md:w-36 md:h-10 "
                        onClick={() => setShowBudgets(true)} >
                    
                        Add New Task
                    </button>
                </>
            )}
        </div>
    );
}
