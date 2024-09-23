import Button from "./Button";

export default function Hero() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[800px] flex-col items-center justify-center gap-10 p-4 text-center">
      <div className="flex flex-col gap-4">
        <p>IT&apos;S TIME TO GET</p>
        <h1 className="text-4xl font-semibold uppercase sm:text-5xl md:text-6xl lg:text-7xl">
          Swole<span className="text-blue-400">normous</span>
        </h1>
      </div>
      <p className="text-sm font-light md:text-base">
        I hereby acknowledgement that I may become{" "}
        <span className="font-medium text-blue-400">
          unbelievably swolenormous
        </span>{" "}
        and accept all risks of becoming the local{" "}
        <span className="font-medium text-blue-400">mass montrosity</span>,
        afflicted with severe dismorphia, unable to fit through doors.
      </p>

      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text={"Accept & Begin"}
      ></Button>
    </div>
  );
}
