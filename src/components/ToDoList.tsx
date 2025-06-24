import { Plus } from 'lucide-react'
import { useState } from 'react'


export default function Title() {
    const [tasksArr, setTasksArr] = useState([])
    const [addingTask, setAddingTask] = useState(false)

    function addTask() {
        //open modal
        //input name of task
        //add task to tasksArr
        //render task into ToDo list
    }

    function removeTask() {
        //
    }

    return (
        <>
            <div className="flex gap-4 justify-center items-center my-8">
                <div className="font-extrabold text-4xl">JUST DO IT! LIST</div>
                <div className="bg-red-500 rounded-full text-white cursor-pointer hover:bg-yellow-500 p-2 transition-colors">
                    <Plus size={45} strokeWidth={3} onClick={() => setAddingTask( prevState => !prevState)} />
                </div>
            </div>


            <div className="flex flex-col items-center">
                I'm the ToDo list
                <div>I'm ToDo task number 1</div>
            </div>
            {/* 
                

            */}
            {addingTask ?
                <div className='flex justify-center mt-12 fixed bottom-10 transform -translate-x-1/2 left-1/2 text-2xl md:text-3xl lg:text-4xl'>
                    <input
                        type='text' 
                        placeholder='Add task...' 
                        className='bg-[#F5EBDD] shadow-2xl rounded-md py-4 px-8 focus:outline-none focus:ring-2 focus:ring-yellow-400' 
                    />
                </div>
                :
                null
            }
        </>
    )
}