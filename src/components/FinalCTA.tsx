import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Clock, TrendingUp, Users } from "lucide-react";

const FinalCTA = () => {
  const stats = [
    { icon: Users, value: "2,847", label: "Pelanggan Bahagia" },
    { icon: TrendingUp, value: "Rp 18M+", label: "Pendapatan Siswa yang Dihasilkan" },
    { icon: Clock, value: "< 24jam", label: "Rata-rata Waktu Penjualan Pertama" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5"></div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center space-y-12">
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Main CTA Card */}
          <Card className="p-12 bg-gradient-card border-primary/20 shadow-glow">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                  Kerajaan Digital Anda{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Dimulai Hari Ini
                  </span>
                </h2>
                
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Sementara yang lain menghabiskan bulan-bulan membuat produk pertama mereka, Anda akan memiliki seluruh katalog 
                  siap jual dalam 5 menit ke depan. Pertanyaannya bukan apakah ini berhasil—tetapi apakah 
                  Anda akan bertindak selagi kesempatan ini masih tersedia.
                </p>
              </div>

              <div className="space-y-6">
                <Button variant="hero" size="xl" className="group animate-pulse">
                  Mulai Bisnis Saya Sekarang!
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>✅ Akses instan ke paket bisnis lengkap</p>
                  <p>✅ Garansi uang kembali 30 hari</p>
                  <p>✅ Bergabung dengan 2,847+ digital entrepreneur sukses</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Final Message */}
          <div className="space-y-6">
            <div className="max-w-3xl mx-auto p-8 bg-secondary/20 rounded-2xl border border-border/50">
              <h3 className="text-2xl font-bold mb-4">
                Masih berpikir tentang hal ini?
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Setiap hari Anda menunggu adalah hari lain orang lain membangun bisnis digital yang bisa Anda miliki. 
                Waktu terbaik untuk menanam pohon adalah 20 tahun yang lalu. Waktu terbaik kedua adalah sekarang.
              </p>
              <div className="inline-flex items-center space-x-2 text-primary font-medium">
                <Clock className="h-4 w-4" />
                <span>Penawaran waktu terbatas berakhir dalam 47 jam</span>
              </div>
            </div>
            
            <p className="text-muted-foreground">
              Ada pertanyaan? Email kami di <span className="text-primary">support@trayhustle.com</span> • Kami biasanya merespons dalam 2 jam
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;