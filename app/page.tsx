import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">

      {/* === SECTION 1: Intro + Portrait === */}
      <section className="w-full max-w-5xl grid md:grid-cols-2 gap-8 py-16 px-6">
        {/* Left text */}
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold text-[#d37caa]">
            Denise Holman
          </h1>
          <h2 className="text-2xl font-semibold">Psychic / spiritual medium</h2>
          <p>
            Hello, I'm Denise Holman. For over 30 years I've had the privilege of connecting with the spirit world,  offering guidance, clarity and  comfort to those people seeking to bridge the gap between this life and the next. My journey has been one of   dedication -listening, learning and   refining my ability to deliver the sitters messages with clarity and compassion.
          </p>
          <p>
            Whether we connect in person, via WhatsApp video or Facetime, the         depth of the  experience remains     unchanged. Distance is no barrier to the energy of spirit, and I've found these virtual sessions to be just as profound as meeting face- to-face. My focus is always on creating  a space of trust, where healing and   understanding can unfold naturally.
          </p>
          <p>
            If a connection isn't made during our time together, we can reschedule at no additional cost, or I'll gladly provide a full refund-your peace of mind is my priority. This work is deeply personal to me, and I approach every session with the reverence and commitment it deserves.
          </p>
          <p>
            Whether you're seeking closure, a sense of direction, I'm here to help you interpret the messages spirit wishes to share.
          </p>
          <p>
            Preparing for a sitting. I suggest at least the night before asking for your loved ones in spirt  to make contact with us during the sitting to give their messages of support &  guidance.  They might make suggestions then its up to you to make your decisions as we all have free will.  There is no guarantee that anyone specific will be able to make contact.
          </p>
          <p>
            I hope you enjoy your sitting
          </p>
          <p>
            Denise Holman
          </p>
        </div>

        {/* Right portrait */}
        <div className="flex justify-center">
          <Image
            src="/images/portrait.jpg"
            alt="Portrait"
            width={500}
            height={600}
            className="object-cover"
          />
        </div>
      </section>

      {/* === SECTION 2: Services Blocks === */}
      <section className="w-full bg-blue-100 py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

          {/* Healing with trance + energy */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Healing with trance and energy</h2>
            <p>£40 session. £100 for 3.</p>
            <p>Further sessions 25% discount.</p>
          </div>

          {/* Psychic & Mediumistic sittings */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Psychic and mediumistic sittings</h2>
            <p>£40 session</p>
            <p>Returning clients receive 25% discount.</p>
            <p>
              Refer a friend — mention your name to receive £5 credit on
              completion of their first consultation.
            </p>
          </div>

        </div>
      </section>

      {/* === SECTION 3: Flowers + Healing Long Text === */}
      <section className="w-full max-w-5xl grid md:grid-cols-2 gap-8 py-16 px-6">

        {/* Left image */}
        <div className="flex justify-center">
          <Image
            src="/images/flowers.jpg"
            alt="Flowers"
            width={550}
            height={650}
            className="object-cover"
          />
        </div>

        {/* Right text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Healing with trance and energy</h2>
          <p>
            {/* Long description */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            euismod, massa eget commodo hendrerit...
          </p>
          {/* More paragraphs */}
          <button className="px-4 py-2 border rounded">
            Start Your Healing Journey
          </button>
        </div>

      </section>

      {/* === SECTION 4: Workshops + Candle Image === */}
      <section className="w-full max-w-5xl grid md:grid-cols-2 gap-8 py-16 px-6">

        {/* Workshops text */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Workshops and Classes</h2>
          <p>
            Learn and grow through groups that expand your spiritual knowledge.
          </p>
          <p>
            {/* More workshop info */}
            Exploring mediumship… small group circles… contact for details.
          </p>
        </div>

        {/* Candle image */}
        <div className="flex justify-center">
          <Image
            src="/images/workshop.jpg"
            alt="Candles"
            width={550}
            height={650}
            className="object-cover"
          />
        </div>

      </section>
      {/* === SECTION 3: Flowers + Healing Long Text === */}
      <section className="w-full bg-blue-100 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="w-1/2 ml-auto">
            <h2 className="text-2xl font-semibold">Get in touch
            </h2>
            <p>Telephone: 07957603325</p>
            <p>E-mail: d-holman1@sky.com</p>
            <p>Address: Torquay, Devon, United Kingdom</p>
          </div>
        </div>
      </section>
    </main>
  );
}
