import mercadopago from "mercadopago";

export const createOrder = async (req, res)=> {
    
    mercadopago.configure({
        access_token:
        "TEST-6528466702491042-070218-a6944987738c3d2c42e4642b6bf9eeec-1413340650",
    })    
    
    const result=  await mercadopago.preferences.create({
        items: [
            {
                title:"laptop",
                unit_price: 500,
                currency_id: "MXN",
                quantity: 1,
            },
        ],

        back_urls: {
            success: "http://localhost:4000/success",
            failure: "http://localhost:4000/failure",
            pending: "http://localhost:4000/pending",
        },

        notification_url: "https://7976-189-219-63-130.ngrok.io/webhook",
    });

    console.log(result);

    res.send(result.body);
};

export const receiveWebhook = (req, res)=> {
    console.log(req.query);

    res.send("webhook");
};