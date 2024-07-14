import fs from 'fs'

export default async function handler(req, res) {
    if(req.method === "POST"){
        fs.writeFile("contactdata/1.json", JSON.stringify(req.body), ()=>{})
        return res.status(200).json(req.body)
    }
    res.status(400).json({err: "Sorry this is not a valid req"})
}