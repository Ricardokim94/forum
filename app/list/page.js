import { connectDB } from "@/util/database";

export default async function List() {

    //DB connection 하는 법
    const db = (await connectDB).db("forum")
    let result = await db.collection('post').find().toArray()
    //await이란 처리가 늦게 되는 코드를 잠깐 기다려 주는 코드임. mongoDB에서 사용하는 것
    console.log('tttt', result)
    return (
        <div className="list-bg">
            {result.map((post, index) => (
                <div className="list-item" key={index}>
                    <h4>{post.title}</h4>
                    <p>{post.content}</p>
                </div>
            ))}
            
            {/* <div className="list-item">
                <h4>{result[0].title}</h4>
                <p>{result[0].content}</p>
            </div>
            <div className="list-item">
                <h4>{result[1].title}</h4>
                <p>{result[1].content}</p>
            </div>
            <div className="list-item">
                <h4>{result[2].title}</h4>
                <p>{result[2].content}</p>
            </div> */}
        </div>
    )
} 