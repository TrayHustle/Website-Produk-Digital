import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Star } from "lucide-react";

const SolutionSection = () => {
  const handleScrollToPricing = () => {
    const el = document.getElementById("pricing");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary-glow/5 rounded-full blur-xl"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ini Dia <span className="text-primary">Jalan Pintasnya</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Gimana kalau kamu bisa lewatin bulan-bulan pembuatan produk, software mahal, dan kurva pembelajaran yang curam? gimana kalau kamu bisa mulai menjual produk digital hari ini?
            </p>
          </div>

          <Card className="p-10 bg-gradient-card border-primary/20 shadow-glow max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-2">
                <Star className="h-8 w-8 text-primary" />
                <h3 className="text-3xl font-bold">TrayHustle Business Pack</h3>
                <Star className="h-8 w-8 text-primary" />
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Aku udah ngelakuin semua pekerjaan beratnya buat kamu. Aku udah sediain produk-produk digital kekinian siap jual, yang bisa kamu jual <span className="text-primary font-semibold">hari ini juga</span>
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">Rp 0</div>
                  <div className="text-sm text-muted-foreground">Biaya Berkelanjutan</div>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Keuntungan Kamu</div>
                </div>
              </div>
              
              <div className="pt-6">
                <Button onClick={handleScrollToPricing} variant="cta" size="xl" className="w-full md:w-auto">
                  Mulai Jual Sekarang
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;