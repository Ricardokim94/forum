export default function InsertUser() {
    return (
        <div className="P-20">
            <h4>회원가입</h4>
            <form action="/api/User/User" method="POST">
                <input name="ID" placeholder="아이디" />
                <input name="PW" placeholder="비번" />
                <button type="submit">전송</button>
            </form>
        </div>
    )
}