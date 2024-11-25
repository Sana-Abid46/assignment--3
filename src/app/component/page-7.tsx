import Image from "next/image"
import logo from "@/app/icons/Logo Icon.png"


export default function Page7() {
    return (
        <div className="h-[461px] top-[5195px] left-[1px] pt-[140px] pb-[32px] px-[220px] gap-[200px] bg-[#043873]">
            {/* ye sub content ke div */}
            <div className="h-[289px] gap-[100px] ">
                {/* is ma 4ron headings */}
                <div className="h-[169px] gap-[100px] flex">
                    {/* is ma first heading */}
                    <div className="h-[169px] gap-[15px] grid">
                        <div className="flex">
                            <Image src={logo} alt="logo" />
                            <h1 className="w-[144px] h-[34px] left-[47px] inter text-[28px] leading-[33.89px] text-white pl-3">whitepace
                            </h1>
                        </div>
                        <p className="w-[240px] h-[120px] inters text-[18px] leading-[30px] tracking-[-2%] text-[#F7F7EE] pt-3">
                            whitepace was created for the new ways we live and work. We make a better workspace around the world
                        </p>
                    </div>
                    {/* second heading */}
                    <div className="h-[127px] w-[295px] gap-[15px] pl-6">
                        <h5 className="h-[22px] w-[68px] inter text-[18px] tracking-[-2%] leading-[21.78px] text-white">Product</h5>

                        <h5 className="inters h-[20px] w-[70px] text-[16px] tracking-[-2%] leading-[20px] text-[#FFE492] font-thin pt-5">Overview
                        </h5>

                        <h5 className="inters h-[20px] w-[50px] text-[16px] tracking-[-2%] leading-[20px] text-white font-thin pt-10">Pricing

                        </h5>
                        <h5 className="inters h-[20px] w-[177px] text-[16px] tracking-[-2%] leading-[20px] text-white font-thin pt-10">Customer stories

                        </h5>


                    </div>
                    {/* 3rd */}
                    <div className="h-[130px] w-[295px] gap-[16px]">
                        <h5 className="h-[22px] w-[91px] inter text-[18px] tracking-[-2%] leading-[21.78px] text-white">Resources</h5>

                        <h5 className="inters h-[20px] w-[33px] text-[16px] tracking-[-2%] leading-[20px] text-[#FFE492] font-thin pt-5">Blog
                        </h5>

                        <h5 className="inters h-[20px] w-[128px] text-[16px] tracking-[-2%] leading-[20px] text-white font-thin pt-10 whitespace-nowrap">Guides & tutorials

                        </h5>
                        <h5 className="inters h-[20px] w-[130px] text-[16px] tracking-[-2%] leading-[20px] text-white font-thin pt-10">Help center

                        </h5>


                    </div>
                    {/* 4rd */}
                    <div className="h-[130px] w-[295px] gap-[16px]">
                        <h5 className="h-[22px] w-[83px] inter text-[18px] tracking-[-2%] leading-[21.78px] text-white">Company</h5>

                        <h5 className="inters h-[20px] w-[66px] text-[16px] tracking-[-2%] leading-[20px] text-white font-thin pt-5 whitespace-nowrap">About us
                        </h5>

                        <h5 className="inters h-[20px] w-[62px] text-[16px] tracking-[-2%] leading-[20px] text-white font-thin pt-10">Careers


                        </h5>
                        <h5 className="inters h-[20px] w-[130px] text-[16px] tracking-[-2%] leading-[20px] text-white font-thin pt-10">Media kit
                        </h5>
                    </div>
                </div>
                <div className="h-[20px] flex justify-center items-center mt-[50px]">
                    <h1 className="inter text-[16px] leading-[20px] tracking-[-2%] text-white pt-32">
                        ©2021 Whitepace LLC.
                    </h1>
                </div>


            </div>

        </div>
    )
}