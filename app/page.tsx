"use client"

import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  const sidebarWidth = pathname != "/" ? "100px" : "300px";
  return (
    <section className={`bg-slate-200 h-screen lg:pl-[${sidebarWidth}] lg:pt-[85.6px]`}>
      <div>
        Dashboard
      </div>
    </section>
  );
}
