import {PasswordInputField, SingleSelectInputField, TextInputField} from "../../../components/form/inputField.tsx";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
        .email("Enter a valid email address")
        .required("Email is required"),
    password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm Password is required"),
    role: Yup.string().required("Role is required"),
});

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(RegisterSchema),
    });

    const handleFormSubmit = (data: any) => {
        console.log("Form Data Submitted: ", data);
        // Add form submission logic here (e.g., API call)
    };

    return (
        <div className="flex justify-between gap-4 mx-10 md:mx-20">
            {/* Left Section */}
            <div
                className="flex flex-col gap-2 mt-16 w-2/3 items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200 py-6 px-4 shadow-lg">
                <h1 className="text-3xl font-bold">Register</h1>
                <p className="text-gray-600 mt-2 text-sm text-left">
                    Register with us to get started.
                </p>
                <form
                    onSubmit={handleSubmit(handleFormSubmit)}
                    className="w-full px-4"
                >
                    <TextInputField
                        placeholder="Your Name"
                        label="Name"
                        type="text"
                        {...register("name")}
                        error={errors.name?.message}
                    />
                    <TextInputField
                        placeholder="Your Email"
                        label="Email"
                        type="email"
                        {...register("email")}
                        error={errors.email?.message}
                    />
                    <PasswordInputField
                        placeholder="Password"
                        label="Password"
                        type="password"
                        {...register("password")}
                        error={errors.password?.message}
                    />
                    <PasswordInputField
                        placeholder="Confirm Password"
                        label="Confirm Password"
                        type="password"
                        {...register("confirmPassword")}
                        error={errors.confirmPassword?.message}
                    />
                    <SingleSelectInputField
                        label="Choose an option"
                        options={["Teacher", "Student", "Other"]}
                        placeholder="Please select an option"
                        error={errors.role?.message}
                        {...register("role")}
                    />
                    <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mt-4 w-full">
                        Register
                    </button>
                </form>
            </div>

            {/* Right Section */}
            <div className="flex flex-col gap-2 mt-16 hover:translate-x-2 transition duration-300 w-1/3 mx-20">
                <div
                    className="flex gap-2 shadow-2xl py-10 px-4 bg-gradient-to-b from-gray-100 to-gray-200 justify-center items-center max-w-[400px]">
                    <p>
                        <span className="font-bold">Free</span>
                        <br/>
                        NPR
                    </p>
                    <div className="border-l-2 pl-2 border-gray-400 flex flex-col">
                        <span>2023-12-12</span>
                        <strong className="hover:underline cursor-pointer hover:text-green-600">
                            Sample Test 1
                        </strong>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
