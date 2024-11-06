import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Autoplay, Pagination,Navigation} from 'swiper/modules'
const ProductSlider = () => {
    let images = [
        "https://images.remotehub.com/d42c62669a7711eb91397e038280fee0/original_thumb/ec1eb042.jpg?version=1618112516",
        "https://img.freepik.com/free-vector/electronics-store-template-design_23-2151143839.jpg",
        "https://t3.ftcdn.net/jpg/04/38/59/88/240_F_438598896_D9pyLmbMZ02CrxURfHxU4nG5UlzXv6Dy.jpg",
        "https://t3.ftcdn.net/jpg/03/20/68/66/240_F_320686681_Ur6vdYQgDC9WiijiVfxlRyQffxOgfeFz.jpg",
        "https://t4.ftcdn.net/jpg/03/06/69/49/240_F_306694930_S3Z8H9Qk1MN79ZUe7bEWqTFuonRZdemw.jpg"
    ]
    return (
        <>
            <Swiper spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay:1500,
                    disableOnInteraction:false,
                }}
                navigation={true}
                modules={[Pagination,Autoplay,Navigation]}
                className='mySwiper h-[60vh]'
            >
                {images.map((item,index) => 
                    (<SwiperSlide >
                    <img
                        className='w-full object-cover'
                        src={item}
                        alt={index} />
                </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default ProductSlider