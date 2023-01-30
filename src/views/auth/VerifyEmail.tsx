import {
	Box,
	PinInput,
	PinInputField,
	HStack,
	Heading,
	Text,
	Button,
} from "@chakra-ui/react";
import AuthLayout from "../../layout/AuthLayout";
import { useState } from "react";

const VerifyEmail = () => {
	const [pinInputValue, setPinInputValue] = useState("");

	const handlePinInputChange: () => void = () => {
		console.log(pinInputValue);
		setPinInputValue(pinInputValue);
	};

	return (
		<AuthLayout>
			<Box mt="56px">
				<Heading
					as="h2"
					fontSize={"33.18px"}
					letterSpacing="1%"
					lineHeight={"40.45px"}
				>
					Kindly enter Email verification code
				</Heading>
				<Text
					fontSize={"19.2px"}
					letterSpacing="1%"
					lineHeight={"28.8px"}
				>
					To Sign up, kindly enter the verification code sent to your
					email address
				</Text>
				<HStack justifyContent={"center"} mt={"120px"} mb={"152px"}>
					<PinInput
						autoFocus
						type="alphanumeric"
						mask
						// colorScheme={"facebook"}
						// size="lg"
						// value={""}
						// onChange={() => handlePinInputChange()}
					>
						{[1, 2, 3, 4, 5].map((item, id) => (
							<PinInputField
								key={id}
								w="78px"
								h="97px"
								_focus={{
									border: "1.5px solid #01C8FF",
								}}
								borderRadius="5px"

								/* _active={{
								border: "1px solid red",
							}} */
							/>
						))}
					</PinInput>
				</HStack>
				<Button
					bg={"#01C8FF"}
					p={"12px"}
					borderRadius="10px"
					width={{ base: "100%", md: "528px" }}
					_focus={{ border: "none", outline: "none" }}
					_hover={{ border: "none", outline: "none" }}
					height="50px"
					color="#4B4A4A"
					mx="auto"
					display={"block"}
					type="submit"
				>
					Proceed
				</Button>
			</Box>
		</AuthLayout>
	);
};

export default VerifyEmail;
