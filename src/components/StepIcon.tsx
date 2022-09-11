import { IStepIcon } from '../types';

const StepIcon = ({ index, completed, active }: IStepIcon) => {
   return (
      <div
         style={{
            fontWeight: 600,
            border: '1px solid rgb(0 0 0 / 9%)',
            borderRadius: '100%',
            height: '30px',
            width: '30px',
            display: 'grid',
            placeItems: 'center',
            backgroundColor: completed || active ? '#5a4ad1' : '#fff',
            fontSize: '12px',
            color: completed || active ? '#fff' : '#686868',
         }}
      >
         {index + 1}
      </div>
   );
};

export default StepIcon;
