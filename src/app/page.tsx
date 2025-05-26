"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DotPattern } from "@/components/ui/dot-pattern";
import { motion } from "framer-motion";
// Removed Embla import: import useEmblaCarousel from 'embla-carousel-react';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const heroImages = [
  { src: "/ss.png", alt: "App Screenshot 1", id: "ss" },
  { src: "/ss1.png", alt: "App Screenshot 2", id: "ss1" },
  { src: "/ss2.png", alt: "App Screenshot 3", id: "ss2" },
];

export default function Home() {
  // Removed Embla ref: const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="flex flex-col gap-20 ">
      {/* Hero Section */}
      <section className="w-full py-20 relative overflow-hidden ">
        {/* Hero-specific dot pattern */}
        <DotPattern 
          variant="center" 
          intensity="strong" 
          className="max-w"
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

        {/* Desktop Image Display Area (Existing Layout) - Hidden on mobile */}
        <div 
          className="relative max-w-5xl mx-auto mt-16 sm:mt-24 h-[600px] sm:h-[650px] hidden sm:block"
          style={{ clipPath: 'inset(-100vh -20px 0px -20px)' }}
        >
          {/* Image ss1.png (formerly Central, was ss.png) - Central, Front, Straight, Largest */}
          <motion.div 
            className="absolute left-1/2 top-0 -translate-x-1/2 transform rotate-0 w-96 h-[570px] sm:w-[420px] sm:h-[680px] bg-card rounded-xl border shadow-2xl p-1.5 overflow-hidden z-20"
            initial={{ zIndex: 20 }}
            whileHover={{ scale: 1.07, rotate: 1, y: -5 }} 
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image 
              src="/ss.png"
              alt="App Screenshot Central" 
              layout="fill" 
              objectFit="cover"
              style={{ objectPosition: "top" }}
              className="rounded-md" 
            />
          </motion.div>

          {/* Image ss.png (formerly Left, was ss1.png) - Behind, Left, Angled Initially */} 
          <motion.div 
            className="absolute left-1/2 top-0 -translate-x-[85%] sm:-translate-x-[90%] transform w-80 h-[512px] sm:w-96 sm:h-[570px] bg-card rounded-xl border shadow-xl p-1.5 overflow-hidden z-10"
            initial={{ rotate: -15, zIndex: 10 }}
            whileHover={{ scale: 1.1, rotate: 0, y: -15, zIndex: 30 }}
            transition={{ type: "spring", stiffness: 250, damping: 22 }}
          >
            <Image 
              src="/ss1.png"
              alt="App Screenshot Left" 
              layout="fill" 
              objectFit="contain"
              className="rounded-md" 
            />
          </motion.div>

          {/* Image ss2.png - Behind, Right, Angled Initially */}
          <motion.div 
            className="absolute left-1/2 top-0 translate-x-[-15%] sm:translate-x-[-10%] transform w-80 h-[512px] sm:w-96 sm:h-[570px] bg-card rounded-xl border shadow-xl p-1.5 overflow-hidden z-10"
            initial={{ rotate: 15, zIndex: 10 }}
            whileHover={{ scale: 1.1, rotate: 0, y: -15, zIndex: 30 }}
            transition={{ type: "spring", stiffness: 250, damping: 22 }}
          >
            <Image 
              src="/ss2.png"
              alt="App Screenshot Right" 
              layout="fill" 
              objectFit="contain"
              className="rounded-md" 
            />
          </motion.div>
          
          {/* Decorative blurs - repositioned */}
          <div className="absolute -z-10 top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute -z-10 bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-60"></div>
        </div>

        {/* Mobile Image Slider (SwiperJS) - Hidden on sm and larger */}
        <div className="mt-16 block sm:hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]} // Add modules
            spaceBetween={20} // Space between slides
            slidesPerView={1} // Show one slide at a time
            navigation // Enable navigation arrows (optional)
            pagination={{ clickable: true }} // Enable clickable pagination dots
            loop={true} // Enable continuous loop mode
            autoplay={{ delay: 4000, disableOnInteraction: false }} // Autoplay configuration
            className="max-w-md mx-auto rounded-xl hero-mobile-swiper" // Added hero-mobile-swiper class
          >
            {heroImages.map((img, index) => (
              <SwiperSlide key={img.id || index} className="p-2">
                <motion.div
                  className="relative w-full h-[520px] bg-card rounded-xl border shadow-xl p-1.5 overflow-hidden"
                  whileHover={{ scale: 1.03, y: -3 }} // Optional: keep framer-motion hover effect
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    layout="fill"
                    objectFit="cover"
                    style={{ objectPosition: "top" }}
                    className="rounded-md"
                    priority={index === 0}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 relative">
        {/* Feature section dot pattern */}
        <DotPattern
          variant="center"
          intensity="light"
          className="max-w-6xl"
        />        
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
        <div className="container mx-auto px-4 relative z-10">
          <Card className="max-w-3xl mx-auto border shadow-md backdrop-blur-sm bg-white/80">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Get Started Today</CardTitle>
              <CardDescription className="text-base">
                Download the Tabs Link Sharing extension for your browser and start sharing tabs effortlessly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-8">
                <Link href="https://github.com/murathanje/Tab-Links" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" asChild className="flex items-center gap-2 shadow-lg hover:shadow-xl transition-all">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="7 10 12 15 17 10"/>
                        <line x1="12" x2="12" y1="15" y2="3"/>
                      </svg>
                      Download Extension
                    </div>
                  </Button>
                </Link>
              </div>
              
              <Separator className="my-6" />
              
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
            <Link href="https://github.com/murathanje/Tab-Links" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="mt-6" asChild>
                <div>
                  <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View on GitHub
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
