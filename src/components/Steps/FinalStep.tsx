import React from 'react';
import Typography from '@mui/material/Typography';

export default function FinalStep() {
   return (
      <div className="flex flex-col items-center gap-10">
         <div className="bg-[#5a4ad1] rounded-full p-3">
            <img
               src="https://s2.svgbox.net/hero-solid.svg?ic=check&color=fff"
               width="22"
               height="22"
               alt="steps-completed"
            />
         </div>
         <div>
            <Typography variant="h5" align="center" fontWeight={600} gutterBottom>
               Congratulations , Eren !
            </Typography>
            <Typography variant="body2" align="center" color="text.secondary">
               You have completed onboarding , you can start using the Eden !
            </Typography>
         </div>
      </div>
   );
}
