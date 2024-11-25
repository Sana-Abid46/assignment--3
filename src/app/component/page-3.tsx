import Image from "next/image"
import icon from "@/app/icons/Group 212.png"

export default function Page3(){
    return (
        // parent div
        <div className="flex justify-between items-center h-[759px] top-[2509px] left-[1px] px-[220px] py-[140px] gap-[98px] bg-[#043873]">
            {/* left section */}
            <div className="gap-[60px] ">
                {/* left section ka text */}
                <div className="gap-[24px]"> 
                    <h1 className="text-[72px] leading-[87.14px] tracking-[-2%] inter text-white whitespace-nowrap">Use as Extension
                    </h1>
                    <p className="inters text-[18px] leading-[30px] tracking-[-2%] text-white pt-9">
                    Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
                    </p>
                </div>
                <button className=" mt-16 whitespace-nowrap flex justify-between items-center w-[171px] h-[63px] rounded-[6px] px-[40px] py-[20px] gap-[10px] bg-[#4F9CF9]">
                    <p className="w-[67px] h-[23px] interss text-[18px] leading-[23px] tracking-[-2%] inter text-white">
                       Let's Go
                    </p>
                    <Image src={icon} alt="icon" className="w-4 h-4"/>

                </button>

            </div>
            {/* right side */}
            <div className="w-[686px] h-[479px] gap-[4px]">
                <div className="w-[686px] h-[479px] bg-[#C4DEFD]">

                </div>

            </div>

        </div>
    )
}