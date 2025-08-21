import { Card } from "@/components/ui/card";
import { Check, Package, FileText, Megaphone, Headphones, Zap, Shield } from "lucide-react";

const ProductDetails = () => {
  const features = [
    {
      icon: Package,
      title: "Katalog Produk Siap Jual",
      description: "100+ produk digital berkualitas tinggi di berbagai niche trending seperti video editing, template desain, dan kursus online."
    },
    {
      icon: Shield,
      title: "Lisensi Master Resale Rights",
      description: "Hak legal untuk menjual setiap produk dan menyimpan 100% keuntungan. Tanpa royalti, tanpa biaya berulang, tanpa batasan."
    },
    {
      icon: Megaphone,
      title: "Materi Promosi Siap Pakai",
      description: "Halaman penjualan profesional, template email, grafis media sosial, dan copy marketing untuk setiap produk."
    },
    {
      icon: FileText,
      title: "Panduan Setup Bisnis Lengkap",
      description: "Tutorial langkah demi langkah untuk setup toko online, pemrosesan pembayaran, dan manajemen pelanggan."
    },
    {
      icon: Zap,
      title: "Sistem Pengiriman Instan",
      description: "Setup pengiriman digital otomatis sehingga pelanggan menerima produk segera setelah pembelian."
    },
    {
      icon: Headphones,
      title: "Dukungan & Update Berkelanjutan",
      description: "Akses ke komunitas privat kami dan update produk reguler untuk menjaga katalog Anda tetap segar."
    }
  ];

  const bonuses = [
    "Video Training: Cara Scale ke Rp 150 Juta/Bulan",
    "Akses Grup Mastermind Facebook Privat",
    "Template Legal & Syarat Layanan",
    "Playbook Strategi Harga",
    "Template Email Customer Service"
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Apa yang Ada di Dalam{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              TrayHustle Business Pack
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Semua yang Anda butuhkan untuk meluncurkan dan mengembangkan bisnis produk digital Anda, dikirimkan dalam satu paket komprehensif.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 space-y-4 group">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bonus Section */}
        <Card className="p-8 bg-gradient-card border-primary/20 shadow-glow">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-primary font-semibold">Bonus Waktu Terbatas</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold">
              Plus Bonus Eksklusif Ini
              <span className="text-primary"> (Senilai Rp 37,5 Juta)</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {bonuses.map((bonus, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-primary/5 rounded-lg">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-medium">{bonus}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Value Statement */}
        <div className="mt-16 text-center space-y-6">
          <div className="inline-flex items-center space-x-4 bg-secondary/30 px-8 py-4 rounded-full">
            <div className="text-center">
              <div className="text-sm text-muted-foreground">Nilai Total Paket</div>
              <div className="text-2xl font-bold text-primary">Rp 375 Juta+</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground">Investasi Anda</div>
              <div className="text-2xl font-bold">Hanya Rp 50.000</div>
            </div>
          </div>
          <p className="text-muted-foreground">
            Itu lebih murah dari biaya satu desain logo freelance, tapi memberikan Anda seluruh bisnis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;