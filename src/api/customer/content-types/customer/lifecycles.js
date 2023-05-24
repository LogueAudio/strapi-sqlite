module.exports = {
    async afterCreate(event) {
        const {result} = event;
        try {
            await strapi.plugins['email'].services.email.send(
                {
                    "from":{
                        "email":"info@logue.audio"
                    },
                    "personalizations":[
                        {
                            "to":[
                                {
                                    "email": result.email
                                }
                            ],
                            "dynamic_template_data":{
                                "name": result.name,
                                "address": result.address,
                                "postalCode": result.postalCode,
                                "city": result.city,
                                "phoneNumber": result.phoneNumber,
                            }
                        }
                    ],
                    "template_id":"d-353bf9aaa94746a7baefa573574ef171"
                }
            )
        } catch (err){
            console.log(err);
        }
    }
}

