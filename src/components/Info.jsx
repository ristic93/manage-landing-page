import React from "react";

const Info = () => {
  return (
    <section className="info">
      <div className="flex-col md:flex md:flex-row justify-between container mx-auto md:space-x-20 py-20">
        <article className="basis-1/2">
          <h2 className="text-4xl text-center md:text-left font-bold text-primary-darkBlue">What's different about Manage?</h2>
          <p className="py-10 opacity-60 text-center md:text-left">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital products
            teams.
          </p>
        </article>
        <article className="basis-1/2">
          <div>
            <h3 className='text-2xl before:content-["01"] before:bg-primary-brightRed before:py-2 before:px-5 before:mr-5 before:rounded-[20px] before:text-neutral-white font-bold text-primary-darkBlue text-center md:text-left'>
              Track company-wide progress
            </h3>
            <p className="py-10 opacity-60 text-center md:text-left">
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way down to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>
          <div>
            <h3 className='text-2xl before:content-["02"] before:bg-primary-brightRed before:py-2 before:px-5 before:mr-5 before:rounded-[20px] before:text-neutral-white font-bold text-primary-darkBlue text-center md:text-left'>
              Advanced built-in reports
            </h3>
            <p className="py-10 opacity-60 text-center md:text-left">
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>
          <div>
            <h3 className='text-2xl before:content-["03"] before:bg-primary-brightRed before:py-2 before:px-5 before:mr-5 before:rounded-[20px] before:text-neutral-white font-bold text-primary-darkBlue text-center md:text-left'>
              Everything you need in one place
            </h3>
            <p className="py-10 opacity-60 text-center md:text-left">
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Info;
