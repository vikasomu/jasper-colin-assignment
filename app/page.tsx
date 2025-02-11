import ModeToggle from "../components/mode-toggle";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex w-full justify-end">
        <ModeToggle />
      </div>

      <h1 className="text-[28px] font-[500]">Jasper Colin Assignment</h1>
    </div>
  );
}
