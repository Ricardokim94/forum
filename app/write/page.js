export default function Write() {
    return (// 서버로 post method 요청
        <div className="P-20">
            <h4>글작성</h4>
            <form action="/api/post/new" method="POST">
                <input name="title" placeholder="글제목" />
                <input name="content" placeholder="글내용" />
                <button type="submit">전송</button>
            </form>
        </div>
    )
}