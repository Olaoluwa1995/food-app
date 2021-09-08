import styled from "styled-components";
import { COLORS } from "../../styles/theme";
import { Swiper } from "swiper/react";
import { Box, Image } from "@chakra-ui/react";

export const SwiperContainer = styled(Swiper)`
	width: 100vw;
	height: 25rem;
	margin-top: -10px;
	padding-top: 5px;

	@media (min-width: 768px) {
		height: 40rem;
	}

	&:hover {
		.swiper-button-next,
		.swiper-button-prev {
			visibility: visible;
			transition: visibility 0.2s ease-in-out;
		}
	}

	.swiper-pagination {
		.swiper-pagination-bullet-active {
			opacity: 1;
			background: ${COLORS.PRIMARY_COLOR};
		}

		.swiper-pagination-bullet {
			width: 1rem;
			height: 1rem;
			display: inline-block;
			border-radius: 50%;
			opacity: 0.5;
		}
	}

	.swiper-button-next,
	.swiper-button-prev {
		background: ${COLORS.PRIMARY_COLOR};
		border-radius: 50%;
		margin-right: 1.5rem;
		height: 2rem;
		width: 2rem;
		color: white;
		visibility: hidden;

		@media (min-width: 480px) {
			height: 3rem;
			width: 3rem;
		}

		@media (min-width: 768px) {
			height: 4rem;
			width: 4rem;
		}

		&:after {
			font-size: 0.6rem;

			@media (min-width: 480px) {
				font-size: 0.8rem;
			}

			@media (min-width: 768px) {
				font-size: 1rem;
			}
		}
	}
`;

export const SpanContainer = styled.div`
	display: block;
	text-transform: uppercase;
	font-size: 1.5rem;
	font-weight: bold;

	@media (min-width: 360px) {
		font-size: 2rem;
	}

	@media (min-width: 768px) {
		font-size: 3rem;
	}

	.first-text {
		letter-spacing: 0.7rem;
		position: relative;
		animation: text 3s 1;
		display: block;
		background: unset;

		@media (min-width: 768px) {
			letter-spacing: 1rem;
		}
	}
	.second-text {
		color: ${COLORS.PRIMARY_COLOR};
	}

	@keyframes text {
		0% {
			background: grey;
			margin-bottom: -3.5rem;
		}
		30% {
			background: grey;
			letter-spacing: 1.5rem;
			margin-bottom: -3.5rem;
		}
		85% {
			background: grey;
			letter-spacing: 0.5rem;
			margin-bottom: -3.5rem;
		}
	}
`;

export const StyledImage = styled(Image)`
	background-color: red;
	position: relative;
	animation: image 3s linear 1s infinite;

	@keyframes image {
		0% {
			background-color: red;
			top: -100px;
		}
		25% {
			background-color: yellow;
			top: -50px;
		}
		50% {
			background-color: blue;
			top: 0;
		}
		75% {
			background-color: green;
			top: 50px;
		}
		100% {
			background-color: red;
			top: 100px;
		}
	}
`;

export const StyledBox = styled(Box)`
	background-color: red;
	position: relative;
	animation: myfirst 1s linear 4s;

	@keyframes myfirst {
		0% {
			background-color: red;
			left: -100px;
		}
		25% {
			background-color: yellow;
			left: -50px;
		}
		50% {
			background-color: blue;
			left: 0;
		}
		75% {
			background-color: green;
			left: 50px;
		}
		100% {
			background-color: red;
			left: 100px;
		}
	}
`;
