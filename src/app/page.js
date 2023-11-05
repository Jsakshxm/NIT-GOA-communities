import Link from "next/link"

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100"><h1 className="font-extrabold text-4xl mb-4">NIT Community</h1>
    <Link  href="TandP_Login"> <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mb-2">T&P</button></Link><br></br>
   <Link href="Home"><button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg">Students</button></Link>
    </div>

  )
}

export default page