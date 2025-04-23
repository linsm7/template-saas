import { handleAuth } from "@/app/actions/handle-auth"
import { auth } from "@/app/lib/auth"
import { redirect } from "next/navigation"

export default async function Profile() {
    const session = await auth()
    
    if(!session) {
        redirect("/auth")
    }

    return (
        <div className="h-screen flex flex-col gap-8 items-center justify-center">
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-4xl font-semibold">Perfil</h1>
                <p className="text-sm">Bem vindo, {session?.user?.name}</p>
            </div>

            {session && (
                <form action={handleAuth}>
                    <button 
                        className="border border-red-600 text-red-600 rounded px-4 py-2 cursor-pointer"
                        type="submit"
                    >
                        Sair
                    </button>
                </form>
            )}
        </div>
    )
}