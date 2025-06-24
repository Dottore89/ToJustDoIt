import { Plus } from 'lucide-react'

export default function Title() {
    return (
        <div className="flex gap-4 justify-center items-center my-8 border-3">
            <div className="font-extrabold text-4xl">TO-JUST-DO LIST</div>
            <div className="bg-red-500 rounded-full text-white cursor-pointer hover:bg-yellow-500 p-2 transition-colors">
                <Plus size={45} strokeWidth={3} />
            </div>
        </div>
    )
}