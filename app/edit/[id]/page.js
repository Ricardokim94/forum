import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) { //props는 현재 URL에 입력한 데이터 가지고 있음
    // 현재 URL에 입력한 id 값 받아서 보여주기 (수정하기 전)
    //DB에 있는 값을 가져오기
    console.log('what Data : ', props);
    const db = (await connectDB).db("forum");
    let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) });

    console.log('DB값 : ', result); //값을 가져오기

    //////글 수정//////        
    //DB에 있는 글 수정
    //updateOne({수정할게시물정보}, {$set : {수정할내용}})
    // let modified = await db.collection('post').updateOne({},
    //     {
    //         $set: {
    //             title: '수정된 값 Test', content: 'TEST입니다.'
    //         }
    //     })
    // console.log('modified : ', modified);



    return (
        <div className="P-20">
            <h4>수정 페이지 입니다.</h4>
            <form action="/api/post/edit" method="POST">
                <input name="title" defaultValue={result.title} />
                <input name="content" defaultValue={result.content} />
                <input style={{display : 'none'}} name="_id" defaultValue={result._id.toString()} />
                <button type="submit">수정</button>
            </form>
        </div>
    //여기서 Tip : value 는 안될수도 있다. 그래서 defaultValue 로 하는게 나을수도 있다.



        
    )
}