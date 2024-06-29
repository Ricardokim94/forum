import { connectDB } from "@/util/database";
import Link from 'next/link';

export default async function List() {

    //DB connection 하는 법
    const db = (await connectDB).db("forum")
    let result = await db.collection('post').find().toArray()
    //await이란 처리가 늦게 되는 코드를 잠깐 기다려 주는 코드임. mongoDB에서 사용하는 것
    console.log('tttt', result)
    return (
        // 반복문으로 게시글 contents 돌리기
        <div className="list-bg">
            {result.map((post, index) => (
                <div className="list-item" key={index}>
                    <h4>{post.title}</h4>
                    <Link href={'/detail/' + result[index]._id}>링크</Link>
                    <p>{post.content}</p>
                </div>
            ))}
            
        </div>
    )
} 