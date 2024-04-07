import { contactInfo } from "@/constants";
import Image from "next/image";

export default function ConversationsPage() {
  return (
    <section className="bg-blue-3">
      <div className="hidden lg:block lg:pl-[108px] lg:pt-[85.6px] w-screen h-screen">
        <div className="p-6 mb-4">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold">Conversaions with Customers</h3>
            <button className="bg-blue-1 text-white px-6 py-2 rounded-lg">
              New Message
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 bg-white rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold text-lg">Contacts</h3>
                <span className="text-slate-400">34</span>
              </div>
              <div className="relative">
                <Image
                  src="/images/search-icon.svg"
                  alt="search icon"
                  width={24}
                  height={24}
                  className="absolute top-2 left-2"
                />
                <input
                  type="text"
                  placeholder="Seach..."
                  className="w-full pl-12 pr-4 py-2 border border-slate-400 outline-none focus:border-2 rounded-lg"
                />
              </div>
              <div className="mt-4">
                {contactInfo.map((info) => (
                  <div className="flex mb-2">
                    <div className="w-[15%] mr-4">
                      <Image
                        src={info.imgUrl}
                        alt="Image"
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="w-[70%] overflow-hidden flex flex-col justify-between">
                      <h3>{info.name}</h3>
                      <span className=" text-sm text-slate-400 truncate w-full">
                        Hi, I want to make enquiries about your product
                      </span>
                    </div>
                    <div className="w-[15%] flex flex-col justify-between items-end">
                      {info.extras == true ? (
                        <>
                          {info.extrasType == "new" ? (
                            <span className="px-3 bg-peach-2 rounded-full text-sm">
                              New
                            </span>
                          ) : (
                            <span className="w-6 h-6 bg-peach-1 flex items-center justify-center text-sm rounded-full">
                              12
                            </span>
                          ) }
                        </>
                      ) : (
                        <span></span>
                      )}

                      <span className="text-xs text-slate-400">12:55 am</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
