import Link from "next/link"

export default function Home () {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-4">
      <h1 className="font-semibold">Landing Page</h1>

      <Link href="/login" className="text-sm text-blue-600">
        Login
      </Link>
    </div>
  )
}