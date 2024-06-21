import Image from "next/image"

export default function Products() {
  return(
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-8 justify-around lg:p-12">
          <div className="flex flex-col items-center">
            <div>
              <Image
                src="/images/rice.avif"
                alt="rice image"
                width={300}
                height={300}
                className="w-[300px] h-[225px]"
              />
              <div className="mt-2 flex justify-between items-center">
                <span className="font-semibold text-lg">Jollof Rice</span>
                <span><span className="text-xl">₦</span>1,300</span>
              </div>
              <div className="mt-2 flex justify-end">
                <button className="bg-blue-2 text-white px-4 py-1 rounded-full">Add to cart </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <Image
                src="/images/beans-porriage.webp"
                alt="rice image"
                width={300}
                height={300}
                className="w-[300px] h-[225px]"
              />
              <div className="mt-2 flex justify-between items-center">
                <span className="font-semibold text-lg">Beans Porriage</span>
                <span><span className="text-xl">₦</span>2,100</span>
              </div>
              <div className="mt-2 flex justify-end">
                <button className="bg-blue-2 text-white px-4 py-1 rounded-full">Add to cart </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <Image
                src="/images/amala.jpg"
                alt="rice image"
                width={300}
                height={300}
                className="w-[300px] h-[225px]"
              />
              <div className="mt-2 flex justify-between items-center">
                <span className="font-semibold text-lg">Amala</span>
                <span><span className="text-xl">₦</span>1,800</span>
              </div>
              <div className="mt-2 flex justify-end">
                <button className="bg-blue-2 text-white px-4 py-1 rounded-full">Add to cart </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <Image
                src="/images/amala.jpg"
                alt="rice image"
                width={300}
                height={300}
                className="w-[300px] h-[225px]"
              />
              <div className="mt-2 flex justify-between items-center">
                <span className="font-semibold text-lg">Amala</span>
                <span><span className="text-xl">₦</span>1,800</span>
              </div>
              <div className="mt-2 flex justify-end">
                <button className="bg-blue-2 text-white px-4 py-1 rounded-full">Add to cart </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <Image
                src="/images/friedrice.jpg"
                alt="rice image"
                width={300}
                height={300}
                className="w-[300px] h-[225px]"
              />
              <div className="mt-2 flex justify-between items-center">
                <span className="font-semibold text-lg">Fried Rice</span>
                <span><span className="text-xl">₦</span>1,350</span>
              </div>
              <div className="mt-2 flex justify-end">
                <button className="bg-blue-2 text-white px-4 py-1 rounded-full">Add to cart </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <Image
                src="/images/amala.jpg"
                alt="rice image"
                width={300}
                height={300}
                className="w-[300px] h-[225px]"
              />
              <div className="mt-2 flex justify-between items-center">
                <span className="font-semibold text-lg">Amala</span>
                <span><span className="text-xl">₦</span>1,800</span>
              </div>
              <div className="mt-2 flex justify-end">
                <button className="bg-blue-2 text-white px-4 py-1 rounded-full">Add to cart </button>
              </div>
            </div>
          </div>
        </div>
  )
}