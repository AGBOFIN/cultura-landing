import { Sprout } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    produit: [
      { name: "Fonctionnalités", href: "#features" },
      { name: "Tarifs", href: "#" },
      { name: "Témoignages", href: "#" },
    ],
    entreprise: [
      { name: "À propos", href: "#about" },
      { name: "Blog", href: "#" },
      { name: "Carrières", href: "#" },
    ],
    support: [
      { name: "Centre d'aide", href: "#" },
      { name: "Contact", href: "#contact" },
      { name: "FAQ", href: "#" },
    ],
    légal: [
      { name: "Politique de confidentialité", href: "#" },
      { name: "Conditions d'utilisation", href: "#" },
      { name: "Mentions légales", href: "#" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-cultiva-green rounded-lg flex items-center justify-center">
                <Sprout className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">CULTIVA</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              La solution moderne de gestion agricole adaptée aux réalités africaines.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Placeholders */}
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cultiva-green transition-colors cursor-pointer">
                <span className="text-sm">𝕏</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cultiva-green transition-colors cursor-pointer">
                <span className="text-sm">in</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cultiva-green transition-colors cursor-pointer">
                <span className="text-sm">f</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h3 className="font-semibold mb-4">Produit</h3>
            <ul className="space-y-3">
              {footerLinks.produit.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-3">
              {footerLinks.entreprise.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} CULTIVA. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            {footerLinks.légal.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
