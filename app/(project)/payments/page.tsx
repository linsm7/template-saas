"use client"

import { Button } from "@/app/components/ui/button"
import useMercadoPago from "@/app/hooks/useMercadoPago"
import { useStripe } from "@/app/hooks/useStripe"

export default function Login () {
    const { 
        createPaymentStripeCheckout, 
        createSubscriptionStripeCheckout, 
        handleCreateStripePortal,
    } = useStripe()

    const { createMercadoPagoCheckout } = useMercadoPago()

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center gap-4">
            <h1 className="font-semibold">Pagamentos</h1>

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

            <Button onClick={() => 
            createMercadoPagoCheckout({
                testId: "123",
                userEmail: "test@test.com"
            })}
            >
                Criar Pagamento MercadoPago
            </Button>

            <Button onClick={handleCreateStripePortal} variant="outline">
                Criar Portal
            </Button>
        </div>
    )
}