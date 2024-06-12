"use client";
import { useState } from "react";
import { contactInfo } from "@/constants";
import Image from "next/image";

interface ContactInfo {
  name: string;
  imgUrl: string;
  extras: boolean;
  extrasType?: string;
}

export default function ConversationsPage() {
  const [selectedContact, setSelectedContact] = useState<ContactInfo | null>(
    null
  );

  const [showConversation, setShowConversation] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredContacts, setFilteredContacts] = useState(contactInfo);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchQuery(value);
    // Filter the contacts based on the search query
    const filtered = contactInfo.filter((contact) =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredContacts(filtered);
  };

  const handleContactClick = (contact: ContactInfo) => {
    setSelectedContact(contact);
    setShowConversation(true);
  };

  const handleHideConversation = () => {
    setShowConversation(false);
  };

  return (
    <section className="bg-blue-3 overflow-x-hidden">
      <div className="hidden lg:block lg:pl-[305px] lg:pt-[85.6px] w-screen min-h-screen">
        <div className="p-6 mb-4">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold">Conversations with Customers</h3>
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
                  placeholder="Search..."
                  className="w-full pl-12 pr-4 py-2 border border-slate-400 outline-none focus:border-2 rounded-lg"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
              <div className="mt-4">
                {filteredContacts.map((info, index) => (
                  <div
                    className={`flex mb-2 cursor-pointer p-2 rounded-lg ${
                      selectedContact === info ? "bg-blue-3" : ""
                    }`}
                    key={index}
                    onClick={() => handleContactClick(info)}
                  >
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
                        Hii, I want to make enquiries about your product
                      </span>
                    </div>
                    <div className="w-[15%] flex flex-col justify-between items-end">
                      {info.extras === true ? (
                        <>
                          {info.extrasType === "new" ? (
                            <span className="px-3 bg-peach-2 rounded-full text-sm">
                              New
                            </span>
                          ) : (
                            <span className="w-6 h-6 bg-peach-1 flex items-center justify-center text-sm rounded-full">
                              12
                            </span>
                          )}
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
            <div className="col-span-2 bg-white rounded-lg p-4">
              {selectedContact && (
                <div className="flex justify-between border-b pb-2">
                  <div className="flex">
                    <Image
                      src={selectedContact.imgUrl}
                      alt="image"
                      width={50}
                      height={50}
                      className="mr-4"
                    />
                    <div className="flex flex-col justify-between">
                      <span className="text-sm font-semibold">
                        {selectedContact.name}
                      </span>
                      <div className="text-sm flex">
                        <span className="flex items-center">
                          <span className="w-1 h-1 rounded-full bg-blue-1 mr-1"></span>
                          <span className="text-blue-2 mr-2">Online</span>
                        </span>
                        <span className="text-slate-600">12:55 am</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-end text-sm">
                    <div>
                      <span className="bg-peach-2 px-4 rounded-full mr-4">
                        New Customers
                      </span>
                      <span className="text-blue-1">View Profile</span>
                    </div>
                    <div className="flex">
                      <Image
                        src="/images/orders.svg"
                        alt="order icon"
                        width={20}
                        height={20}
                        className="mr-2"
                      />
                      <span className="text-slate-400">0 Orders</span>
                    </div>
                  </div>
                </div>
              )}

              {selectedContact && (
                <div className="mt-4">
                  <div className="flex justify-center">
                    <span className="text-sm bg-blue-3 px-4 py-1 rounded-xl">
                      12 August 2022
                    </span>
                  </div>
                  <div>
                    <div className="w-[350px] flex justify-between border-b pb-2">
                      <div className="flex">
                        <Image
                          src="/images/iphone1.svg"
                          alt="iPhone image"
                          width={50}
                          height={50}
                          className="mr-4"
                        />
                        <div className="flex flex-col justify-between text-sm">
                          <span>iPhone 13</span>
                          <span>₦730,000.00</span>
                        </div>
                      </div>
                      <div className="text-xs text-slate-400 flex items-end">
                        <span>
                          <span className="text-blue-1">12</span> in Stock
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 flex flex-col items-start">
                      <div className="max-w-[350px] flex flex-col">
                        <div className="bg-blue-1 text-white text-sm p-4 rounded-t-xl rounded-br-xl">
                          Hello, I want to make enquiries about your product
                        </div>
                        <span className="text-sm text-slate-400 mt-2">
                          12:55 am
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 flex flex-col items-end">
                      <div className="max-w-[350px] flex flex-col items-end">
                        <div className="bg-peach-3 text-sm p-4 rounded-t-xl rounded-bl-xl">
                          Hello Janet, Thank you for reaching out.
                        </div>
                        <div className="text-sm text-slate-400 mt-2 flex items-center">
                          <span className="mr-2">12:55 am</span>
                          <Image
                            src="/images/view.svg"
                            alt="viewed icon"
                            width={20}
                            height={20}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 flex flex-col items-end">
                      <div className="max-w-[350px] flex flex-col items-end">
                        <div className="bg-peach-3 text-sm p-4 rounded-t-xl rounded-bl-xl">
                          What do you need to know?
                        </div>
                        <div className="text-sm text-slate-400 mt-2 flex items-center">
                          <span className="mr-2">12:55 am</span>
                          <Image
                            src="/images/view.svg"
                            alt="viewed icon"
                            width={20}
                            height={20}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <span className="text-sm bg-blue-3 px-4 py-1 rounded-xl">
                        Today
                      </span>
                    </div>
                    <div className="mt-2 flex flex-col items-start">
                      <div className="max-w-[350px] flex flex-col">
                        <div className="bg-blue-1 text-white text-sm p-4 rounded-t-xl rounded-br-xl">
                          I want to know if the price is negotiable, I need
                          about 2 Units
                        </div>
                        <span className="text-sm text-slate-400 mt-2">
                          12:55 am
                        </span>
                      </div>
                    </div>
                    <div className="relative mt-4">
                      <input
                        type="text"
                        placeholder="Your message"
                        className="border-2 border-slate-200 py-3 pl-16 w-full rounded-lg"
                      />
                      <Image
                        src="/images/plus.svg"
                        alt="plus icon"
                        width={32}
                        height={32}
                        className="absolute top-[9px] left-3 cursor-pointer"
                      />

                      <div className="absolute top-[9px] right-2 flex">
                        <Image
                          src="/images/smile.svg"
                          alt="plus icon"
                          width={28}
                          height={28}
                          className="cursor-pointer"
                        />

                        <button className="flex items-center bg-peach-3 px-4 py-1 ml-2 rounded-lg">
                          <span>Send</span>
                          <Image
                            src="/images/send.svg"
                            alt="plus icon"
                            width={18}
                            height={18}
                            className="ml-2"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* --------------------- Mobile -------------------------- */}
      <div className="w-screen relative lg:hidden">
        {/* -----------------Contact List ---------------------- */}
        <div className="bg-white rounded-lg p-4 w-screen h-[calc(100vh-80px)]">
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
              placeholder="Search..."
              className="w-full pl-12 pr-4 py-2 border border-slate-400 outline-none focus:border-2 rounded-lg"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          <div className="mt-4">
            {filteredContacts.map((info, index) => (
              <div
                className="flex mb-2 cursor-pointer p-2 rounded-lg"
                key={index}
                onClick={() => handleContactClick(info)}
              >
                <div className="w-[15%] mr-4">
                  <Image src={info.imgUrl} alt="Image" width={65} height={65} />
                </div>
                <div className="w-[70%] overflow-hidden flex flex-col justify-between">
                  <h3>{info.name}</h3>
                  <span className=" text-sm text-slate-400 truncate w-full">
                    Hii, I want to make enquiries about your product
                  </span>
                </div>
                <div className="w-[15%] flex flex-col justify-between items-end">
                  {info.extras === true ? (
                    <>
                      {info.extrasType === "new" ? (
                        <span className="px-3 bg-peach-2 rounded-full text-sm">
                          New
                        </span>
                      ) : (
                        <span className="w-6 h-6 bg-peach-1 flex items-center justify-center text-sm rounded-full">
                          12
                        </span>
                      )}
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

        {/* ---------------------- Conversations ------------------ */}
        <div
          className={`p-4 bg-white w-screen h-[calc(100vh-80px)] absolute  top-0 duration-300 ease-in-out ${
            showConversation === true ? "left-0" : "left-full"
          }`}
        >
          {selectedContact && (
            <div className="flex border-b pb-2">
              <Image
                src="/images/arrow.svg"
                alt="image"
                width={20}
                height={20}
                className="mr-4 cursor-pointer"
                onClick={handleHideConversation}
              />
              <div className="flex">
                <Image
                  src={selectedContact.imgUrl}
                  alt="image"
                  width={50}
                  height={50}
                  className="mr-4"
                />
                <div className="flex flex-col justify-between">
                  <span className="text-sm font-semibold">
                    {selectedContact.name}
                  </span>
                  <div className="text-sm flex">
                    <span className="flex items-center">
                      <span className="w-1 h-1 rounded-full bg-blue-1 mr-1"></span>
                      <span className="text-blue-2 mr-2">Online</span>
                    </span>
                    <span className="text-slate-600">12:55 am</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="w-[350px] flex justify-between border-b pb-2">
            <div className="flex">
              <Image
                src="/images/iphone1.svg"
                alt="iPhone image"
                width={50}
                height={50}
                className="mr-4"
              />
              <div className="flex flex-col justify-between text-sm">
                <span>iPhone 13</span>
                <span>₦730,000.00</span>
              </div>
            </div>
            <div className="text-xs text-slate-400 flex items-end">
              <span>
                <span className="text-blue-1">12</span> in Stock
              </span>
            </div>
          </div>
          <div className="mt-2 flex flex-col items-start">
            <div className="max-w-[350px] flex flex-col">
              <div className="bg-blue-1 text-white text-sm p-4 rounded-t-xl rounded-br-xl">
                Hello, I want to make enquiries about your product
              </div>
              <span className="text-sm text-slate-400 mt-2">12:55 am</span>
            </div>
          </div>
          <div className="mt-2 flex flex-col items-end">
            <div className="max-w-[350px] flex flex-col items-end">
              <div className="bg-peach-3 text-sm p-4 rounded-t-xl rounded-bl-xl">
                Hello Janet, Thank you for reaching out.
              </div>
              <div className="text-sm text-slate-400 mt-2 flex items-center">
                <span className="mr-2">12:55 am</span>
                <Image
                  src="/images/view.svg"
                  alt="viewed icon"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
          <div className="mt-2 flex flex-col items-end">
            <div className="max-w-[350px] flex flex-col items-end">
              <div className="bg-peach-3 text-sm p-4 rounded-t-xl rounded-bl-xl">
                What do you need to know?
              </div>
              <div className="text-sm text-slate-400 mt-2 flex items-center">
                <span className="mr-2">12:55 am</span>
                <Image
                  src="/images/view.svg"
                  alt="viewed icon"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <span className="text-sm bg-blue-3 px-4 py-1 rounded-xl">
              Today
            </span>
          </div>
          <div className="mt-2 flex flex-col items-start">
            <div className="max-w-[350px] flex flex-col">
              <div className="bg-blue-1 text-white text-sm p-4 rounded-t-xl rounded-br-xl">
                I want to know if the price is negotiable, I need about 2 Units
              </div>
              <span className="text-sm text-slate-400 mt-2">12:55 am</span>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 w-[calc(100vw-32px)] mt-4">
            <input
              type="text"
              placeholder="Your message"
              className="border-2 border-slate-200 py-3 pl-16 w-full rounded-lg"
            />
            <Image
              src="/images/plus.svg"
              alt="plus icon"
              width={32}
              height={32}
              className="absolute top-[9px] left-3 cursor-pointer"
            />

            <div className="absolute top-[9px] right-2 flex">
              <Image
                src="/images/smile.svg"
                alt="plus icon"
                width={28}
                height={28}
                className="cursor-pointer"
              />

              <button className="lg:flex items-center bg-peach-3 px-4 py-1 ml-2 rounded-lg hidden">
                <span>Send</span>
                <Image
                  src="/images/send.svg"
                  alt="plus icon"
                  width={18}
                  height={18}
                  className="ml-2"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
