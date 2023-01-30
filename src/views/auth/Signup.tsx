import {
	Box,
	Button,
	Checkbox,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	InputGroup,
	InputRightElement,
	Text,
	VStack,
} from "@chakra-ui/react";
import AuthLayout from "../../layout/AuthLayout";
import {
	Formik,
	FormikHelpers,
	FormikProps,
	Form,
	Field,
	FieldProps,
} from "formik";
import { useState } from "react";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";

interface MyFormValues {
	firstName: string;
}

const Signup = () => {
	const initialValues: MyFormValues = { firstName: "" };
	const validateName = (value: string) => {
		let error;
		if (!value) {
			error = "Name is required";
		} else if (value.toLowerCase() !== "naruto") {
			error = "Jeez! You're not a fan 😱";
		}
		return error;
	};

	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);

	return (
		<AuthLayout>
			<Box>
				<Heading
					as="h2"
					fontSize={"33.18px"}
					letterSpacing="1%"
					lineHeight={"40.45px"}
				>
					Create an account
				</Heading>
				<Text
					fontSize={"19.2px"}
					letterSpacing="1%"
					lineHeight={"28.8px"}
					mb={"38px"}
				>
					Register on our website with your correct email address and
					information
				</Text>

				<Formik
					initialValues={initialValues}
					onSubmit={(values, actions) => {
						console.log({ values, actions });
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2));
							actions.setSubmitting(false);
						}, 1000);
					}}
				>
					{(props) => (
						<Box pr={{ base: "10px", md: "29px" }}>
							<Form>
								<Field name="name" validate={validateName}>
									{({}) => (
										<VStack spacing="18px">
											<FormControl>
												<FormLabel>
													First name
												</FormLabel>
												<Input
													size="lg"
													placeholder="Jeremiah"
												/>
												<FormErrorMessage>
													{}
												</FormErrorMessage>
											</FormControl>
											<FormControl>
												<FormLabel>
													Email Address
												</FormLabel>
												<Input
													size="lg"
													type="email"
													placeholder="Fame@gmail.com"
												/>
												<FormErrorMessage>
													{}
												</FormErrorMessage>
											</FormControl>
											<FormControl>
												<FormLabel>
													Phone Number
												</FormLabel>
												<Input
													size="lg"
													placeholder="+2348103769079"
													type="tel"
													name="phone"
													pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
												/>
												<FormErrorMessage>
													{}
												</FormErrorMessage>
											</FormControl>
											<FormControl>
												<FormLabel>Password</FormLabel>
												<InputGroup size="lg">
													<Input
														pr="4.5rem"
														type={
															show
																? "text"
																: "password"
														}
														placeholder="Enter password"
													/>
													<InputRightElement width="4.5rem">
														<Button
															h="1.75rem"
															size="xs"
															onClick={
																handleClick
															}
															borderRadius="none"
															background="transparent"
															_focus={{
																border: "none",
																background:
																	"transparent",
															}}
															_hover={{
																border: "none",
																background:
																	"transparent",
															}}
															_active={{
																border: "none",
																outline: "none",
																background:
																	"transparent",
															}}
														>
															{show ? (
																<BsEyeFill />
															) : (
																<BsEyeSlashFill />
															)}
														</Button>
													</InputRightElement>
												</InputGroup>
												<FormErrorMessage>
													{}
												</FormErrorMessage>
											</FormControl>
										</VStack>
									)}
								</Field>
								<Checkbox
									defaultChecked
									// bg={"#9191DB"}
									colorScheme={"purple"}
									color="#A8D8D8"
									mt="12px"
									mb="34px"
								>
									Remember me
								</Checkbox>
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
									mb="20px"
									display={"block"}
									isLoading={props.isSubmitting}
									type="submit"
								>
									Sign up
								</Button>
								<Box
									as="p"
									textAlign={"center"}
									mx="auto"
									mb="48px"
								>
									Already have an account?{" "}
									<Box
										as="span"
										textDecoration={"underline"}
										color="#01C8FF"
										cursor={"pointer"}
									>
										Sign in
									</Box>{" "}
								</Box>
							</Form>
						</Box>
					)}
				</Formik>
			</Box>
		</AuthLayout>
	);
};

export default Signup;
