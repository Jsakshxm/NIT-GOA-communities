import Link from "next/link";
import { group } from "@/detail";

const getGroupColor = (index) => {
  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-red-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-teal-500",
    "bg-orange-500",
    "bg-gray-500",
  ];

  return colors[index % colors.length];
};

const Page = () => {
  return (<><nav class="bg-blue-500 p-4">
  <div class="container mx-auto flex justify-between items-center">
      <Link href="#" class="text-white text-2xl font-semibold">NIT Communities</Link>
      <div class="space-x-4">
      <Link href="/" class="text-white hover:text-yellow-500 hover:transform hover:translate-y-2">Home</Link>
          <Link href="/About" class="text-white hover:text-yellow-500 hover:transform hover:translate-y-2">About</Link>
          <Link href="#" class="text-white hover:text-yellow-500 hover:transform hover:translate-y-2">sign out</Link>
      </div>
  </div>
</nav>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center">
      
      {group.map((group, index) => (
        <div key={group.id} className="m-4">
          <Link href={`/Dashboard/${group.name}`}>
            <button
              className={`${getGroupColor(index)} hover:${getGroupColor(index + 1)} text-white font-bold py-8 px-12 rounded-lg focus:outline-none focus:shadow-outline w-full`}
            >
              {group.name}
            </button>
          </Link>
        </div>
      ))}
    </div></>
  );
};

export default Page;
