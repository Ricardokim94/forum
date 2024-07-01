import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";


export default async function UserDetail(props){
    //DB에서 게시물 받아오기
    const db = (await connectDB).db("forum");
    let result = await db.collection('User').findOne({ _id: new ObjectId(props.params.id) });

    console.log('show : ', props.params.id); //URL에 유저가 입력한 값 (detail/??? 뒤에 오는 값)
    
    return (
        <div className="detail-container">
            <h4 className="detail-header">회원상세 페이지</h4>
            <h4 className="detail-title">{result.ID}</h4> 
            <p className="detail-content">{result.PW}</p>
        </div>
    );
}
