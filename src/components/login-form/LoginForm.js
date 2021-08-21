import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Stack,
	Button,
	useToast,
	Heading,
	useColorModeValue,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import InputAlert from "../InputAlert";
import { validationSchema } from "./validationSchema";
import axios from "axios";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
	const toast = useToast();
	const history = useHistory();

	const initialFormValues = {
		email: "",
		password: "",
	};

	const handleSubmit = async values => {
		try {
			const response = await axios.post(
				"http://challenge-react.alkemy.org",
				values
			);
			const token = response.data.token;
			localStorage.setItem("token", token);
			toast({
				title: "Éxito al iniciar sesión",
				status: "success",
				duration: 9000,
				isClosable: true,
			});
			history.push("/");
		} catch (error) {
			console.log(error);
			toast({
				title: "Correo electrónico o contraseña incorrectos",
				status: "error",
				duration: 9000,
				isClosable: true,
			});
		}
	};

	const handleInputError = (input, formik) => {
		if (formik.touched[input] && formik.errors[input]) {
			return <InputAlert text={formik.errors[input]} />;
		}
		return null;
	};

	const formik = useFormik({
		initialValues: initialFormValues,
		validationSchema: validationSchema,
		onSubmit: values => handleSubmit(values),
	});

	return (
		<Flex
			minH={"100vh"}
			align={"center"}
			justify={"center"}
			bg={useColorModeValue("gray.50", "gray.800")}>
			<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
				<Stack align={"center"}>
					<Heading fontSize={"4xl"}>Iniciar sesión</Heading>
				</Stack>
				<Box
					rounded={"lg"}
					bg={useColorModeValue("white", "gray.700")}
					boxShadow={"lg"}
					p={8}>
					<Stack spacing={4}>
						{/* email */}
						<FormControl id="email">
							<FormLabel>Correo electrónico</FormLabel>
							<Input
								value={formik.values.email}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								type="email"
							/>
							{handleInputError("email", formik)}
						</FormControl>
						{/* password */}
						<FormControl id="password">
							<FormLabel>Contraseña</FormLabel>
							<Input
								value={formik.values.password}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								type="password"
							/>
							{handleInputError("password", formik)}
						</FormControl>
						<Button
							bg={"blue.400"}
							color={"white"}
							onClick={formik.handleSubmit}
							_hover={{
								bg: "blue.500",
							}}>
							Enviar
						</Button>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
};

export default LoginForm;
