

    interface inputType {
    type: string;
    name: string; 
    className: string;
    register: Function; 
    placeholder: string
    }

    export const Input = ({ type, name, className, register, placeholder }: inputType) => {
    return (
        <label>
        <input type={type} className={className}  {...register(name)} placeholder={placeholder} required />
        </label>
    );
    };
