import Products from "@/components/Products";

export default function Home() {
  return (
    <section>
      <div
        className={`bg-blue-3 min-h-screen lg:pl-[300px] lg:pt-[85.6px] hidden lg:block`}
      >
        <Products />
      </div>
    </section>
  );
}
