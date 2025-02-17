import Link from "next/link"
import { titleFont } from "@/config/fonts"
import Image from "next/image"
export const PageNotFound = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">
      <div className="text-center px-5 mx-5">
        <h2 className={`${titleFont.className} antialiased text-9xl`}>404 </h2>
        <p className="font-semibold text-xl">Page it's not found</p>
        <p className="font-light">
          <span>You can return to:</span>
          <Link href="/" className="hover:underline transition-all text-blue-500">Home</Link>
        </p>
      </div>
      <div className="px-5 mx-5">
        <Image
          className="p-5 sm:p-0"
          src="/imgs/starman_750x750.png" alt="Starman"
          width={550}
          height={500}
        />

      </div>
    </div>
  )

}