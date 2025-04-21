import { useRouter } from "next/navigation"
import { initMercadoPago } from "@mercadopago/sdk-react"
import { useEffect, useState } from "react"

export default function useMercadoPago() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (!process.env.NEXT_PUBLIC_MERCADO_PAGO_PUBLIC_KEY) {
            setError("Chave pública do MercadoPago não configurada")
            return
        }
        initMercadoPago(process.env.NEXT_PUBLIC_MERCADO_PAGO_PUBLIC_KEY)
    }, [])

    async function createMercadoPagoCheckout({
        testId,
        userEmail
    }: {
        testId: string,
        userEmail: string
    }) {
        try {
            setIsLoading(true)
            setError(null)

            const response = await fetch("/api/mercado-pago/create-checkout", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    testId,
                    userEmail,
                })
            })

            if (!response.ok) {
                throw new Error("Falha ao criar checkout")
            }

            const data = await response.json()

            if (!data.initPoint) {
                throw new Error("URL de checkout não encontrada")
            }

            router.push(data.initPoint)

        } catch (error) {
            console.error(error)
            setError(error instanceof Error ? error.message : "Ocorreu um erro ao processar o pagamento")
        } finally {
            setIsLoading(false)
        }
    }

    return {
        createMercadoPagoCheckout,
        isLoading,
        error
    }
}