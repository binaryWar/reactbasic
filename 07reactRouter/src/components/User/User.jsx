import { useParams } from "react-router-dom"

export default function User(){
    const {userId} = useParams();
    return (
        <div className="bg-gray-600 m-auto text-center text-white text-3xl p-4 capitalize">User : {userId}</div>
    )
}