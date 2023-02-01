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
	useToast,
	VStack,
} from "@chakra-ui/react";
import AuthLayout from "../../layout/AuthLayout";
import { useFormik } from "formik";
import SignUpValidationSchema from "../../utils/validator";
import { useState } from "react";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface MyFormValues {
	firstName: string;
	email: string;
	phoneNumber: string;
	password: string;
}

const Signup = () => {
	const navigate = useNavigate();

	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);

	const toast = useToast;

	const createNewUser = async (data: MyFormValues, resetForm: Function) => {
		try {
			// API call integration will be here. Handle success / error response accordingly.
			let result = await axios
				.post("https://falconlite.com/v1/api/send-email", data)
				.then((response) => {
					return response;
				});
			if (data) {
				// setFormStatus(formStatusProps.success)
				// axios.post()

				navigate("/verify-email");
				resetForm({});
			}
		} catch (error: any) {
			const response = error?.response;
			if (
				response?.data === "user already exist" &&
				response?.status === 400
			) {
				toast({
					title: "user already exist.",
					description: "try again",
					status: "error",
					duration: 6000,
					isClosable: true,
				});
			} else {
				// setFormStatus(formStatusProps.error)
			}
		} finally {
			// setDisplayFormStatus(true)
		}
	};

	const formik = useFormik({
		initialValues: {
			firstName: "",
			email: "",
			phoneNumber: "",
			password: "",
		},
		// validationSchema: SignUpValidationSchema,
		onSubmit: function (values, actions) {
			// console.log({ values, actions });
			createNewUser(values, actions.resetForm);
			setTimeout(() => {
				// alert(JSON.stringify(values, null, 2));
				actions.setSubmitting(false);
			}, 1000);
		},
	});

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
				<Box pr={{ base: "10px", md: "29px" }}>
					<form onSubmit={formik.handleSubmit}>
						<VStack spacing="18px">
							<FormControl>
								<FormLabel>First name</FormLabel>
								<Input
									name="firstName"
									size="lg"
									placeholder="Jeremiah"
									value={formik.values.firstName}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									// onChange={formik.handleChange}
								/>
								<FormErrorMessage>
									{formik.touched.firstName &&
										formik.errors.firstName}
								</FormErrorMessage>
							</FormControl>
							<FormControl>
								<FormLabel>Email Address</FormLabel>
								<Input
									name="email"
									size="lg"
									type="email"
									value={formik.values.email}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									placeholder="Fame@gmail.com"
								/>
								<FormErrorMessage>
									{formik.touched.email &&
										formik.errors.email}
								</FormErrorMessage>
							</FormControl>
							<FormControl>
								<FormLabel>Phone Number</FormLabel>
								<Input
									name="phoneNumber"
									size="lg"
									placeholder="+2348103769079"
									type="tel"
									value={formik.values.phoneNumber}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									// pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
								/>
								<FormErrorMessage>
									{formik.touched.email &&
										formik.errors.phoneNumber}
								</FormErrorMessage>
							</FormControl>
							<FormControl>
								<FormLabel>Password</FormLabel>
								<InputGroup size="lg">
									<Input
										name="password"
										value={formik.values.password}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										pr="4.5rem"
										type={show ? "text" : "password"}
										placeholder="Enter password"
									/>
									<InputRightElement width="4.5rem">
										<Button
											h="1.75rem"
											size="xs"
											onClick={handleClick}
											borderRadius="none"
											background="transparent"
											_focus={{
												border: "none",
												background: "transparent",
											}}
											_hover={{
												border: "none",
												background: "transparent",
											}}
											_active={{
												border: "none",
												outline: "none",
												background: "transparent",
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
									{formik.touched.email &&
										formik.errors.password}
								</FormErrorMessage>
							</FormControl>
						</VStack>
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
							_focus={{
								border: "none",
								outline: "none",
							}}
							_hover={{
								border: "none",
								outline: "none",
							}}
							height="50px"
							color="#4B4A4A"
							mx="auto"
							mb="20px"
							display={"block"}
							// isLoading={isSubmitting}
							// disabled={formik.isSubmitting}
							type="submit"
						>
							Sign up
						</Button>
						<Box as="p" textAlign={"center"} mx="auto" mb="48px">
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
					</form>
				</Box>
			</Box>
		</AuthLayout>
	);
};

export default Signup;
