import React from 'react';
import Schedule from '../components/Schedule';
import AddShedule from '../components/addShedule';

export default function Timetable() {
  return (
    <div className="min-h-screen overflow-auto w-full bg-base-100 py-8 px-2 md:px-8 xl:ml-[84px] mb-20 xl:mb-0 flex flex-col gap-8">
      <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row gap-8">
        {/* Bloc emploi du temps */}
        <section className="border border-primary/50 flex-1 bg-white/80 dark:bg-base-100 rounded-2xl shadow-lg p-6 flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-primary tracking-tight">
            Emploi du temps
          </h1>
          <div className="flex-1">
            <Schedule />
          </div>
        </section>
        {/* Bloc ajout de cours */}
        <aside className="border border-primary/50 flex-1 max-w-xl w-full mx-auto bg-white/80 dark:bg-base-100 rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary tracking-tight">
            Ajouter un cours
          </h2>
          <AddShedule />
        </aside>
      </div>
    </div>
  );
}
