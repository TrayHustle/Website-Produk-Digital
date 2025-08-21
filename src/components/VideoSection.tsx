import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-4xl">
                 <div className="text-center space-y-6 mb-12">
           <h2 className="text-3xl md:text-4xl font-bold">
            Lihat{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Potensi Luar Biasa
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dalam video ini kamu akan belajar menghasilkan uang dari produk digital. kamu akan mengetahui seberapa dasyatnya produk digital ini
          </p>
        </div>

        <Card className="overflow-hidden bg-gradient-card border-border/50 shadow-card">
          <div className="aspect-video bg-secondary/50 flex items-center justify-center relative group cursor-pointer">
            {/* Video Placeholder - Replace with actual video embed */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
            <div className="relative z-10 text-center space-y-4">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/30 transition-colors">
                <Play className="h-8 w-8 text-primary ml-1" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Tonton: Revolusi Produk Digital</h3>
                <p className="text-muted-foreground">12 menit yang bisa mengubah masa depan keuangan Anda</p>
              </div>
            </div>
            
            {/* Optional: Add actual video embed here
            <iframe 
              className="w-full h-full"
              src="YOUR_VIDEO_URL"
              title="TrayHustle Business Model Explanation"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            */}
          </div>
        </Card>

        
      </div>
    </section>
  );
};

export default VideoSection;