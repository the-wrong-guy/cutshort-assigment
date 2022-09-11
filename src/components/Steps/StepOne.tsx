import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '../TextField';

export default function StepOne() {
   return (
      <div className="grid gap-10">
         <div className="grid gap-2">
            <Typography variant="h5" align="center" fontWeight={600}>
               Welcome! First things first...
            </Typography>
            <Typography variant="body2" align="center" color="text.secondary">
               You can always change them, later.
            </Typography>
         </div>
         <div className="grid gap-4 w-full md:w-[400px]">
            <TextField label="Full Name" />
            <TextField label="Display Name" />
         </div>
      </div>
   );
}
