import { getBlogInformation } from "@/lib/api";
import Link from "next/link";

const Header = async () => {
  const information = await getBlogInformation()
  console.log(information)
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
      <Link href="/" className="hover:underline">
        {information.data.name}
      </Link>
      .
    </h2>
  );
};

export default Header;
