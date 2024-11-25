import Image from "next/image";
import apple from "@/app/icons/Apple.png"
import mss from "@/app/icons/microsoft 1.png"
import logo  from "@/app/icons/Slack.png"
import ggg from "@/app/icons/Google.png"

export default function Page6(){
    return (
        <div className="h-[538px] top-[4654px] py-[140px] px-[220px] gap-[100px] ">
            <h1 className="text-center inter text-[72px] tracking-[-2%] leading-[87.14px] items-center text-[#212529] ">
            Our sponsors
            </h1>
            <div className="flex justify-between pt-16">
                <Image src={apple} alt="logo" className="w-[55.47px] h-[68px] gap-[4px]"/>
                <Image src={mss} alt="logo" className="w-[287px] h-[62px] gap-[4px]"/>
                <Image src={logo} alt="logo" className="w-[280px] h-[71px] gap-[4px]"/>
                <Image src={ggg} alt="logo" className="w-[211px] h-[69.81px] gap-[4px]"/>
 </div>
         </div>
    )
}