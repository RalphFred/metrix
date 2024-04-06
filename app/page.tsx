import Card from "@/components/Card";
import CardText from "@/components/CardText";
import Marketting from "@/components/Marketting";
import Recent from "@/components/Recent";
import Summary from "@/components/Summary";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div
        className={`bg-blue-3 h-screen lg:pl-[300px] lg:pt-[85.6px] hidden lg:block`}
      >
        <div className="grid lg:grid-cols-10 lg:grid-rows-5 gap-3 p-4 h-full">
          <div className="col-span-3 row-span-1">
            <Card
              imgUrl="/images/sales-card.svg"
              special={false}
              Ctitle1="Sales"
              CtitleColor1="text-slate-400"
              Cvalue1="₦4,000,000.00"
              Csuperscript1=""
              Ctitle2="Volume"
              CtitleColor2="text-slate-400"
              Cvalue2="₦450"
              Csuperscript2="+20.00"
            />
          </div>
          <div className="col-span-3 row-span-1">
            <Card
              imgUrl="/images/customers-card.svg"
              special={false}
              Ctitle1="Customers"
              CtitleColor1="text-slate-400"
              Cvalue1="1,250"
              Csuperscript1="+15.80"
              Ctitle2="Active"
              CtitleColor2="text-slate-400"
              Cvalue2="1,180"
              Csuperscript2="+85%"
            />
          </div>
          <div className="col-span-4 row-span-1">
            <Card
              imgUrl="/images/orders-card.svg"
              special={true}
              Ctitle1="All orders"
              CtitleColor1="text-slate-400"
              Cvalue1="450"
              Csuperscript1=""
              Ctitle2="Pending"
              CtitleColor2="text-slate-400"
              Cvalue2="5"
              Csuperscript2=""
              Ctitle3="Completed"
              CtitleColor3="text-slate-400"
              Cvalue3="445"
              Csuperscript3=""
            />
          </div>
          <div className="col-span-3 row-span-2">
            <Marketting />
          </div>

          <div className="col-span-3 row-span-2 grid grid-rows-2 gap-3">
            <div className="w-full h-full bg-blue-1 text-white p-3 rounded-xl">
              <div>
                <Image
                  src="/images/product-card.svg"
                  alt="icon"
                  width={36}
                  height={36}
                />
                <div className="flex items-center mt-4">
                  <CardText
                    title="All Products"
                    titleColor="text-white"
                    value="45"
                    superscript=""
                  />
                  <div className="w-1/2">
                    <span className="text-sm">Active</span>
                    <div className="flex items-center">
                      <span className="mr-1">32</span>
                      <span className="text-xs">+24%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Card
              imgUrl="/images/abandoned-card.svg"
              special={false}
              Ctitle1="Abandoned Cart"
              CtitleColor1="text-red-400"
              Cvalue1="20%"
              Csuperscript1="+0.00%"
              Ctitle2="Customers"
              CtitleColor2="text-slate-400"
              Cvalue2="30"
              Csuperscript2=""
            />
          </div>

          <div className="col-span-4 row-span-4 bg-white rounded-xl">
            <Recent />
          </div>
          <div className="col-span-6 row-span-2 bg-white rounded-xl">
            <Summary />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:hidden p-6 sm:p-6 bg-blue-3">
        <Card
          imgUrl="/images/sales-card.svg"
          special={false}
          Ctitle1="Sales"
          CtitleColor1="text-slate-400"
          Cvalue1="₦4,000,000.00"
          Csuperscript1=""
          Ctitle2="Volume"
          CtitleColor2="text-slate-400"
          Cvalue2="₦450"
          Csuperscript2="+20.00"
        />

        <Card
          imgUrl="/images/customers-card.svg"
          special={false}
          Ctitle1="Customers"
          CtitleColor1="text-slate-400"
          Cvalue1="1,250"
          Csuperscript1="+15.80"
          Ctitle2="Active"
          CtitleColor2="text-slate-400"
          Cvalue2="1,180"
          Csuperscript2="+85%"
        />

        <Card
          imgUrl="/images/orders-card.svg"
          special={true}
          Ctitle1="All orders"
          CtitleColor1="text-slate-400"
          Cvalue1="450"
          Csuperscript1=""
          Ctitle2="Pending"
          CtitleColor2="text-slate-400"
          Cvalue2="5"
          Csuperscript2=""
          Ctitle3="Completed"
          CtitleColor3="text-slate-400"
          Cvalue3="445"
          Csuperscript3=""
        />

        <Marketting />

        <div className="w-full h-full bg-blue-1 text-white p-3 rounded-xl">
          <div>
            <Image
              src="/images/product-card.svg"
              alt="icon"
              width={36}
              height={36}
            />
            <div className="flex items-center mt-4">
              <CardText
                title="All Products"
                titleColor="text-white"
                value="45"
                superscript=""
              />
              <div className="w-1/2">
                <span className="text-sm">Active</span>
                <div className="flex items-center">
                  <span className="mr-1">32</span>
                  <span className="text-xs">+24%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Card
          imgUrl="/images/abandoned-card.svg"
          special={false}
          Ctitle1="Abandoned Cart"
          CtitleColor1="text-red-400"
          Cvalue1="20%"
          Csuperscript1="+0.00%"
          Ctitle2="Customers"
          CtitleColor2="text-slate-400"
          Cvalue2="30"
          Csuperscript2=""
        />

        <Recent />

        <Summary />
      </div>
    </section>
  );
}
