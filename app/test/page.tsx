import LexicalEditor from "@/components/editor/LexicalEditor";

export default function Home() {
  return (
    <div className=" container max-w-7xl mx-auto h-full max-sm:px-0  md:px-20 ">
      <h1 className="text-3xl text-center font-bold">Editor</h1>
      <div className="max-sm:px-2">
        <LexicalEditor SavelocalStorage={true} loadFromLocalStorge={true} />
      </div>
    </div>
  );
}
