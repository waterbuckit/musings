const Intro = () => {
  return (
    <>
      <h1 className="font-display mt-14 text-4xl/tight font-light text-white">
        musings <span className="text-sky-300">for a starry starry night</span>
      </h1>
      <p className="mt-4 text-sm/6 text-gray-300">
        In October of 2022, we started writing together, this site is an archive
        of all our musings.{" "}
        <span className="text-sky-300">Stella is a prodigy</span>. I{"'"}ll hear
        nothing to the contrary.
      </p>
      <p className="mt-4 text-sm/6 text-gray-300 italic whitespace-pre">
        {`
        The book I've been reading
        rests on my knee. You sleep.

        It's beautiful out there -
        fields, little lakes and winter trees
        in February sunlight,
        every car park a shining mosaic.

        Long, radiant minutes,
        your hand in my hand,
        still warm, still warm.

        BY WENDY COPE
        `}
      </p>
    </>
  );
};

export default Intro;