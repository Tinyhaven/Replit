import { Link } from "wouter";
import { Facebook, Instagram, Music2 as TikTok } from "lucide-react";
import logoImage from "@/assets/logo-transparent.svg";

export function Footer() {
  return (
    <footer className="bg-th-slate text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logoImage} alt="Tiny Haven Project" className="h-14 w-auto" style={{backgroundColor: 'transparent'}} />
              <div className="text-2xl font-serif font-bold">Tiny Haven Project</div>
            </div>
            <p className="text-white/70 text-sm">Building hope, one home at a time.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-th-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-th-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link href="/about">
                <a className="block text-white/70 hover:text-th-primary transition-colors">About Us</a>
              </Link>
              <Link href="/what-we-do">
                <a className="block text-white/70 hover:text-th-primary transition-colors">What We Do</a>
              </Link>
              <Link href="/donate">
                <a className="block text-white/70 hover:text-th-primary transition-colors">Donate</a>
              </Link>
              <Link href="/faq">
                <a className="block text-white/70 hover:text-th-primary transition-colors">FAQ</a>
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Get Involved</h4>
            <div className="space-y-2 text-sm">
              <Link href="/contact">
                <a className="block text-white/70 hover:text-th-primary transition-colors">Volunteer</a>
              </Link>
              <Link href="/contact">
                <a className="block text-white/70 hover:text-th-primary transition-colors">Partner With Us</a>
              </Link>
              <Link href="/contact">
                <a className="block text-white/70 hover:text-th-primary transition-colors">Host a Home</a>
              </Link>
              <Link href="/contact">
                <a className="block text-white/70 hover:text-th-primary transition-colors">In-Kind Donations</a>
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <div className="space-y-2 text-sm text-white/70">
              <p>St. Petersburg, Florida</p>
              <p>info@tinyhavenproject.org</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
          <p>&copy; 2024 Tiny Haven Project. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
