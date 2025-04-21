import { handleAuth } from "@/app/actions/handle-auth"
import { Button } from "@/app/components/ui/button"
import { auth } from "@/app/lib/auth"
import { redirect } from "next/navigation"

export default async function Login () {
    const session = await auth()
    
    if(session) {
        redirect("/dashboard")
    }

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center gap-4">
            <h1 className="font-semibold">Login</h1>

            <form action={handleAuth}>
                <Button type="submit">
                    Continuar com Google
                </Button>
            </form>
        </div>
    )
}