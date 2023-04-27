import * as Controllers from "./controllers"

export async function handlerGet (req, res){
    try {
        const booking= await Controllers.getAllBooking()
        return res.status(200).json(booking)
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export async function handlerPost(req, res) {
    const body = req.body;
    try {
      const postBooking = await Controllers.postNewBooking(body);
      return res.status(200).json(postBooking);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }