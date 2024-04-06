"use client"
import Image from "next/image";
import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <section className="w-full p-4 lg:hidden" >
      <Sheet>
        <div className="flex justify-between items-center">
          <Image 
           src='/images/logo.svg'
           alt="logo icon"
           width={48}
           height={48}
          />
        <SheetTrigger asChild>
          <Image 
           src='/images/menu.svg'
           alt="menu icon"
           width={32}
           height={32}
          />
        </SheetTrigger>
        </div>
        <SheetContent side='left' className="border-none flex flex-col justify-between">
          <div>
            <div className="flex items-center">
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={48}
                height={48}
                className="mr-2"
              />
              <span className="font-black text-xl">Metric</span>
            </div>

            <div className="mt-8">
              {sidebarLinks.map((link) => {
                const isActive =
                  pathname === link.route ||
                  pathname.startsWith(`${link.route}/`);

                return (
                  <SheetClose asChild key={link.route}>
                    <Link
                    href={link.route}
                    key={link.label}
                    className={cn(
                      "flex gap-4 items-center p-3 my-1 rounded-lg justify-start max-w-60",
                      { "bg-blue-1 text-white": isActive }
                    )}
                  >
                    <Image
                      src={isActive ? link.activeImgUrl : link.imgUrl}
                      alt={link.label}
                      width={20}
                      height={20}
                    />
                    <span className="">{link.label}</span>

                    {link.notifications == "" ? (
                      ""
                    ) : (
                      <span className="rounded-full bg-peach-1 w-6 h-6 text-xs flex items-center justify-center font-bold text-black">
                        {link.notifications}
                      </span>
                    )}
                  </Link>
                  </SheetClose>
                );
              })}
            </div>
          </div>

          <div className="">
            <div className="flex items-center bg-gray-100 p-3 rounded-lg mb-3 w-full">
              <Image
                src="/images/contact.svg"
                alt="contact icon"
                width={20}
                height={20}
                className="mr-2"
              />
              <span>Contact Support</span>
            </div>

            <div className="bg-peach-2 p-3 rounded-lg mb-3">
              <div className="flex items-center mb-3">
                <Image
                  src="/images/gift.svg"
                  alt="contact icon"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <span>Free Gift Awaits You!</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="mr-2">Upgrade your account </span>
                <Image
                  src="/images/right-arrow.svg"
                  alt="contact icon"
                  width={8}
                  height={8}
                  className="mr-2"
                />
              </div>
            </div>
            <div className="flex items-center p-3 rounded-lg">
              <Image
                src="/images/logout.svg"
                alt="contact icon"
                width={20}
                height={20}
                className="mr-2"
              />

              <span className="text-red-1">Logout</span>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}
