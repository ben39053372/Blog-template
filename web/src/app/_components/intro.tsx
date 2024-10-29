import { getBlogInformation } from "@/lib/api";

export async function Intro() {
  const information = await getBlogInformation()
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-2xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
        {information.data.name}
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        {information.data.introduction}{" "}
      </h4>
    </section>
  );
}
