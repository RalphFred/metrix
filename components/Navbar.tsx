"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  let navpath = pathname === '/' ? '' : pathname.replace('/', '/ ');
  navpath = navpath.slice(0, 2) + navpath.charAt(2).toUpperCase() + navpath.slice(3);

  const sidebarWidth = pathname != "/" ? "100vw-100px" : "100vw-300px";
  
  const isDashboard = pathname === '/';

  return (
    <div className={cn("hidden lg:block fixed top-0 right-0 z-10 max-sm:w-full px-6 py-2 lg:px-10 bg-white lg:w-[calc(100vw-300px)]")}>
      <div className="flex justify-between items-center border-b pb-2 ">
        <div className="font-bold text-lg">Dashboard</div>
        <div>
          <div className="flex text-sm">
            <select className="bg-peach-2 p-2 rounded-lg">
              <option value="option1">Caf 1</option>
              <option value="option2">Caf 2</option>
            </select>
            <Image
              src="/images/notification.svg"
              alt="notofication icon"
              width={16}
              height={16}
              className="mx-4"
            />
            <Image
              src="/images/profile.svg"
              alt="profile image"
              width={32}
              height={32}
            />
          </div>
        </div>
      </div>
      <div className="pt-2 flex items-center">
        <Image
          src="/images/home.svg"
          alt="home icon"
          width={16}
          height={16}
          className="mr-2"
        />
         <span className="text-slate-600 text-sm">
         {navpath}
         </span>
      </div>
    </div>
  );
}
