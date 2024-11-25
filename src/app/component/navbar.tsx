import Image from "next/image";
import img from "@/app/icons/Logo Icon.png";

export default function Navbar() {
    return (
        <div>
            {/* main navbar div */}
            <div className="flex bg-[#043873] justify-between items-center py-[16px] px-[220px] h-[92px] w-full overflow-visible">
                {/* logo div */}
                <div className="flex items-center gap-[10px]">
                    <div>
                        <Image src={img} alt="icon" priority />
                    </div>
                    <h4 className="text-[28px] leading-[33.89px] text-white font-inter">
                        whitepace
                    </h4>
                </div>
                {/* navigations name */}
                <div className="flex gap-[60px] pl-56">
                    {["Products", "Solutions", "Resources", "Pricing"].map((name) => (
                        <div key={name}>
                            <h5 className="text-[18px] leading-[23px] text-white font-dm-sans">
                                {name}
                            </h5>
                        </div>
                    ))}
                </div>
                {/* button div */}
                    <div className="w-[126px] h-[60px] rounded-[8px] bg-[#FFE492] flex items-center justify-center">
                        <h3 className="inter text-[18px] leading-[23px] tracking-[-2%] text-[#043873] font-light ">
                            Login
                        </h3>
                    </div>
                </div>
            </div>
    );
}


