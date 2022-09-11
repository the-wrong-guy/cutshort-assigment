import Typography from '@mui/material/Typography';
import { ITextField } from '../types';

const TextField = (props: ITextField) => {
   const { label, labelClassName, containerClassName, required, id, ...rest } = props;
   return (
      <div className={`grid gap-2 text-xs ${containerClassName}`}>
         {label && (
            <Typography
               component={'label'}
               htmlFor={id}
               color="text.primary"
               variant="body2"
               fontWeight={500}
               className={labelClassName}
            >
               {label} {required && <sup className="text-[#E01D1D]">*</sup>}
            </Typography>
         )}

         <input
            id={id}
            style={{
               border: `.0625rem solid rgb(0 0 0 / 9%)`,
               borderRadius: '.375rem',
               padding: '.75rem',
               boxSizing: 'border-box',
               width: '100%',
               color: 'rgb(141 141 141 / 58%)',
               fontSize: '.8125rem',
            }}
            required={required}
            {...rest}
         />
      </div>
   );
};

export default TextField;
