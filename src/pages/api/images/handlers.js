import * as Controllers from "./controllers"

export async function handlerGet (req, res){
    try {
        const allImages= await Controllers.getAllImages()
        return res.status(200).json(allImages)
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export async function handlerPost(req, res) {
    const body = req.body;
    try {
      const postImage = await Controllers.postNewImage(body);
      return res.status(200).json(postImage);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }