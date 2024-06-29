'use client' // client component 에서만 useRouter 사용할수 있으서 이렇게 만들어서 사용하면 된다.
             // 그리고 server conponent 에 집어 넣는 형식으로 사용
import { useRouter } from "next/navigation" //navigation으로 바꿔야된다 (Router가 아니라.)

export default function DetailLink(){
    let router = useRouter() //페이지 이동하는 것
    return(
        <button className="home-button" onClick={()=>{router.push('/')}}>Home 이동</button> //router.push() = 페이지 이동
            //back / forward / refresh 등 useRouter사용하면 할수있는게 많다.
    )
}