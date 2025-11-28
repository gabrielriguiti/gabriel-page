import { useEffect, useState, useRef } from "react";
import BlogItemComponent, { type BlogItem } from "./blog-item.component.tsx";
import { api } from "../api/api.ts";

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export default function BlogComponent() {
    const [events, setEvents] = useState<BlogItem[]>([]);
    const swiperRef = useRef<SwiperType | null>(null);

    useEffect(() => {
        api.get('/api/event')
            .then((result) => {
                setEvents(result as BlogItem[]);
            })
    }, [])

    return (
        <section className="section bg-[#0f0f0f]" >
            <div className="container">
                <h2 className="section-title text-white">Blog</h2>

                <div className="mt-8 relative flex items-center">
                    {/* Botão Prev - fora do gradiente */}
                    <button 
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="hidden md:flex absolute -left-0 z-20 w-11 h-11 items-center justify-center rounded-full bg-black/50 text-amber-500 backdrop-blur-md transition-all duration-300 hover:bg-amber-500 hover:text-black hover:scale-110"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    <div className="w-full relative">
                        {/* Fade edges overlay */}
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-[#0f0f0f] to-transparent z-10"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-[#0f0f0f] to-transparent z-10"></div>

                        <Swiper
                            onSwiper={(swiper) => { swiperRef.current = swiper; }}
                            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                            effect="coverflow"
                            grabCursor={true}
                            centeredSlides={true}
                            loop={events.length > 3}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 3.2,
                                slideShadows: true,
                            }}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                640: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                            }}
                            style={{
                                paddingBottom: '60px',
                                paddingTop: '20px',
                            }}
                            className="blog-swiper"
                        >
                            {events.map((item) => (
                                <SwiperSlide key={item._id}>
                                    <div className="flex justify-center">
                                        <BlogItemComponent item={item} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Botão Next - fora do gradiente */}
                    <button 
                        onClick={() => swiperRef.current?.slideNext()}
                        className="hidden md:flex absolute -right-0 z-20 w-11 h-11 items-center justify-center rounded-full bg-black/50 text-amber-500 backdrop-blur-md transition-all duration-300 hover:bg-amber-500 hover:text-black hover:scale-110"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Custom Swiper Styles */}
            <style>{`
                .blog-swiper .swiper-pagination-bullet {
                    background: rgba(255, 255, 255, 0.5);
                    opacity: 1;
                    width: 10px;
                    height: 10px;
                    transition: all 0.3s ease;
                }
                
                .blog-swiper .swiper-pagination-bullet-active {
                    background: #f59e0b;
                    transform: scale(1.0);
                }
                
                .blog-swiper .swiper-slide {
                    transition: all 0.3s ease;
                }
                
                .blog-swiper .swiper-slide-active {
                    transform: scale(1.05);
                }
            `}</style>
        </section>
    )
}