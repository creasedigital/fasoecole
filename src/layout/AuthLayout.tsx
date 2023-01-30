import { Box, Flex, Image } from "@chakra-ui/react";
import TRANS from "../assets/trans_image.svg";
import LOGO from "../assets/falcon_logo.svg";
import React from "react";

interface IAuthLayoutProps {
	children: JSX.Element;
}

const AuthLayout: React.FC<IAuthLayoutProps> = ({ children }) => {
	return (
		<Flex minHeight={"100vh"} w="100%">
			<Box
				flex={4}
				paddingTop={{ base: "24px", md: "49px" }}
				pl={{ base: "30px", md: "59px" }}
				pr={{ base: "10px", md: "20px" }}
			>
				<Image src={LOGO} alt="logo" display={"block"} margin="auto" />
				{children}
			</Box>
			<Box
				flex={3}
				background="#01C8FF"
				display={{ base: "none", lg: "flex" }}
				alignItems={"center"}
			>
				<Image
					pos="relative"
					right={"50px"}
					src={TRANS}
					alt="layout ad"
				/>
			</Box>
		</Flex>
	);
};

export default AuthLayout;
