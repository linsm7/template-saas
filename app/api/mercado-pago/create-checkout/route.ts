import { NextRequest, NextResponse } from "next/server"
import { Preference } from "mercadopago"
import mpClient from "@/app/lib/mercado-pago"

export async function POST(request: NextRequest) {
    const { testId, userEmail } = await request.json()
    
    try {
        const preference = new Preference(mpClient)

        const createPreference = await preference.create({
            body: {
                external_reference: testId,
                metadata: {
                    testId,
                },
                ...(userEmail && { payer: { email: userEmail } }),
                items: [
                    {
                        id: "",
                        description: "",
                        title: "",
                        quantity: 1,
                        unit_price: 1,
                        currency_id: "BRL",
                        category_id: "services",
                    }
                ],
                payment_methods: {
                    installments: 12,
                },
                auto_return: "approved",
                back_urls: {
                    success: `${process.env.NEXT_PUBLIC_APP_URL}/api/mercado-pago/pending?payment_id={payment_id}&external_reference={external_reference}`,
                    failure: `${process.env.NEXT_PUBLIC_APP_URL}/api/mercado-pago/pending?payment_id={payment_id}&external_reference={external_reference}`,
                    pending: `${process.env.NEXT_PUBLIC_APP_URL}/api/mercado-pago/pending?payment_id={payment_id}&external_reference={external_reference}`,
                },
            }
        })

        if (!createPreference.id) {
            return NextResponse.json(
                { error: "Failed to create checkout" }, 
                { status: 500 }
            )
        }

        return NextResponse.json({
            preferenceId: createPreference.id,
            initPoint: createPreference.init_point,
        })

    } catch (error) {
        console.error(error)
        return NextResponse.json(
            { error: "Failed to create checkout" }, 
            { status: 500 }
        )
    }
}