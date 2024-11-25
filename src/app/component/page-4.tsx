import Image from "next/image"
import icon from "@/app/icons/Group 212.png"

export default function Page4(){
    return (
        // parent div
        <div className="flex justify-between items-center h-[812.09px] top-[3268px] left-[1px] px-[220px] py-[140px] gap-[98px] ">
            {/*  */}
              <div className="w-[686px] h-[479px] gap-[4px]">
                <div className="w-[686px] h-[479px] bg-[#C4DEFD]">

                </div>

            </div>

            {/* left section */}
            <div className="gap-[60px] ">
                {/* left section ka text */}
                <div className="gap-[24px]"> 
                    <h1 className="text-[72px] leading-[87.14px] tracking-[-2%] inter text-[#212529] whitespace-nowrap pt-4">Customise it
                    to <br/> your needs
                    </h1>
                    <p className="inters text-[18px] leading-[30px] tracking-[-2%] pt-9 text-[#212529]">
                    Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
                    </p>
                </div>
                <button className=" mt-14 whitespace-nowrap flex justify-between items-center w-[171px] h-[63px] rounded-[6px] px-[40px] py-[20px] gap-[10px] bg-[#4F9CF9]">
                    <p className="w-[67px] h-[23px] interss text-[18px] leading-[23px] tracking-[-2%] inter text-white">
                       Let's Go
                    </p>
                    <Image src={icon} alt="icon" className="w-4 h-4"/>

                </button>

            </div>
        </div>
    )
}