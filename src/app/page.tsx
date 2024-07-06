export default function HomePage() {
  return (
    <main className="justify-top flex min-h-screen flex-col items-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h2 className="text-gray text-3xl font-extrabold tracking-tight sm:text-[4rem]">
          <span className="text-[#2e5e9c]">Read</span>more
        </h2>
        <div className=" max-w-[650px] text-center ">
          <p>
            Readmore is your personal book recommendation system. Simply input
            the books you&apos;ve read or found intriguing, and receive tailored
            suggestions for new reads based on your interests. Discover your
            next favorite book with Readmore!
          </p>
        </div>
      </div>
    </main>
  );
}
