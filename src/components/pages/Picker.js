/* eslint-disable */
import React, { useState } from 'react';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

function Picker() {
  const [selectedDay, setSelectedDay] = useState();

  const footer = selectedDay ? (
    <p>{format(selectedDay, 'PPP')}.</p>
  ) : (
    <p>Please pick a day.</p>
  );

  return (
    <DayPicker
      mode="single"
      selected={selectedDay}
      onSelect={setSelectedDay}
      footer={footer}
    />
  );
}

export default Picker