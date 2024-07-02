import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props){ //props는 현재 URL에 입력한 데이터 가지고 있음
    // 현재 URL에 입력한 id 값 받아서 보여주기 (수정하기 전)
    //DB에 있는 값을 가져오기
    console.log('what Data : ', props);
    const db = (await connectDB).db("forum");
    let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) });
    
    console.log('DB값 : ', result); //값을 가져오기

    //////글 수정//////        
    //updateOne({수정할게시물정보}, {set : {수정할내용}})
    await db.collection('post').updateOne({}, {set :{
        title : 'TEST', content : 'TEST입니다.'
    }}) 

    

    return (
        <div className="P-20">
            <h4>수정 페이지 입니다.</h4>
            <form action="/api/post/new" method="POST">
                <input name="title" value={result.title} />
                <input name="content" value={result.content}/>
                <button type="submit">수정</button>
            </form>
        </div>
    )
}