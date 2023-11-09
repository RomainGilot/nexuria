export function FormAddClient({name, label, formData, handleInputChange, required}) {
    return(
        <div className="mt-2 flex items-center">
            <div className="w-1/6">
                <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">{label} {required ? <span className="text-red-500">*</span> : ""}</label>
            </div>
            <div className="mt-2 ml-5 w-1/6">
                <input 
                    type="text" 
                    name={name} 
                    id={name} 
                    className={`block w-50 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                    placeholder={label}
                    value={formData} 
                    onChange={handleInputChange}
                />
            </div>
        </div>
    )
}