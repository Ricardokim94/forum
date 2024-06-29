import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";


export default async function Detail(props){
    //DB에서 게시물 받아오기
    const db = (await connectDB).db("forum");
    let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) });

    console.log('show : ', props.params.id); //URL에 유저가 입력한 값 (detail/??? 뒤에 오는 값)
    
    return (
        <div className="detail-container">
            <h4 className="detail-header">상세페이지</h4>
            <h4 className="detail-title">{result.title}</h4> 
            <p className="detail-content">{result.content}</p>
        </div>
    );
}
