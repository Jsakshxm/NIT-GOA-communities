import { group } from "@/detail";
import Link from "next/link";

const Page = () => {
  // Find the DSA group
  const dsaGroup = group.find((g) => g.name === "DSA");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Members of Group</h1>
      <ul className="grid grid-cols-2 gap-2">
        {dsaGroup && dsaGroup.members.map((member, index) => (
          <li key={index} className="p-2 bg-gray-100 rounded-md">{member}</li>
        ))}
      </ul><center>
      <Link href="/chat"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5">
  CHAT
</button>
</Link>
<Link href="http://localhost:3002/react-rtc-demo"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5">
  Start Video meet
</button>
</Link></center>
    </div>
  );
};

export default Page;
