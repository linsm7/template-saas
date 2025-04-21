import { handleAuth } from "@/app/actions/handle-auth"
import { Button } from "@/app/components/ui/button"

export default function Login () {
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