"use client"

import { redirect } from "next/navigation"
import { Button } from "@/app/components/ui/button"

export default function Home () {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-4">
      <h1 className="font-semibold">Landing Page</h1>

      <Button 
        type="submit" 
        onClick={redirect("/login")}
      >
        Autenticação
      </Button>
    </div>
  )
}