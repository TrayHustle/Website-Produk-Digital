import { Card } from "@/components/ui/card";
import { TrendingUp, DollarSign, Clock, Users } from "lucide-react";

const Educational = () => {
  const opportunities = [
    {
      icon: TrendingUp,
      title: "Pasar Pertumbuhan Eksplosif",
      description: "Pasar produk digital bernilai $300+ miliar dan tumbuh 15% setiap tahun"
    },
    {
      icon: DollarSign,
      title: "Margin Keuntungan 97%",
      description: "Buat sekali, jual tanpa batas dengan biaya operasional hampir nol"
    },
    {
      icon: Clock,
      title: "Pendapatan Pasif",
      description: "Hasilkan uang saat kamu tidur, bepergian, atau fokus pada prioritas lain"
    },
    {
      icon: Users,
      title: "Jangkauan Global",
      description: "Jual ke siapa saja, di mana saja di dunia dengan akses internet"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Peluang Emas dari{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Produk Digital
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sementara yang lain menukar jam kerja dengan uang, pengusaha cerdas membangun aset digital yang menghasilkan pendapatan sepanjang waktu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map((item, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-6 py-3 rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-primary font-medium">Lebih dari 4,9 miliar orang sedang online sekarang</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Educational; 