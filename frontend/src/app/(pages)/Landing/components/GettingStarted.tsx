import Image from "next/image";
import Link from "next/link";

const GettingStarted = () => {
  return (
    <div className="w-full bg-[#293044] py-24 flex flex-col items-center justify-center text-center">
      <div className="mb-8">
        <div className="w-32 h-32 relative mx-auto">
          <Image
            src="/churp.svg" 
            alt="Logo"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </div>

      <h2 className="text-white text-2xl font-bold mb-8 lg:text-4xl">
        Start sending your garden concerns now.
      </h2>

      <Link href="/Report" target="_blank" rel="noopener noreferrer">
        <button className="bg-[#4A61C0] border-[#4A61C0] hover:bg-[#3b4e9a] text-white font-medium py-3 px-6 rounded-sm transition-colors duration-200">
          Get started
        </button>
      </Link>
    </div>
  );
};

export default GettingStarted;