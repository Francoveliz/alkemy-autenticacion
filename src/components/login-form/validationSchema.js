import * as yup from "yup";

export const validationSchema = yup.object({
	email: yup
		.string()
		.required("Campo obligatorio")
		.email("Debe ser un correo electrónico valido"),
	password: yup.string().required("Campo obligatorio"),
});
