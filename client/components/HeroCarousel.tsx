"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const images = [
  {
    id: 1,
    url: "https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_1280.jpg",
    alt: "Festive Hero Banner",
  },
  {
    id: 2,
    url: "https://cdn.pixabay.com/photo/2019/10/08/04/16/dragon-palace-hotel-4534092_1280.jpg",
    alt: "Hero Banner Kim Mã",
  },
  {
    id: 3,
    url: "https://cdn.pixabay.com/photo/2018/07/15/13/04/living-room-3539587_1280.jpg",
    alt: "Hero Banner",
  },
  // {
  //   id: 4,
  //   url: "https://cdn.pixabay.com/photo/2023/03/29/10/27/hotel-7885138_1280.jpg",
  //   alt: "Home Banner",
  // },
];

export function HeroCarousel() {
  return (
    <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px]">
      <Carousel
        className="h-full w-full"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className="h-full">
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative h-full w-full overflow-hidden bg-black">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="h-full w-full object-contain object-center bg-black"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 z-20" />
        <CarouselNext className="right-4 z-20" />
      </Carousel>
    </div>
  );
}
