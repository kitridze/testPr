'use client'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselContextProps,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "@/components/ui/carousel"
import styles from './MineCarousel.module.scss'
import { cn } from "@/lib/utils"
import Autoplay from "embla-carousel-autoplay"

export default function MineCarousel() {
    return (
        <div className={styles.wrapper}>
            <Carousel 
                className={cn("w-full max-w-xs ", styles.wrapper)}
                plugins={[
                    Autoplay({
                    delay: 3500,
                    }),
                ]}
                >
            <div className={styles.back}>
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                        <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                <img src='./carousel.jpg'/>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
            </div>
            <div className={styles.front}>
                <CarouselPrevious className="h-auto w-auto" />
                <CarouselNext className="h-auto w-auto" />  
            </div>
            </Carousel>
        </div>
    )
}
