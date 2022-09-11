import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '../TextField';
import URLField from '../URLField';

export default function StepTwo() {
   return (
      <div className="grid gap-10 place-items-center">
         <div className="grid gap-2">
            <Typography variant="h5" align="center" fontWeight={600}>
               Let's set up a home for all your work
            </Typography>
            <Typography variant="body2" align="center" color="text.secondary">
               You can always create another workspace later .
            </Typography>
         </div>
         <div className="grid gap-4 w-full md:w-[400px]">
            <TextField label="Workspace Name" />
            <URLField label="Workspace URL" labelHelperText="(optional)" />
         </div>
      </div>
   );
}
