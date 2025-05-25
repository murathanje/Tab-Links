import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      {/* Hero Section */}
      <section className="py-20 relative">
        {/* Hero-specific dot pattern */}
        <DotPattern 
          variant="center" 
          intensity="strong" 
          className="max-w-6xl"
        />
        
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-foreground">
            Share Your Tabs <span className="text-primary">Effortlessly</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Convert all your open tabs into a single shareable link with our modern browser extension. Simple, secure, and synchronized.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-all">
              <Link href="#download">Get the Extension</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-all">
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-16 relative max-w-4xl mx-auto">
          <div className="bg-card rounded-lg border shadow-md p-2 overflow-hidden backdrop-blur-sm bg-white/80">
            <div className="aspect-video rounded bg-muted relative flex items-center justify-center">
              <p className="text-muted-foreground">Extension Screenshot</p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 relative">
        {/* Feature section dot pattern */}
        <DotPattern variant="right" intensity="medium" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium mb-4">Streamlined Tab Management</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our extension provides powerful features to help you manage and share your browsing sessions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <Card className="border shadow-sm hover:shadow-md transition-all bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <CardTitle>Tab Sharing</CardTitle>
                <CardDescription>
                  Share all open tabs with a single link, making collaboration seamless and efficient.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border shadow-sm hover:shadow-md transition-all bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <CardTitle>Cloud Storage</CardTitle>
                <CardDescription>
                  Store your tab collections securely in the cloud and access them from anywhere.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border shadow-sm hover:shadow-md transition-all bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <CardTitle>Easy Opening</CardTitle>
                <CardDescription>
                  Open multiple tabs with a single click using the shared link, saving time and effort.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-16 relative">
        {/* Download section dot pattern */}
        <DotPattern 
          variant="full" 
          intensity="strong" 
          className="[mask-image:linear-gradient(180deg,transparent,white_40%,transparent)]"
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <Card className="max-w-3xl mx-auto border shadow-md backdrop-blur-sm bg-white/80">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Get Started Today</CardTitle>
              <CardDescription className="text-base">
                Download the Tabs Link Sharing extension for your browser and start sharing tabs effortlessly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button className="flex items-center gap-2" variant="outline">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Chrome Web Store
                </Button>
                <Button className="flex items-center gap-2" variant="outline">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                  Firefox Add-ons
                </Button>
              </div>
              
              <Separator className="my-6" />
              
              <div className="text-center">
                <p className="text-muted-foreground mb-4">Already using the extension? Sign in to access your saved collections.</p>
                <Button variant="secondary">Sign In</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-muted/20 relative">
        {/* About section dot pattern */}
        <DotPattern variant="left" intensity="medium" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-medium mb-6">About the Project</h2>
            <p className="text-muted-foreground mb-6">
              Tabs Link Sharing is a modern browser extension that converts all open tabs into a single link
              and allows you to share this link with other users. It offers cloud storage, user authentication,
              and a seamless user experience.
            </p>
            <p className="text-muted-foreground">
              This project is open source and available on GitHub. Contributions are welcome!
            </p>
            <Button variant="outline" className="mt-6">
              <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
