import { RefObject } from "react";
import { Dropdown } from "react-day-picker";

export const useDropdownPosition = (
    ref: RefObject<HTMLDivElement | null> | RefObject<HTMLDivElement>
) =>{
    const getDropdownPosition = () =>{
        if(!ref.current) return {top: 0, left: 0};

        const rect = ref.current.getBoundingClientRect()
        const DropdownWidth =240;

        let left = rect.left + window.scrollX;
        const top = rect.bottom + window.scrollY;

        if(left + DropdownWidth > window.innerWidth){
            left = rect.right + window.scrollX - DropdownWidth;
            if(left <0){
               left = window.innerWidth - DropdownWidth-16; 
            }
        }
        if(left <0){
           left=16;
        }
        return {top, left};
    };
    return {getDropdownPosition};
}