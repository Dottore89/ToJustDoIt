import { Plus } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { db } from '../../firebaseConfig'
import { addDoc, collection, FieldValue, serverTimestamp, onSnapshot, query, orderBy } from 'firebase/firestore'


export default function Title() {
    /*/ Types /*/
    type Task = {
        id: string
        text: string
        color: string
        createdAt: FieldValue
    }

    /*/ States /*/
    // Array para almacenar las tareas
    const [tasksArr, setTasksArr] = useState<Task[] | []>([])

    // Estado [¿estoy añadiendo una tarea en este momento?]
    const [addingTask, setAddingTask] = useState(false)

    /*/ Refs /*/
    // Referencia a elemento input del DOM (TypeScript) valor inicial "null"
    const inputRef = useRef<HTMLInputElement>(null)

    /*/ useEffects /*/
    // Si addingTask es true y el inputRef existe en el DOM, ocurre el focus sobre este último
    useEffect(() => {
        if(addingTask && inputRef.current) {
            inputRef.current.focus()
        }
    }, [addingTask])

    // Leer las tareas en la base de datos una sola vez al montar el componente y añadirlas a tasksArr (onSnapshot)
    // usamos orderBy para ordenar el query por "createdAt", "desc"
    useEffect(() => {
        const q = query(collection(db, "tasks"), orderBy("createdAt", "desc"))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const tasksData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
            })) as Task[]
            setTasksArr(tasksData)
        })

        return () => unsubscribe()
    }, [])

    /*/ Functions /*/
    // Generar y devolver un color random para las tarjetas
    function getRandomColor() {
        const colors = ['bg-green-500', 'bg-yellow-300', 'bg-red-500', 'bg-blue-500']
        const randomNumber = Math.floor(Math.random() * 4)
        return colors[randomNumber]
    }

    // Crear el objeto task y guardarlo en firestore con addDoc()
    async function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if(e.key === 'Enter') {
            const value = (e.target as HTMLInputElement).value.trim()

            const newTask: Task = {
                id: uuidv4(),
                text: value,
                color: getRandomColor(),
                createdAt: serverTimestamp()
            }

            // Guardar en Firestore
            await addDoc(collection(db, "tasks"), newTask)

            // Actualizar estado local
            setTasksArr(prev => [...prev, newTask])

            // Limpiar input
            if (inputRef.current) {
                inputRef.current.value = '';
            }
        }
    }

    // Pendiente
    function removeTask() {
        //
    }

    const tasksElement = tasksArr.map(task => (
        <div className={`px-42 py-8 w-5/6 h-24 cursor-pointer rounded-2xl font-semibold shadow-lg hover:bg-orange-400 hover:text-red-500 transition-all duration-300 ease-in-out hover:scale-105 hover:font-extrabold flex justify-center items-center capitalize ${task.color}`}>{task.text}</div>
    ))

    /*/ Render /*/
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

// 🔥 EJERCICIO 1 — Practicar addDoc() + collection()

// Objetivo:
// Crear una función independiente que añada una “nota” a una colección “notes” en Firestore.
// (No es una task, es otra colección distinta para practicar).

<<<<<<< Updated upstream
// La función debe recibir un texto como parámetro.

// Debe generar un objeto con:
// text
// createdAt: serverTimestamp()
// id: uuidv4()

// Debe hacer addDoc(collection(...), objeto)
// Debes llamarla manualmente (por ejemplo, con un botón de prueba).
// ❗ No necesitas mostrar nada en pantalla aún.
// Solo crear la función y verificar en Firestore que se añade.
// Cuando acabes este ejercicio, me dices “ejercicio 1 hecho” y te doy el ejercicio 2, que será practicar onSnapshot() por separado.

function addNote(text:string) {
=======
// ✔️ Requisitos mínimos

// La función debe recibir un texto como parámetro.

// Debe generar un objeto con:

// text

// createdAt: serverTimestamp()

// id: uuidv4()

// Debe hacer addDoc(collection(...), objeto)

// Debes llamarla manualmente (por ejemplo, con un botón de prueba).

// ❗ No necesitas mostrar nada en pantalla aún.

// Solo crear la función y verificar en Firestore que se añade.

// Cuando acabes este ejercicio, me dices “ejercicio 1 hecho” y te doy el ejercicio 2, que será practicar onSnapshot() por separado.

// ¿Listo?

function addNote(text: string) {
>>>>>>> Stashed changes
    const note = {
        text: text,
        createdAt: serverTimestamp(),
        id: uuidv4()
    }
<<<<<<< Updated upstream
    addDoc(collection(db, "notes"), note)
}

addNote('ayyy lmao')
=======
    await addDoc(collection(db, "notes"), note)
}

addNote("Funciona!")
>>>>>>> Stashed changes
