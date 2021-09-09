import { Box } from "@chakra-ui/react";
import styled from "styled-components";

export const ButtonLoaderContainer = styled(Box)`
	transform: translate(-50%, -50%);
	top: 50%;
	position: absolute;
	color: #fff;
	text-align: center;

	span {
		font-size: 20px;
		opacity: 0;
		display: inline-block;
		color: rgb(253, 229, 216);
		/* color: primary-color-light; */
	}

	@keyframes lol {
		0% {
			opacity: 0.5;
			transform: translateX(-300px);
		}
		33% {
			opacity: 1;
			transform: translateX(0px);
		}
		66% {
			opacity: 1;
			transform: translateX(0px);
		}
		100% {
			opacity: 0.5;
			transform: translateX(300px);
		}
	}

	@-webkit-keyframes lol {
		0% {
			opacity: 0.5;
			-webkit-transform: translateX(-300px);
		}
		33% {
			opacity: 1;
			-webkit-transform: translateX(0px);
		}
		66% {
			opacity: 1;
			-webkit-transform: translateX(0px);
		}
		100% {
			opacity: 0.5;
			-webkit-transform: translateX(300px);
		}
	}

	span:nth-child(6) {
		-webkit-animation: lol 3s infinite ease-in-out;
		animation: lol 3s infinite ease-in-out;
	}

	span:nth-child(5) {
		-webkit-animation: lol 3s 100ms infinite ease-in-out;
		animation: lol 3s 100ms infinite ease-in-out;
	}

	span:nth-child(4) {
		-webkit-animation: lol 3s 200ms infinite ease-in-out;
		animation: lol 3s 200ms infinite ease-in-out;
	}

	span:nth-child(3) {
		-webkit-animation: lol 3s 300ms infinite ease-in-out;
		animation: lol 3s 300ms infinite ease-in-out;
	}

	span:nth-child(2) {
		-webkit-animation: lol 3s 400ms infinite ease-in-out;
		animation: lol 3s 400ms infinite ease-in-out;
	}

	span:nth-child(1) {
		-webkit-animation: lol 3s 500ms infinite ease-in-out;
		animation: lol 3s 500ms infinite ease-in-out;
	}
`;
