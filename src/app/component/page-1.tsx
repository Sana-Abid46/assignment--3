import Image from "next/image";
import icon from "@/app/icons/Group 212.png"

export default function Page1() {
    return (
        // parent div
        <div className=" flex min-h-screen bg-[#043873] items-center justify-center px-[20px] md:px-[220px] py-[140px] ">
            {/* Content Container */}
            <div className=" gap-[60px]">
                 {/* Text Section */}
                <div className="gap-[24px]">
                <h2 className="text-[64px] tracking-[-2%] leading-[77.48px] text-white inter pt-12">
                    Get More Done with whitepace
                </h2>
                <p className="inters text-[18px] tracking-[-2%] leading-[30px] text-white pt-7 ">
                Project management software that enables your teams to collaborate, plan, <br/> analyze and manage everyday tasks
                </p>
            </div>
            <button className=" flex items-center justify-center w-auto h-[63px] rounded-[8px] p-[20px] gap-[10px] bg-[#4F9CF9] mt-16  ">
                <p className="interss text-[18px] tracking-[-2%] leading-[23px] text-white ">
                Try Whitepace free
                </p>
                <Image src={icon} alt="" className="h-[15px] w-[15px]"/>
            </button>
           </div>
           <div className="w-[824px] h-[549px] gap-[4px] bg-[#C4DEFD]">

           </div>
        </div>
    );
}
