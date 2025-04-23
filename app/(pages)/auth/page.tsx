import { handleAuth } from "@/app/actions/handle-auth"
import { auth } from "@/app/lib/auth"
import { redirect } from "next/navigation"
import { FcGoogle } from "react-icons/fc"

export default async function Auth() {
  const session = await auth()

  if(session) {
    redirect("/profile")
  }

  return (
    <div className="h-screen flex flex-col gap-8 items-center justify-center">
      <h1 className="text-4xl font-semibold">Autenticação</h1>

      <form action={handleAuth}>
        <button className="border rounded px-4 py-2 cursor-pointer flex items-center gap-2">
          <FcGoogle size={20}/>
          Continuar com Google
        </button>
      </form>
    </div>
  )
}