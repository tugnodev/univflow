import React, { useRef, useEffect } from 'react';

const daysOfWeek = [
  { label: 'L', name: 'Lundi' },
  { label: 'M', name: 'Mardi' },
  { label: 'M', name: 'Mercredi' },
  { label: 'J', name: 'Jeudi' },
  { label: 'V', name: 'Vendredi' },
  { label: 'S', name: 'Samedi' },
  { label: 'D', name: 'Dimanche' },
];

const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 0; hour < 24; hour++) {
    slots.push(`${hour.toString().padStart(2, '0')}:00`);
    slots.push(`${hour.toString().padStart(2, '0')}:30`);
  }
  return slots;
};

const timeSlots = generateTimeSlots();

export default function Schedule() {
  const containerRef = useRef<HTMLDivElement>(null);
  const eightRef = useRef<HTMLTableRowElement>(null);

  useEffect(() => {
    if (eightRef.current && containerRef.current) {
      // scroll la ligne 08:00 dans la vue du container
      eightRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-x-auto overflow-y-scroll flex flex-col max-h-[450px] md:max-w-3xl border-2 border-primary/50 rounded-xl"
    >
      <table className="table table-zebra min-w-[700px] w-full rounded-lg bg-base-100 shadow">
        <thead className='sticky top-0 z-50'>
          <tr>
            <th className="sticky left-0 z-50"></th>
            {daysOfWeek.map((day, idx) => (
              <th
                key={day.name + idx}
                className="px-1 py-1 bg-primary/10 text-primary font-semibold text-center max-w-[20px]"
              >
                {day.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((slot) => (
            <tr
              key={slot}
              ref={slot === '07:00' ? eightRef : undefined}
            >
              <td className="sticky left-0 z-10 px-2 py-1 font-medium text-base-content text-sm min-w-[60px]">
                {slot}
              </td>
              {daysOfWeek.map((day, idx) => (
                <td
                  key={day.name + idx + slot}
                  className="h-7 min-w-[100px] hover:bg-primary/10 transition-colors"
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
