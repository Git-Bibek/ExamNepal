import React from "react";

interface TextInputFieldProps {
    error?: string;
    icon?: React.ReactNode;
    label?: string;
    placeholder: string;
    type?: string;
}



const TextInputField: React.FC<TextInputFieldProps> = ({
                                                           label,
                                                           placeholder,
                                                           type = "text",
                                                           icon,
                                                           error,
                                                       }) => {
    return (
        <div className="w-full py-1">
            {label && (
                <label
                    htmlFor="input-field"
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
                    id="input-field"
                    type={type}
                    placeholder={placeholder}
                    className={`block w-full text-sm border rounded-lg p-2.5 transition-colors duration-200 outline-none 
                        ${icon ? "pl-10" : "px-4"} 
                        ${error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-green-500 focus:border-green-500"}
                    `}
                />
            </div>

            {error && (
                <p className="mt-1 text-sm text-red-600">{error}</p>
            )}
        </div>
    );
};



export {TextInputField};
