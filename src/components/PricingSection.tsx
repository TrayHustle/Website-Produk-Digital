import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const PricingSection = () => {
  const features = [
    "Akses Produk Digital Premium siap jual",
    "Bundle 3 produk digital kekinian",
    "8000+ asset editing",
    "8000+ video affiliate",
    "8000+ video short & reels",
    "E-book panduan jualan produk digital"
  ];
  const ctaUrl = "http://lynk.id/trayhustle/wq130k4ozl1p";

  return (
    <section id="pricing" className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Mulai Jualan Digital{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Tanpa Ribet
            </span>
          </h2>
        </div>

        {/* Single Glassmorphism Card */}
        <div className="flex justify-center">
          <Card className="relative p-12 md:p-16 w-full max-w-2xl rounded-2xl bg-white/10 backdrop-blur-xl ring-1 ring-blue-300/25 shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
            <div className="text-center space-y-8">
              {/* Title */}
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                  TrayHustle Business Pack
                </h3>
                <p className="text-base md:text-lg text-white/70">
                  Investasi Satu Kali, Untung Berkali-kali
                </p>
              </div>

              {/* Pricing */}
              <div className="space-y-3">
                <div className="flex flex-col items-center justify-center gap-1">
                  <span className="leading-none text-3xl md:text-4xl text-white/50 line-through">Rp 100.000</span>
                  <div className="leading-none text-4xl md:text-5xl font-extrabold text-blue-300 tracking-tight">
                    Rp 35.000
                  </div>
                </div>
                <p className="text-sm md:text-base text-white/60">Pembayaran sekali • Akses seumur hidup</p>
              </div>

              {/* Features */}
              <div className="space-y-3 max-w-md mx-auto">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-left">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-400/90">
                      <Check className="h-3.5 w-3.5 text-white" />
                    </span>
                    <span className="text-white/90 text-base">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-2">
                <Button
                  asChild
                  variant="default"
                  size="xl"
                  className="w-full rounded-xl bg-blue-500 hover:bg-blue-600 text-white border-0"
                >
                  <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                    Mulai Sekarang
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;