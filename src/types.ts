export interface ITextField extends React.InputHTMLAttributes<HTMLInputElement> {
   label?: string;
   labelHelperText?: string;
   labelClassName?: string;
   containerClassName?: string;
}

export interface IStepIcon {
   index: number;
   completed: boolean;
   active: boolean;
}
