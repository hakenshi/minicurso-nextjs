type InputProps = {
    name: string;
    label: string;
    type?: string
    required?: boolean
}
export default function Input({label, name, required = true, type = "text"}: InputProps) {
    return (
        <div className={"p-2"}>
            <label className="block font-medium text-gray-700" htmlFor={name}>{label}</label>
            <input className=" w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-violet-500 focus:border-2 focus:border-collapse focus:ring-violet-400 focus:transition-all focus:shadow-sm focus:shadow-violet-500"
                   required={required} name={name} id={name} type={type}/>
        </div>
    )
}
