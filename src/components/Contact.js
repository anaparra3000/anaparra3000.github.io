import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap font-mono">
          <div className="relative flex flex-wrap py-6">
            <div className="px-6 mt-4 lg:mt-0">
              <a className="text-indigo-400 leading-relaxed" href="mailto:anaparradev@gmail.com">shoot me an email</a>
              <h2 className="title-font font-semibold text-black tracking-widest text-xs mt-4">
                954-702-6434
              </h2>
            </div>
          </div>
        </div>
    </section>
  );
}