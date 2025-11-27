import {useEffect, useState} from "react";
import BlogItemComponent, {type BlogItem} from "./blog-item.component.tsx";
import {api} from "../api/api.ts";

// Swiper imports
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay, EffectCoverflow} from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export default function BlogComponent() {
    const [events, setEvents] = useState<BlogItem[]>([]);

    useEffect(() => {
        api.get('/api/event')
            .then((result) => {
                setEvents(result as BlogItem[]);
            })
    }, [])

    return (
        <section className="section" style={{background: 'linear-gradient(180deg, #111111 0%, #0a0a0a 100%)'}}>
            <div className="container">
                <h2 className="section-title text-white">Blog</h2>

                <div className="mt-8">
                    <Swiper
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
                            modifier: 2.5,
                            slideShadows: false,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        navigation={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 2,
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
            </div>

            {/* Custom Swiper Styles */}
            <style>{`
                .blog-swiper .swiper-button-next,
                .blog-swiper .swiper-button-prev {
                    color: #f59e0b;
                    background: rgba(0, 0, 0, 0.5);
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    backdrop-filter: blur(10px);
                    transition: all 0.3s ease;
                }
                
                .blog-swiper .swiper-button-next:hover,
                .blog-swiper .swiper-button-prev:hover {
                    background: #f59e0b;
                    color: #000;
                    transform: scale(1.1);
                }
                
                .blog-swiper .swiper-button-next::after,
                .blog-swiper .swiper-button-prev::after {
                    font-size: 18px;
                    font-weight: bold;
                }
                
                .blog-swiper .swiper-pagination-bullet {
                    background: rgba(255, 255, 255, 0.5);
                    opacity: 1;
                    width: 10px;
                    height: 10px;
                    transition: all 0.3s ease;
                }
                
                .blog-swiper .swiper-pagination-bullet-active {
                    background: #f59e0b;
                    transform: scale(1.3);
                }
                
                .blog-swiper .swiper-slide {
                    transition: all 0.3s ease;
                }
                
                .blog-swiper .swiper-slide-active {
                    transform: scale(1.05);
                }
                
                @media (max-width: 640px) {
                    .blog-swiper .swiper-button-next,
                    .blog-swiper .swiper-button-prev {
                        display: none;
                    }
                }
            `}</style>
        </section>
    )
}