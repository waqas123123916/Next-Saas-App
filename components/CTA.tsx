import Image from "next/image";
import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Start Learning your Way.</div>
      <h2 className="text-3xl font-bold">
        Build and Personalize Learning Companion
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus beatae
        veniam consequuntur dicta?
      </p>
      <Image src={"/images/cta.svg"} alt="cta" width={362} height={232} />
      <button className="btn-primary">
        <Image src={"/icons/plus.svg"} alt="plus" width={14} height={14} />
        <Link href="/companions/new">Build a New Companion</Link>
      </button>
    </section>
  );
};

export default CTA;
