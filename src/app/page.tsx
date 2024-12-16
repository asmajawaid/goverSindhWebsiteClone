import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <main>
      {/* nav bar and home page */}
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/images/bg.jpeg')" }}
      >
        

        {/* apply section */}
        <div>
          <div>
            <section>
              <h1>Governor Sindh</h1>
              <h3>Kamran Khan Tessori</h3>
              <h3>Certified Cloud Applied Generative AI Engineer (GenEng)</h3>
              <h4>Earn up to $5,000 / month</h4>
              <h4>Now admissions are open in Hyderabad</h4>
              <div>
                <button>
                  <Link href="/apply">APPLY NOW</Link>
                </button>
                <div>
                  <div>562,143</div>
                  <div>Accepted Applications</div>
                </div>
              </div>
            </section>
            <section></section>
          </div>
        </div>
      </div>

      <div>
        <h1>
          Certified Cloud Applied Generative AI Engineer (GenEng) and
          Solopreneur Developing Billion-Dollar Valued Developers and
          Solopreneurs
        </h1>
        <p>
          The pace of technological change is accelerating, big players like
          Microsoft, Amazon, Google, and OpenAI are winning by providing
          infrastructure, large AI foundation models, frameworks, 3D Metaverse
          experiences, and massive distribution networks. Solopreneurs trained
          in this program will win by automating work typically outsourced to
          employees, by directly connecting to customers by eliminating the
          middleman, and by developing vertical metaverses, thus paving the way
          for the first billion-dollar valued solopreneur businesses. This
          program has the objective to train this new breed of billion-dollar
          solopreneurs. These solopreneurs will adopt the ultra-lean business
          model and work independently and will not need to hire employees or
          other team members.
        </p>
      </div>
    </main>
  );
}
