import * as Methods from "../methods"
import * as Handlers from "./handlers"

export default async function handlerImages (req, res){
    const method = req.method
    switch(method){
        case Methods.GET:
            return await Handlers.handlerGet(req, res)
        case Methods.POST:
            return await Handlers.handlerPost(req, res)

        default:
            res.status(400).json({
                message:"400 Bad Request : invalid method",
            })
    
    }
}