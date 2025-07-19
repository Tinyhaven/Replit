import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Blog() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-th-slate mb-6">
              Stories of <span className="text-th-primary">Hope</span>
            </h1>
            <p className="text-xl text-th-slate/80">Follow our journey as we build homes and transform lives.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-th-slate">
                What If Home Was Only 200 Square Feet — But Came With a New Future?
              </h2>
              <div className="text-lg text-th-slate/80 leading-relaxed space-y-4">
                <p>
                  At Tiny Haven Project, we believe that "small" doesn't mean "less." For a young woman 
                  escaping domestic violence, or a veteran sleeping in their car, 200 square feet can be everything.
                </p>
                <div className="font-medium space-y-1">
                  <p>It's safety.</p>
                  <p>It's privacy.</p>
                  <p>It's dignity.</p>
                </div>
                <p>
                  Our first build is underway — and we're documenting every step. From recycled doors to 
                  hand-painted finishes, we're proving that you don't need a million dollars to change a life.
                </p>
                <p className="text-th-primary font-semibold">
                  This is where stories start over — one tiny home at a time.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/donate">
                  <Button className="bg-th-primary hover:bg-th-primary-dark text-white px-6 py-3">
                    Help Build the Next One
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="link" className="text-th-primary hover:text-th-primary-dark">
                    Volunteer With Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
                alt="Tiny home construction progress"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
                  alt="Hand-painted finishes on tiny home"
                  className="rounded-lg shadow-md w-full h-32 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
                  alt="Recycled building materials"
                  className="rounded-lg shadow-md w-full h-32 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
