// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs'
export default async function handler(req, res) {
  let data = await fs.promises.readdir("blogdata")
  data = data.slice(0, parseInt(req.query.count))
let myfiles;
let allBlogs = [];
for(let i = 0; i < 2 ; i++){
  const items = data[i]
   myfiles = await fs.promises.readFile((`blogdata/`+ items), "utf-8")
  allBlogs.push(JSON.parse(myfiles))
}
res.status(200).json(allBlogs)





}