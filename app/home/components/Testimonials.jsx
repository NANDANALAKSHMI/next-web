'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import img from "../../../public/logo1.svg";
import img2 from "../../../public/logo2.svg";
import img3 from "../../../public/logo3.svg";
import img4 from "../../../public/logo4.svg";
import img5 from "../../../public/logo5.svg";

const testimonialData = [
    {
        quote: "Cycle is a slick AI tool that enables teams to build better products by getting smarter on what their customers want.",
        name: "Olivier Godement",
        company: "OpenAI",
        companyLogos: [img, img2, img3, img, img2, img3, img4, img5, img, img2, img3, img, img2, img3, img4, img5]
    }
];

const Testimonials = () => {

    const duplicatedLogos = [
        ...testimonialData[0].companyLogos,
        ...testimonialData[0].companyLogos
    ];

    return (
        <section className="py-12">
            <div className=" overflow-hidden">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={50}
                    slidesPerView="auto"
                    loop={true}
                    autoplay={{
                        delay: 1,
                        disableOnInteraction: false,
                        reverseDirection: false,
                        waitForTransition: false,
                    }}
                    speed={7000}
                    allowTouchMove={false}
                    cssMode={false}
                    className="logos-marquee"
                >
                    {duplicatedLogos.map((logo, index) => (
                        <SwiperSlide
                            key={index}
                            className="!w-auto flex items-center justify-center"
                        >
                            <div className="flex items-center justify-center border border-light-grey rounded-2xl p-2" style={{
                                aspectRatio: "162 / 112",
                                width: "9vw",
                                minWidth: "162px",
                                display: "flex",
                                flexFlow: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                paddingLeft: ".7rem",
                                paddingRight: ".7rem"
                            }}>
                                <img src={logo?.src} alt="Company Logo" className="h-10 w-auto" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="container mx-auto md:py-20 py-10 px-4">
                {testimonialData.map((testimonial, index) => (
                    <div key={index} className="flex gap-4 items-center md:flex-row flex-col  justify-center">
                        <div className='flex justify-center'>
                            <img src="/person1.jpg" alt="nnn" className='w-[75%] rounded-3xl' />
                        </div>
                        <div className='flex flex-col text-left'>
                            <div className="md:text-[28px] text-[18px] font-medium text-gray-800 max-w-3xl mb-6 italic">
                                "{testimonial.quote}"
                            </div>

                            <div className="mb-4 border-t-[1px] border-light-grey" >
                                <div className="font-semibold text-lg">{testimonial.name}</div>
                                <div className="text-gray-500">{testimonial.company}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
