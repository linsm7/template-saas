import { handleAuth } from "@/app/actions/handle-auth"
import { Button } from "@/app/components/ui/button"
import { auth } from "@/app/lib/auth"
import Link from "next/link"
import { redirect } from "next/navigation"

export default async function Dashboard() {
    const session = await auth()
    
    if(!session) {
        redirect("/login")
    }

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center gap-4">
            <h1 className="font-semibold">Dashboard</h1>
            <p className="text-sm">Bem vindo, {session?.user?.name}</p>

            {session && (
                <form action={handleAuth}>
                    <Button type="submit">
                        Sair
                    </Button>
                </form>
            )}

            <Link href="/payments" className="text-sm text-blue-600">
                Pagamentos
            </Link>
        </div>
    )
}