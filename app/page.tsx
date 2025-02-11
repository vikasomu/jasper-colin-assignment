import ModeToggle from "../components/mode-toggle";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex w-full justify-end">
        <ModeToggle />
      </div>

      <h1 className="text-[20px] sm:text-[18px] md:text-[28px] font-[500] text-center">
        Jasper Colin Assignment
      </h1>
    </div>
  );
}
