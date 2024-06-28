import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Detail(props){
    //DB에서 게시물 받아오기
    const db = (await connectDB).db("forum")
    let result = await db.collection('post').findOne({ _id : new ObjectId(props.params.id)
    //title 같은거는 중복있을수 있으니까 id 값으로 가져오는 것이 좋다.
    })
    console.log('show : ', props.params.id) //URL에 유저가 입력한 값 (detail/??? 뒤에 오는 값)
    return(
        <div>
            <h4>상세페이지</h4>
            <h4>{result.title}</h4> 
            <p>{result.content}</p>
        </div>
    )
}