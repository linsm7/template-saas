"use client"

import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  return (
    <div className="h-screen flex flex-col gap-8 items-center justify-center">
      <h1 className="text-4xl font-semibold">Template SaaS</h1>

      <div className="flex flex-col gap-2">
        <button 
          className="border rounded px-4 py-2 cursor-pointer"
          onClick={() => router.push("/auth")}
        >
          Autenticação
        </button>

        <button 
          className="border rounded px-4 py-2 cursor-pointer"
          onClick={() => router.push("/profile")}
        >
          Perfil
        </button>
      </div>
    </div>
  )
}