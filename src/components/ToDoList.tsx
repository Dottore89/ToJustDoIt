import { Plus } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'


export default function Title() {
    const [tasksArr, setTasksArr] = useState([])
    const [addingTask, setAddingTask] = useState(false)

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if(addingTask && inputRef.current) {
            inputRef.current.focus()
        }
    }, [addingTask])

    function getRandomColor() {
        const colors = ['bg-green-500', 'bg-yellow-300', 'bg-red-500', 'bg-blue-500']
        const randomNumber = Math.floor(Math.random() * 4)
        return colors[randomNumber]
    }

    console.log(getRandomColor())

    function handleKeyDown(e) {
        if(e.key === 'Enter') {
            const value = (e.target as HTMLInputElement).value
            const valor = inputRef.current?.value
            const randomColor:number = Math.floor(Math.random() * 6)

            setTasksArr(prev => [
                ...prev,
                {
                    id: uuidv4(),
                    text: value,
                    color: getRandomColor()
                }
            ])

            if(inputRef.current) {
                inputRef.current.value = ''
            }

            // Ahora seguimos con lo siguiente:
            // Dentro de ese if, tienes que:

            // Conseguir el valor actual del input (¿cómo lo obtendrías? ¿De dónde?).

            // Añadir ese valor al array tasksArr usando setTasksArr (recuerda, nunca modificar directamente el estado con .push).

            // Limpiar el input para dejarlo listo para la siguiente tarea.

            // (Opcional) Cerrar el input poniendo setAddingTask(false).

            // Pregunta para ti:
            // ¿Cómo harías para leer el valor del input dentro de handleKeyDown?
            // ¿Tienes alguna idea de cómo capturarlo o necesitas que te oriente?
        }
    }

    function addTask() {
        //input name of task
        //add task to tasksArr
        //render task into ToDo list
    }

    function removeTask() {
        //
    }

    const tasksElement = tasksArr.map(task => (
        <div className={`px-42 py-8 w-5/6 h-24 cursor-pointer rounded-2xl font-semibold shadow-lg hover:bg-orange-400 hover:text-red-500 transition-all duration-300 ease-in-out hover:scale-105 hover:font-extrabold flex justify-center items-center capitalize ${task.color}`}>{task.text}</div>
    ))

    return (
        <>
            <div className="flex gap-4 justify-center items-center my-8">
                <div className="font-extrabold text-4xl">JUST DO IT! LIST</div>
                <div className="bg-red-500 rounded-full text-white cursor-pointer hover:bg-yellow-500 p-2 transition-colors">
                    <Plus 
                        size={45} 
                        strokeWidth={3} 
                        onClick={() => setAddingTask( prevState => !prevState)} />
                </div>
            </div>
            <div className="flex flex-col items-center gap-6">
                {tasksElement}
            </div>
            {addingTask ?
                <div className='flex justify-center mt-12 fixed bottom-10 transform -translate-x-1/2 left-1/2 text-2xl md:text-3xl lg:text-4xl'>
                    <input
                        type='text' 
                        placeholder='Add task...'
                        ref={inputRef}
                        onKeyDown={handleKeyDown}
                        className='bg-[#F5EBDD] shadow-2xl rounded-md py-4 px-8 focus:outline-none focus:ring-2 focus:ring-yellow-400' 
                    />
                </div>
                :
                null
            }
        </>
    )
}