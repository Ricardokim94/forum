import { connectDB } from "@/util/database"

export default async function handler(req, res) {
    if (req.method == 'POST') {

        //빈값이면 저장 x 제어
        if (req.body.title == '') {
            return res.status(500).json('제목을 쓰세요')
        }
        if (req.body.content == '') {
            return res.status(500).json('내용을 쓰세요')
        }
        
        //성공이면 DB에 저장하기    
        const db = (await connectDB).db("forum")
        let result = await db.collection('post').insertOne(req.body)
        return res.status(200).redirect('/list') //성공되면 다시 홈페이지로 이동 함

    }
}