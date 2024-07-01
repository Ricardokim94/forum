import { connectDB } from "@/util/database"

export default async function handler(req, res) {
    if (req.method == 'POST') {

        //빈값이면 저장 x 제어
        if (req.body.ID == '') {
            return res.status(500).json('아이디를 쓰세요')
        }
        if (req.body.PW == '') {
            return res.status(500).json('비밀번호를 쓰세요')
        }
        
        // 성공이면 DB에 저장하기    
        const db = (await connectDB).db("forum")
        let result = await db.collection('User').insertOne(req.body)
        return res.status(200).redirect('/userList') //성공되면 다시 홈페이지로 이동 함
    }
}
