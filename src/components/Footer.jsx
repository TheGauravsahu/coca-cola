export default function Footer() {
  return (
    <div
      data-scroll
      data-scroll-speed=".3"
      className="footer h-[98vh] w-full bg-zinc-300 text-zinc-900 rounded-t-2xl p-12"
    >
      <div className="h-full w-full flex items-end justify-between px-8">
        <div className="rounded-full px-6 py-1  border hover:bg-[#E81622] hover:text-white hover:border-[#E81622] cursor-pointer transition-all text-sm font-semibold flex items-center justify-center gap-2">
          <span className="w-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995L16.9497 15.9497ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"></path>
            </svg>
          </span>
          INDIA
        </div>
        <img src="/logo.svg" className="w-[30vw] opacity-60" />
        <a href="https://gauravsahu.vercel.app/" target="_blank">
          <div className=" text-sm hover:underline cursor-pointer hover:text-[#E81622]">
            created by Gaurav sahu
          </div>
        </a>
      </div>
    </div>
  );
}
