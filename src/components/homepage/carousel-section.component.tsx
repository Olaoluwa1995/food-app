import React from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
} from "swiper";
import "swiper/swiper-bundle.css";
import { SwiperSlide } from "swiper/react";

import { SwiperContainer } from "./carousel-section.styles.d";
import Slider1 from "../../assets/images/slide1.jpeg";
import Slider2 from "../../assets/images/slide2.jpeg";
import Slider3 from "../../assets/images/slide3.png";
import Slider4 from "../../assets/images/slide4.jpeg";
import Slider5 from "../../assets/images/slide5.jpeg";
//import { COLORS } from "../../styles/theme";

SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);

// const logoStyle = {
// 	w: { base: "6rem", md: "8rem" },
// 	h: "auto",
// 	src: LogoImage,
// 	alt: "logo",
// };

// const aboveTextStyle = {
// 	mx: { base: "10%", md: "20%" },
// 	fontSize: { base: "1.2rem", sm: "1.5rem", md: "1.7rem", lg: "2rem" },
// 	fontWeight: "bold",
// 	padding: { base: "1rem", md: "1.5rem" },
// 	borderRadius: "20px 0",
// };

// const belowTextStyle = {
// 	mx: { base: "15%", md: "30%" },
// 	fontSize: { base: "0.9rem", md: "1rem" },
// 	fontWeight: "bold",
// 	padding: { base: "0.5rem", md: "1rem" },
// 	borderRadius: "20px 0",
// 	bgColor: COLORS.PRIMARY_COLOR,
// };

type Slide = {
  id: number;
  imageUrl: any;
};

const slides: Slide[] = [
  {
    id: 1,
    imageUrl: `${Slider1}`,
  },
  {
    id: 2,
    imageUrl: `${Slider2}`,
  },
  {
    id: 3,
    imageUrl: `${Slider3}`,
  },
  {
    id: 4,
    imageUrl: `${Slider4}`,
  },
  {
    id: 5,
    imageUrl: `${Slider5}`,
  },
];

const CarouselSection = () => {
  return (
    <SwiperContainer
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      effect="fade"
      speed={500}
      navigation
      pagination={{ clickable: true }}
      centeredSlides={true}
      slidesPerView={1}
      //onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper: any) => console.log(swiper)}
    >
      {slides.map((slide: Slide) => (
        <SwiperSlide
          style={{
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${slide.imageUrl})`,
          }}
          key={slide.id}
        />
      ))}
      {/* <SwiperSlide
				style={{
					height: "100%",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundImage: `url(${Slider1})`,
				}}></SwiperSlide>
			<SwiperSlide
				style={{
					height: "100%",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundImage:
						"url(https://s29843.pcdn.co/blog/wp-content/uploads/sites/2/2017/06/making-a-video-tutorial-program-image-e1498150478681-768x569.jpg)",
				}}>
				<Flex
					flexDir="column"
					align="center"
					justify="space-around"
					h="90%"
					color="white"
					textAlign="center">
					<Image {...logoStyle} />
					<Box textTransform="uppercase" {...aboveTextStyle}>
						<Text>Our greatest resource is knowledge</Text>
					</Box>
					<Box {...belowTextStyle}>
						We challenge, equip and guide towards increasing successes.
					</Box>
				</Flex>
			</SwiperSlide>
			<SwiperSlide
				style={{
					height: "100%",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundImage:
						"url(https://cdn.pixabay.com/photo/2016/02/16/21/07/books-1204029_960_720.jpg)",
				}}>
				<Flex
					flexDir="column"
					align="center"
					justify="space-around"
					h="90%"
					color="white"
					textAlign="center">
					<Image {...logoStyle} />
					<Box textTransform="uppercase" {...aboveTextStyle}>
						<Text>We sell inspirational and educational books</Text>
					</Box>
					<Box {...belowTextStyle}>
						Reach your goals, attain the impossible heights by getting your
						hands on these books.
					</Box>
				</Flex>
			</SwiperSlide>
			<SwiperSlide
				style={{
					height: "100%",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundImage:
						"url(https://cdn.pixabay.com/photo/2016/03/26/22/21/books-1281581_960_720.jpg)",
				}}>
				<Flex
					flexDir="column"
					align="center"
					justify="space-around"
					h="90%"
					color="white"
					textAlign="center">
					<Image {...logoStyle} />
					<Box textTransform="uppercase" {...aboveTextStyle}>
						<Text>Spiritual and motivational books also available</Text>
					</Box>
					<Box {...belowTextStyle}>
						To get you out of it, set you on the track, keep you moving, till
						you become a winner.
					</Box>
				</Flex>
			</SwiperSlide> */}
    </SwiperContainer>
  );
};

export default CarouselSection;
