import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { MenuIcon } from 'lucide-react';
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface HeaderProps {
  className?: string;
}

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#download", label: "Download" },
  { href: "#about", label: "About" },
];

const Header = ({ className }: HeaderProps) => {
  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", 
        className
      )}
    >
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-8 md:px-12">
        <Link href="/" className="flex items-center space-x-2.5">
          <Image 
            src="/icon.png" 
            alt="Tabs Link Sharing Icon" 
            width={32}
            height={32}
          />
          <span className="font-semibold text-lg text-foreground">
            Tabs Link Sharing
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm">
            <Link href="#download">Get Started</Link>
          </Button>
        </nav>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-6 w-6 text-muted-foreground" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle>
                <VisuallyHidden>Main Navigation Menu</VisuallyHidden>
              </SheetTitle>
              <div className="grid gap-6 p-6">
                <Link href="/" className="flex items-center space-x-2 mb-4">
                  <Image 
                    src="/icon.png" 
                    alt="Tabs Link Sharing Icon" 
                    width={28}
                    height={28}
                  />
                  <span className="font-semibold text-md text-foreground">
                    Tabs Link Sharing
                  </span>
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-4">
                  <Link href="#download">Get Started</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header; 