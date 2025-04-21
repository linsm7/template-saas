"use client"

import { Button } from "@/app/components/ui/button"
import useMercadoPago from "@/app/hooks/useMercadoPago"
import { useStripe } from "@/app/hooks/useStripe"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/app/components/ui/alert"

export default function Login () {
    const { 
        createPaymentStripeCheckout, 
        createSubscriptionStripeCheckout, 
        handleCreateStripePortal,
    } = useStripe()

    const { createMercadoPagoCheckout, isLoading, error } = useMercadoPago()

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center gap-4">
            <h1 className="font-semibold">Pagamentos</h1>

            {error && (
                <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Erro</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            <Button onClick={() => createPaymentStripeCheckout({
                testId: "123",
            })}
            >
                Criar Pagamento Stripe
            </Button>

            <Button onClick={() => 
            createSubscriptionStripeCheckout({
                testId: "123"
            })}
            >
                Criar Assinatura Stripe
            </Button>

            <Button 
                onClick={() => 
                createMercadoPagoCheckout({
                    testId: "123",
                    userEmail: "teste@teste.com"
                })}
                disabled={isLoading}
            >
                {isLoading ? "Processando..." : "Criar Pagamento MercadoPago"}
            </Button>

            <Button onClick={handleCreateStripePortal} variant="outline">
                Criar Portal
            </Button>
        </div>
    )
}