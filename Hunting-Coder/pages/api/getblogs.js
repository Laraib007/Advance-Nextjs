import fs from 'fs'
export default async function handler(req, res) {
    fs.readFile((`blogdata/${req.query.slug}.json`), "utf-8", (err, data) => {
        if (err) {
            res.status(500).json({ err: "No such blog found" })
        }
        res.status(200).json(JSON.parse(data))
    })
}

