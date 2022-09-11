import Typography from '@mui/material/Typography';
import { ITextField } from '../types';

const URLField = (props: ITextField) => {
   const { label, labelClassName, containerClassName, labelHelperText, required, id, ...rest } = props;
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
               {label} {required && <sup className="text-[#E01D1D]">*</sup>}{' '}
               <span className="text-[#d3d0d0]">{labelHelperText}</span>
            </Typography>
         )}

         <div
            className="flex items-center text-[.8125rem] rounded-md"
            style={{ color: 'rgb(141 141 141 / 58%)', border: `.0625rem solid rgb(0 0 0 / 9%)` }}
         >
            <div className="p-3 bg-[#efefef78]" style={{ borderRight: '1px solid rgb(0 0 0 / 9%)' }}>
               www.eden.com/
            </div>
            <input
               id={id}
               style={{
                  padding: '.75rem',
                  boxSizing: 'border-box',
                  width: '100%',
               }}
               required={required}
               {...rest}
            />
         </div>
      </div>
   );
};

export default URLField;
