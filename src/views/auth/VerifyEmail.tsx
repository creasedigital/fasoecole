import {
	Box,
	PinInput,
	PinInputField,
	HStack,
	Heading,
	Text,
	Button,
	useToast,
} from "@chakra-ui/react";
import {
	useFormik,
	Formik,
	FormikHelpers,
	FormikProps,
	Form,
	Field,
	FieldProps,
	validateYupSchema,
} from "formik";
import AuthLayout from "../../layout/AuthLayout";
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
	const [pinInputValue, setPinInputValue] = useState<string>("");

	const handlePinInputChange = (value: string) => {
		setPinInputValue(value);
	};

	const toast = useToast();
	const navigate = useNavigate();

	const verifyNewUser = async (data: string, resetForm: Function) => {
		try {
			// API call integration will be here. Handle success / error response accordingly.
			let result = await axios
				.post("https://falconlite.com/v1/api/verify-email", data)
				.then((response) => {
					console.log(response.status);
					console.log(response.data);
					return response;
				});

			console.log(result);
			if (data) {
				// setFormStatus(formStatusProps.success)
				// axios.post()

				// navigate("/login");
				resetForm({});
				toast({
					title: "Account created.",
					description: "We've created your account for you.",
					status: "success",
					duration: 9000,
					isClosable: true,
				});
			}
		} catch (error: any) {
			const response = error?.response;
			if (
				response?.data === "user already exist" &&
				response?.status === 400
			) {
				// setFormStatus(formStatusProps.duplicate)
				toast({
					title: "user already exist.",
					description: "try again",
					status: "error",
					duration: 6000,
					isClosable: true,
				});

				setTimeout(() => {
					navigate("/");
				}, 6000);
			} else {
				// setFormStatus(formStatusProps.error)
			}
		} finally {
			// setDisplayFormStatus(true)
		}
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
				<Formik
					initialValues={{ code: pinInputValue }}
					enableReinitialize={true}
					onSubmit={(values, actions) => {
						// console.log(values);
						verifyNewUser(values.code, actions.resetForm);
						setTimeout(() => {
							// alert(JSON.stringify(values, null, 2));
							actions.setSubmitting(false);
						}, 1000);
					}}
				>
					{() => (
						<Form>
							<Field name="code">
								{() => (
									<HStack
										justifyContent={"center"}
										mt={"120px"}
										mb={"152px"}
									>
										<PinInput
											autoFocus
											type="alphanumeric"
											mask
											// {...field}
											// colorScheme={"facebook"}
											// size="lg"
											value={pinInputValue}
											onChange={
												(e: string) =>
													handlePinInputChange(e)

												// console.log(e)
											}
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
								)}
							</Field>
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
								// onSubmit={handleSubmit}
							>
								Proceed
							</Button>
						</Form>
					)}
				</Formik>
			</Box>
		</AuthLayout>
	);
};

export default VerifyEmail;
