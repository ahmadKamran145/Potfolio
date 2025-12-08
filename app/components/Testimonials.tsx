import { Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const testimonials = [
  {
    name: "Ahmed Khan",
    title: "Founder, NovaLabs",
    quote:
      "We moved our entire engineering squad into Inceptum. The acoustics, bandwidth, and on-site support have rivaled dedicated HQ spaces.",
  },
  {
    name: "Sarah Ali",
    title: "Design Lead, Atelier",
    quote:
      "The natural light and hospitality make it easy to host clients. We close more business when we meet here.",
  },
  {
    name: "Hassan Raza",
    title: "CEO, Stackware",
    quote:
      "Flexible memberships let us scale from five to forty teammates without changing our address or dealing with landlords.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-[#101828]">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Community"
          title="Teams that thrive here"
          description="Startups, agencies, and enterprise pods choose Inceptum for reliability and experience-led design."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex gap-1 text-brand-rose">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm text-slate-200">
                “{testimonial.quote}”
              </p>
              <div className="mt-6">
                <p className="text-base font-semibold text-white">
                  {testimonial.name}
                </p>
                <p className="text-sm text-slate-400">{testimonial.title}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
