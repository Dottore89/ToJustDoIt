// firestoreHelpers.ts
// Archivo de referencia para inicializar Firebase y practicar CRUD con Firestore

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// ⚙️ Configuración de Firebase (usa variables de entorno con prefijo VITE_)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// 🚀 Inicializar Firebase y Firestore
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// 🟢 Crear documento
export async function addTask(title: string) {
  try {
    const docRef = await addDoc(collection(db, "tasks"), {
      title,
      completed: false,
      createdAt: new Date(),
    });
    console.log("Documento creado con ID:", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error al añadir documento:", e);
  }
}

// 🔵 Leer documentos
export async function getTasks() {
  const querySnapshot = await getDocs(collection(db, "tasks"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

// 🟡 Actualizar documento
export async function toggleTask(id: string, completed: boolean) {
  const taskRef = doc(db, "tasks", id);
  await updateDoc(taskRef, { completed });
  console.log(`Tarea ${id} actualizada a completada=${completed}`);
}

// 🔴 Eliminar documento
export async function deleteTask(id: string) {
  await deleteDoc(doc(db, "tasks", id));
  console.log(`Tarea ${id} eliminada`);
}