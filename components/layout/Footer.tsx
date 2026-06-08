export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h3 className="text-red-700 text-xl font-bold mb-3">
              Commander Electronics
            </h3>

            <p className="text-zinc-400 text-sm">
              Quality electrical tools, accessories, and equipment for
              electricians, technicians, and professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">
              Quick Links
            </h4>

            <ul className="space-y-2 text-zinc-400 text-sm">
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Categories</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-3">
              Categories
            </h4>

            <ul className="space-y-2 text-zinc-400 text-sm">
              <li>Power Tools</li>
              <li>Electrical Parts</li>
              <li>Tool Kits</li>
              <li>Accessories</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">
              Contact
            </h4>

            <ul className="space-y-2 text-zinc-400 text-sm">
              <li>📞 +233 XX XXX XXXX</li>
              <li>📧 info@commanderelectronics.com</li>
              <li>📍 Ghana</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 mt-10 pt-6 text-center text-zinc-500 text-sm">
          © 2026 Commander Electronics. All rights reserved.
        </div>

      </div>
    </footer>
  );
}