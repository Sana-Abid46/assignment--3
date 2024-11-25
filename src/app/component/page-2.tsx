import Image from "next/image";
import icon from "@/app/icons/Group 212.png";
import imgg from "@/app/icons/Work Together Image.png"

export default function Page2() {
    return (
        <div className="h-[1588px] pt-[140px] pr-[220px] pb-[140px] pl-[220px]">
            {/* Main Flex Container */}
            <div className="flex items-center justify-between gap-[100px]">
                {/* Left Content Section */}
                <div className="w-1/2 flex flex-col gap-[24px]">
                    <h1 className="inter text-[72px] leading-[87.14px] tracking-[-2%] text-[#212529]">
                        Project <br /> Management
                    </h1>
                    <p className="inters text-[18px] leading-[30px] tracking-[-2%] text-[#212529] pt-6">
                        Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
                    </p>
                    <button className="whitespace-nowrap flex items-center justify-between w-[201px] h-[63px] rounded-[6px] px-[40px] gap-[10px] bg-[#4F9CF9] mt-6">
                        <p className="interss text-[18px] leading-[23px] tracking-[-2%] text-white font-thin">
                            Get Started
                        </p>
                        <Image src={icon} alt="icon" className="h-[15px] w-[15px]" />
                    </button>
                </div>

                {/* Right Colored Div */}
                <div className="w-[748px] h-[547px] bg-[#C4DEFD]"></div>
            </div>
            {/* is div ke andr niche ka content */}
            <div className="gap-[100px] flex items-center justify-between">
                <Image src={imgg} alt="image" className="mt-24" />
                {/* right Content Section */}
                <div className="w-1/2 flex flex-col gap-[24px]">
                    <h1 className="inter text-[72px] leading-[87.14px] tracking-[-2%] text-[#212529]">
                        Work together
                    </h1>
                    <p className="inters text-[18px] leading-[30px] tracking-[-2%] text-[#212529] pt-6">
                        With whitepace, share your notes with your colleagues and collaborate on them.
                        You can also publish a note to the internet and share the URL with others.

                    </p>
                    <button className="flex items-center justify-between w-[201px] h-[63px] rounded-[6px] px-[40px] gap-[10px] bg-[#4F9CF9] mt-6">
                        <p className="interss text-[18px] leading-[23px] tracking-[-2%] text-white font-thin">
                            Try it now
                        </p>
                        <Image src={icon} alt="icon" className="h-[15px] w-[15px]" />
                    </button>
                </div>
            </div>
        </div>
    );
}