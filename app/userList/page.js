import { connectDB } from "@/util/database";
import Link from 'next/link';
// import DetailLink from "./DetailLink";

export default async function UserList() {

    //DB connection 하는 법
    const db = (await connectDB).db("forum")
    let result = await db.collection('User').find().toArray()
    //await이란 처리가 늦게 되는 코드를 잠깐 기다려 주는 코드임. mongoDB에서 사용하는 것
    console.log('tttt', result)
    // 반복문으로 게시글 contents 돌리기
    //제목클릭하면 상세페이지 이동 detail page
    return (
        <>
            <div>
                {/* <DetailLink /> */}
            </div>
            <div className="list-bg">
                {result.map((User, index) => (
                    <div className="list-item" key={index}>
                        <h3>ID :</h3> <Link href={'/userDetail/' + result[index]._id}>
                            <h4>{User.ID}</h4>
                        </Link>
                        <h3>PW :</h3>     <p>{User.PW}</p>
                    </div>
                ))}
            </div>
        </>
    );
} 