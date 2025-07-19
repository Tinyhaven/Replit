import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Package, Handshake, MessageCircle, Heart } from "lucide-react";

export default function GetInvolved() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-th-primary/10 to-th-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-th-slate mb-6">
              It Takes a Village to <span className="text-th-primary">Build a Haven.</span>
            </h1>
            <div className="text-xl text-th-slate/80 max-w-4xl mx-auto space-y-4">
              <p>
                At Tiny Haven Project, we believe everyone can be part of the solution. Whether you're swinging a hammer, 
                donating materials, sharing land, or just spreading the word — you're helping someone find home again.
              </p>
              <p className="text-th-primary font-semibold">
                Your time, your tools, your kindness — it all matters.
              </p>
            </div>
          </div>

          <div className="space-y-16">
            {/* Volunteer Section */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-4xl">🛠️</div>
                <h2 className="text-3xl font-bold text-th-slate">Volunteer With Us</h2>
              </div>
              <p className="text-lg text-th-slate/80 mb-6">
                Help us build tiny homes or support events and outreach. No construction experience required — just a heart to help.
              </p>
              <Link href="/contact">
                <Button className="bg-th-primary hover:bg-th-primary-dark text-white px-8 py-3">
                  Lend a Hand
                </Button>
              </Link>
            </div>

            {/* Donate Materials Section */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-4xl">🧰</div>
                <h2 className="text-3xl font-bold text-th-slate">Donate Materials or Tools</h2>
              </div>
              <div className="mb-6">
                <p className="text-lg text-th-slate/80 mb-4">We accept:</p>
                <ul className="text-th-slate/80 space-y-2">
                  <li className="flex items-center space-x-2">
                    <span className="text-th-primary">•</span>
                    <span>Recycled or unused building materials</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-th-primary">•</span>
                    <span>Power tools (in good condition)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-th-primary">•</span>
                    <span>Furniture, fixtures, or home goods</span>
                  </li>
                </ul>
                <p className="text-lg text-th-slate/80 mt-4">Have something to give?</p>
              </div>
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  className="border-2 border-th-green text-th-green hover:bg-th-green hover:text-white px-8 py-3"
                >
                  Donate Materials
                </Button>
              </Link>
            </div>

            {/* Host a Home Section */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-4xl">🏡</div>
                <h2 className="text-3xl font-bold text-th-slate">Host a Home / Share Your Land</h2>
              </div>
              <p className="text-lg text-th-slate/80 mb-6">
                Do you have a vacant lot, large yard, or unused RV hookup? Help us place a Tiny Haven safely and legally by partnering as a land host or donor.
              </p>
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  className="border-2 border-th-coral text-th-coral hover:bg-th-coral hover:text-white px-8 py-3"
                >
                  Become a Land Partner
                </Button>
              </Link>
            </div>

            {/* Connect Section */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-4xl">💬</div>
                <h2 className="text-3xl font-bold text-th-slate">Connect With Us</h2>
              </div>
              <p className="text-lg text-th-slate/80 mb-6">
                Want to brainstorm, collaborate, or invite us to speak? We'd love to hear from you.
              </p>
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  className="border-2 border-th-blue text-th-blue hover:bg-th-blue hover:text-white px-8 py-3"
                >
                  Let's Talk
                </Button>
              </Link>
            </div>

            {/* Other Ways to Help Section */}
            <div className="bg-gradient-to-r from-th-primary/5 to-th-secondary/5 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-4xl">🧡</div>
                <h2 className="text-3xl font-bold text-th-slate">Other Ways to Help</h2>
              </div>
              <ul className="text-lg text-th-slate/80 space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <span className="text-th-primary">•</span>
                  <span>Share our mission on social media</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-th-primary">•</span>
                  <span>Start a fundraiser</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-th-primary">•</span>
                  <span>Sponsor a home in honor of someone</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-th-primary">•</span>
                  <span>Invite your business, church, or club to get involved</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button 
                  className="bg-th-primary hover:bg-th-primary-dark text-white px-8 py-3"
                >
                  Support in Other Ways
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}