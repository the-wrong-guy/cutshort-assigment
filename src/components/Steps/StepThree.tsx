import React from 'react';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';

const OptionCard = ({
   isActive,
   onClick,
   header,
   desc,
   icon,
}: {
   isActive: boolean;
   onClick: () => void;
   header: string;
   desc: string;
   icon: string;
}) => (
   <Box
      sx={{
         borderRadius: '4px',
         borderWidth: '1px',
         borderColor: isActive ? 'primary.main' : '#dddddd',
         borderStyle: 'solid',
         flex: 1,
      }}
   >
      <CardActionArea sx={{ borderRadius: '4px', p: 2 }} onClick={onClick}>
         <img
            src={`${icon}&color=${isActive ? '5a4ad1' : '000'}`}
            width="22"
            height="22"
            alt="option"
            className="mb-3"
         />
         <Typography variant="body2" fontWeight={600} gutterBottom>
            {header}
         </Typography>
         <Typography component={'p'} variant="caption" color="text.secondary" lineHeight={'1.125rem'}>
            {desc}
         </Typography>
      </CardActionArea>
   </Box>
);

export default function StepThree() {
   const [planningFor, setPlanningFor] = React.useState(1);
   return (
      <div className="grid gap-10 place-items-center">
         <div className="grid gap-2">
            <Typography variant="h5" align="center" fontWeight={600}>
               How are you planning to use Eden ?
            </Typography>
            <Typography variant="body2" align="center" color="text.secondary">
               We'll streamline your setup experience accordingly .
            </Typography>
         </div>
         <div className="flex gap-3 w-full md:w-[400px]">
            <OptionCard
               header="For myself"
               desc="Write better.Think more clearly. Stay Organized"
               isActive={planningFor === 1}
               icon={'https://s2.svgbox.net/hero-solid.svg?ic=user'}
               onClick={() => setPlanningFor(1)}
            />
            <OptionCard
               header="With my team"
               desc="Write docs, tasks &amp; projects, all in on place"
               isActive={planningFor === 2}
               onClick={() => setPlanningFor(2)}
               icon={'https://s2.svgbox.net/hero-solid.svg?ic=user-group'}
            />
         </div>
      </div>
   );
}
