export const Slide9 = () => {
  return (
    <div
      className={`w-full flex flex-col items-center justify-start gap-32 p-32`}
      id={`slide-9`}
    >
      <span className={`text-6xl font-medium font-montserrat prose prose-code:text-indigo-500`}>
        Notes are assumed continuously pressed down until told otherwise. By
        merely feeding our model with all events, Its up to essentially the model to randomly generate the
        corresponding <code>NoteOff</code> event for the <code>NoteOn</code>{" "}
        event
      </span>
    </div>
  );
};
