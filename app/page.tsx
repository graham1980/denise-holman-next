import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">

      {/* === SECTION 1: Intro + Portrait === */}
      <section className="w-full max-w-5xl py-6 px-4">
        {/* Text + floating image */}
        <div className="space-y-4 relative">


          <h1 className="text-4xl font-semibold text-[#d37caa]">
            Denise Holman
          </h1>
          <h2 className="text-2xl font-semibold">Psychic / spiritual medium</h2>
          <Image
            src="/images/portrait.jpg"
            alt="Portrait"
            width={400}
            height={400}
            className="float-right w-48 h-48 object-cover rounded-lg ml-4 mb-4"
          />
          <p>
            Hello, I'm Denise Holman. For over 30 years I've had the privilege of connecting with the spirit world,  offering guidance, clarity and  comfort to those people seeking to bridge the gap between this life and the next. My journey has been one of   dedication -listening, learning and   refining my ability to deliver the      sitters messages with clarity and compassion.

          </p>

          <p>
            Whether we connect in person, via WhatsApp video or Facetime, the         depth of the  experience remains     unchanged. Distance is no barrier to the energy of spirit, and I've found these virtual sessions to be just as profound as meeting face- to-face. My focus is always on creating  a space of trust, where healing and   understanding can unfold naturally.

          </p>
          <p>If a connection isn't made during our time together, we can reschedule at no additional cost, or I'll gladly provide a full refund-your peace of mind is my priority. This work is deeply personal to me, and I approach every session with the reverence and commitment it deserves.

          </p>
          <p>Whether you're seeking closure, a sense of direction, I'm here to help you interpret the messages spirit wishes to share.

          </p>
          <p>Preparing for a sitting. I suggest at least the night before asking for your loved ones in spirt  to make contact with us during the sitting to give their messages of support &  guidance.  They might make suggestions then its up to you to make your decisions as we all have free will.  There is no guarantee that anyone specific will be able to make contact.

          </p>
          <p>I hope you enjoy your sitting

          </p>
          <p>Denise</p>
        </div>

        {/* Clear float so content after this section behaves normally */}
        <div className="clear-both"></div>
      </section>


      {/* === SECTION 2: Services Blocks === */}
      <section className="w-full bg-blue-100 py-6 px-4">
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
      <section className="w-full max-w-5xl grid md:grid-cols-2 gap-8 py-6 px-4">

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
            Healing has been part of my life for many years. I first trained with the National Federation of Spiritual healers[NFSH], qualifying in 2008 after 3 years of training and practice,  later becoming a Reiki practitioner in 2019. Alongside this, I've spent years developing my trance and trance healing work through courses at the Barbanell  Centre, Arthur Findlay college and with Carol Green[NCoSA]
          </p><p>
            For over 4 years I have been part of a small private circle who meet on a regular basis exploring, strengthening and understanding the many aspects of trancework.
          </p>
          <p>
            In each healing session, I work in     collaboration with my trance healing guides. Clients often report feeling deeply relaxed, refreshed or gently energised afterwards. This upliftment can help support the body's natural ability to heal. whether you are         experiencing a long term health issue or simply feeling low or out of balance.
          </p>
          <p>
            Trance healing may not always be           a cure, but it can make a difference in quality of life. The session itself is usually quite short, but I recommend allowing quiet time afterward, as its common to drift  into a restful sleep - a natural part of the healing process.   Sessions are available in person in Torquay or remotely online-distance is no barrier to this work.


          </p>
        </div>

      </section >

      {/* === SECTION 4: Workshops + Candle Image === */}
      < section className="w-full max-w-5xl grid md:grid-cols-2 gap-8 py-6 px-4" >

        {/* Workshops text */}
        < div className="space-y-4" >
          <h2 className="text-2xl font-semibold">Workshops and Classes</h2>
          <p>
            Learn and grow through groups that expand your spiritual knowledge.
          </p>
          <p>
            {/* More workshop info */}
            Exploring mediumship… small group circles… contact for details.
          </p>
        </div >

        {/* Candle image */}
        < div className="flex justify-center" >
          <Image
            src="/images/workshop.jpg"
            alt="Candles"
            width={550}
            height={650}
            className="object-cover"
          />
        </div >

      </section >
      {/* === SECTION 3: Flowers + Healing Long Text === */}
      < section className="w-full bg-blue-100 py-16 px-6" >
        <div className="max-w-5xl ml-auto ">
          <h2 className="text-2xl font-semibold">Contact Details</h2>
          <p>Telephone: 07957603325</p>
          <p>E-mail: d-holman1@sky.com</p>
          <p>Address: Torquay, Devon, United Kingdom</p>
        </div>
      </section >
    </main >
  );
}
