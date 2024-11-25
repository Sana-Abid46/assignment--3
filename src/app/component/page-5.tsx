import Image from "next/image";
import icon from "@/app/icons/Group 212.png";

export default function Page5() {
    return (
        <div className="flex flex-col justify-center items-center h-[812.09px] bg-[#043873]">
            {/* Left section */}
            <div className="text-center gap-[24px] flex flex-col items-center">
                <h1 className="text-[72px] leading-[87.14px] tracking-[-2%] inter text-white">
                    Your work, everywhere you are
                </h1>
                <p className="inters text-[18px] leading-[30px] tracking-[-2%] text-white pt-9 max-w-[1000px]">
                    Access your notes from your computer, phone or tablet by synchronising with various services, including whitespace, Dropbox, and OneDrive. The app is available on Windows, macOS, Linux, Android, and iOS. A terminal app is also available!
                </p>
            </div>
            {/* Button */}
            <button className="mt-14 flex justify-center items-center w-[171px] h-[63px] rounded-[6px] bg-[#4F9CF9]">
                <p className="inters text-[18px] leading-[23px] tracking-[-2%] text-white">
                    Try Taskey
                </p>
                <Image src={icon} alt="icon" className="w-4 h-4 ml-2" />
            </button>
        </div>
    );
}
