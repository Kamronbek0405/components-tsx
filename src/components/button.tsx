import React from "react"

interface ButtonProps {
    onClick?: (e:React.MouseEvent<HTMLButtonElement>) => void;
    type?: "button" | "submit";
    children: React.ReactNode;
    className: string;
}

export const Button = ({children, onClick, type,  className}: ButtonProps) => {
  return (
    <button  onClick={onClick} className={className} type={type} >
        {children}
    </button>
  )
}
