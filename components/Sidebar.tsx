"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const isDashboard = pathname === "/";

  return (
    <section
      className={cn(
        "fixed z-20 left-0 h-screen hidden  px-6 py-3 bg-white lg:flex flex-col justify-between w-[300px]"
      )}
    >
      {/* {pathname != "/" ? (
        <>
          <div>
            <div className="text-center">
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={48}
                height={48}
                className="mr-2"
              />
            </div>

            <div className="mt-8">
              {sidebarLinks.map((link) => {
                const isActive =
                  pathname === link.route ||
                  pathname.startsWith(`${link.route}/`);

                return (
                  <Link
                    href={link.route}
                    key={link.label}
                    className={cn(
                      "flex gap-4 justify-center items-center p-3 my-2 rounded-lg",
                      { "bg-blue-1 text-white": isActive}
                    )}
                  >
                    <Image
                      src={isActive ? link.activeImgUrl : link.imgUrl}
                      alt={link.label}
                      width={20}
                      height={20}
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <div className="flex justify-center items-center bg-gray-100 p-3 rounded-lg mb-3">
              <Image
                src="/images/contact.svg"
                alt="contact icon"
                width={20}
                height={20}
              />
            </div>

            <div className="bg-peach-2 p-3 rounded-lg mb-6">
              <div className="flex justify-center items-center">
                <Image
                  src="/images/gift.svg"
                  alt="contact icon"
                  width={20}
                  height={20}
                />
              </div>
            </div>

            <div className="flex items-center justify-center p-3 rounded-lg">
              <Image
                src="/images/logout.svg"
                alt="contact icon"
                width={20}
                height={20}
                className="mr-2"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="flex items-center">
              <Image
                src="/images/logo.webp"
                alt="Logo"
                width={48}
                height={48}
                className="mr-2"
              />
              <span className="font-black text-xl">UniGrub</span>
            </div>

            <div className="mt-8">
              {sidebarLinks.map((link) => {
                const isActive =
                  pathname === link.route ||
                  pathname.startsWith(`${link.route}/`);

                return (
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
        </>
      )} */}
      <>
        <div>
          <div className="flex items-center">
            <Image
              src="/images/logo.webp"
              alt="Logo"
              width={48}
              height={48}
              className="mr-2"
            />
            <span className="font-black text-xl">UniGrub</span>
          </div>

          <div className="mt-8">
            {sidebarLinks.map((link) => {
              const isActive =
                pathname === link.route ||
                pathname.startsWith(`${link.route}/`);

              return (
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
          <Link href="/login">
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
          </Link>
        </div>
      </>
    </section>
  );
}
