import { useEffect, useState } from "react"
import { query, collection, orderBy, onSnapshot, Timestamp } from 'firebase/firestore'
import { db } from '../../firebaseConfig'

export default function Practica() {

    type Note = {
        id: string
        createdAt: Timestamp | null
        text: string
    }

    const [notes, setNotes] = useState<Note[]>([])

    useEffect(() => {
        const q = query(collection(db, "notes"), orderBy("createdAt", "desc"))

        onSnapshot(q, (querySnapshot) => {

            const notesArr: Note[] = []
            
            querySnapshot.docs.map( doc => {
                const note = {
                    id: doc.id,
                    createdAt: doc.data().createdAt,
                    text: doc.data().text
                }
                notesArr.push(note)
            })
            setNotes(notesArr)
        })
    }, [])

    const notesElement = notes.map(note => {
        return (
            <div>{note.text}</div>
        )
    })

    return (
        <>
         {notesElement}
        </>
    )
}

// 🔥 EJERCICIO 2 — Practicar onSnapshot() + orderBy()

// Objetivo:
// Crear un segundo componente (o archivo separado) cuyo único propósito sea escuchar en tiempo real los documentos de la colección "notes" que usaste en el ejercicio 1.

// ✔️ Requisitos mínimos

// Crea un componente simple, sin estilos.

// En un useEffect, crea un query() con:

// collection(db, "notes")

// orderBy("createdAt", "desc")

// Usa onSnapshot() para leer los documentos.

// Guarda los resultados en un estado local (useState).

// Muestra los textos de todas las notas debajo, solo un listado <div>.

// ⚠️ Importante

// No mezcles este componente con tu lista de “tasks”.

// Este componente NO añade notas, solo las lee.