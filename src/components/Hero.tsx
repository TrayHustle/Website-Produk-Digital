import heroImage from "@/assets/atas.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
                                                                                                                       <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                   Bayangin Punya{" "}
                   <span className="bg-gradient-primary bg-clip-text text-transparent">
                     Aset Digital
                   </span>{" "}
                   Yang Ngasilin Uang Untuk Kamu{" "}
                   <span className="text-primary animate-glow">24/7</span>
                 </h1>
               <p className="text-xl text-muted-foreground leading-relaxed">
                 Stop tukar waktu kamu dengan uang. Mulai jual produk digital yang bisa ngasilin uang selagi kamu tidur.
               </p>
            </div>
            

          </div>

                     {/* Right Image */}
           <div className="relative ml-8">
             <div className="relative animate-float">
               <img 
                 src={heroImage} 
                 alt="Digital Assets Illustration" 
                 className="w-full h-auto rounded-2xl shadow-card"
               />
               <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
             </div>
             {/* Floating Elements */}
             <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary rounded-full opacity-20 animate-pulse"></div>
             <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-glow rounded-full opacity-30 animate-pulse delay-1000"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;