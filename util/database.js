import { MongoClient } from 'mongodb'
const url = 'mongodb+srv://admin:Qwer1234@cluster0.hgsrmmh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
// const options = { useNewUrlParser: true } // 제거된 옵션
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url).connect()
}

export { connectDB }
