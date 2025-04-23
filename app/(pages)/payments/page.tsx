"use client"

import useMercadoPago from "@/app/hooks/useMercadoPago"
import { useStripe } from "@/app/hooks/useStripe"

export default function Login() {
    const { 
        createPaymentStripeCheckout, 
        createSubscriptionStripeCheckout, 
        handleCreateStripePortal,
    } = useStripe()

    const { createMercadoPagoCheckout } = useMercadoPago()

    return (
        <div className="h-screen flex flex-col gap-8 items-center justify-center">
            <h1 className="text-4xl font-semibold">Template Micro SaaS</h1>

            <div className="flex flex-col gap-2">
                <button 
                    className="border rounded px-4 py-2 cursor-pointer"
                    onClick={() => createPaymentStripeCheckout({
                        testId: "123",
                    })}
                >
                    Pagamento Stripe
                </button>

                <button 
                    className="border rounded px-4 py-2 cursor-pointer"
                    onClick={() => createSubscriptionStripeCheckout({
                        testId: "123"
                    })}
                >
                    Assinatura Stripe
                </button>

                <button 
                    className="border rounded px-4 py-2 cursor-pointer"
                    onClick={handleCreateStripePortal}
                >
                    Portal Stripe
                </button>

                <button 
                    className="border rounded px-4 py-2 cursor-pointer"
                    onClick={() => createMercadoPagoCheckout({
                        testId: "123",
                        userEmail: "teste@teste.com"
                    })}
                >
                    Pagamento Mercado Pago
                </button>
            </div>
        </div>
    )
}