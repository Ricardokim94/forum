import { connectDB } from "@/util/database";
import { MongoClient } from "mongodb";

export default async function Home() {
//DB connection 하는 법
const db = (await connectDB).db("forum")
let result = await db.collection('post').find().toArray()


  return (
    <div>
      <h1>
        Changmok's Test Main Page 
      </h1>
    </div>
  );
}
