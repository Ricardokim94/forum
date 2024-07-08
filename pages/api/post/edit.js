import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function (req, res) {
    if (req.method == 'POST') { //DB에 있는 data 수정
        let changeSet = {
            title: req.body.title,
            content: req.body.content
        } //request에서 _id값은 빼고 title/content 두개만 저장된 값 변수

        const db = (await connectDB).db("forum")
        let result = await db.collection('post').updateOne(
            { _id: new ObjectId(req.body._id) }, //수정할 document 찾아서
            { $set: changeSet } //값 바꾸기 = 바꿀 값!
        )
        return res.status(200).redirect('/list') //성공되면 다시 홈페이지로 이동 함
    }
} 