import React, {useState} from "react";
import {FaCaretDown, FaEye} from "react-icons/fa6";
import {FaEyeSlash} from "react-icons/fa";

interface TextInputFieldProps {
    error?: string;
    icon?: React.ReactNode;
    label?: string;
    placeholder: string;
    type?: string;

    [key: string]: any;
}

const TextInputField = React.forwardRef<HTMLInputElement, TextInputFieldProps>(
    ({label, placeholder, type = "text", icon, error, ...props}, ref) => {
        return (
            <div className="w-full py-1">
                {label && (
                    <label
                        htmlFor={label}
                        className="block mb-2 text-sm font-medium text-gray-700"
                    >
                        {label}
                    </label>
                )}

                <div className="relative">
                    {icon && (
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            {icon}
                        </div>
                    )}
                    <input
                        id={label}
                        type={type}
                        placeholder={placeholder}
                        ref={ref} // Attach the ref here
                        {...props}
                        className={`block w-full text-sm border rounded-lg p-2.5 transition-colors duration-200 outline-none 
              ${icon ? "pl-10" : "px-4"} 
              ${error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-green-500 focus:border-green-500"}
            `}
                    />
                </div>

                {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
            </div>
        );
    }
);


const PasswordInputField = React.forwardRef<HTMLInputElement, TextInputFieldProps>(({
                                                                                        label,
                                                                                        placeholder,
                                                                                        type = "password",
                                                                                        icon,
                                                                                        error,
                                                                                        ...props
                                                                                    }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="w-full py-1">
            {label && (
                <label
                    htmlFor={label}
                    className="block mb-2 text-sm font-medium text-gray-700"
                >
                    {label}
                </label>
            )}

            <div className="relative">
                {icon && (
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        {icon}
                    </div>
                )}
                <input
                    id={label}
                    type={showPassword ? "text" : type}
                    placeholder={placeholder}
                    ref={ref}
                    {...props}
                    className={`block w-full text-sm border rounded-lg p-2.5 transition-colors duration-200 outline-none 
              ${icon ? "pl-10" : "px-4"} 
              ${error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-green-500 focus:border-green-500"}
            `}
                />

                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                    {
                        showPassword ? (
                            <FaEye/>
                        ) : (
                            <FaEyeSlash/>
                        )
                    }
                </button>
            </div>

            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
});


interface SingleSelectInputFieldProps {
    label?: string;
    placeholder: string;
    options: string[];
    error?: string;
    value?: string;

    [key: string]: any;
}

const SingleSelectInputField = React.forwardRef<HTMLSelectElement, SingleSelectInputFieldProps>(({
                                                                                                     label,
                                                                                                     options,
                                                                                                     error,
                                                                                                     placeholder,

                                                                                                     ...props
                                                                                                 }, ref) => {
    return (
        <>
            <div className="w-full py-1">
                {label && (
                    <label
                        htmlFor={label}
                        className="block mb-2 text-sm font-medium text-gray-700"
                    >
                        {label}
                    </label>
                )}
                <div className={'relative'}>
                    <select
                        id={label}
                        ref={ref}
                        {...props}
                        className={`block w-full text-sm border rounded-lg p-2.5 transition-colors duration-200 outline-none appearance-none
                         ${error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-green-500 focus:border-green-500"}
                    `}
                    >
                        <option value="" disabled selected hidden>
                            {placeholder}
                        </option>
                        {options.map((option: string) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>

                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <FaCaretDown/>
                    </div>

                </div>
                {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
            </div>
        </>)
});

export {TextInputField, PasswordInputField, SingleSelectInputField};
