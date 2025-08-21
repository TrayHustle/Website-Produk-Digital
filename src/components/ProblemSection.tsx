import { Card } from "@/components/ui/card";
import { Brain, Clock, Lightbulb } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Lightbulb,
      title: "\"Saya tidak punya ide produk\"",
      description: "Menciptakan konsep produk digital yang menguntungkan terasa mustahil ketika memulai dari nol."
    },
    {
      icon: Brain,
      title: "\"Saya tidak punya keahlian desain\"",
      description: "Membuat produk yang terlihat profesional memerlukan software mahal dan pengalaman desain bertahun-tahun."
    },
    {
      icon: Clock,
      title: "\"Saya tidak punya waktu\"",
      description: "Membangun bisnis produk digital dari nol membutuhkan bulan atau tahun kerja yang terdedikasi."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Tapi Kemudian{" "}
            <span className="text-destructive">Kenyataan</span>{" "}
            Menghantam...
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            kamu antusias dengan peluang ini, tapi kamu sadar ada hambatan besar yang halangin kamu untuk mulai
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <Card key={index} className="p-8 bg-gradient-card border-destructive/20 text-center space-y-6 hover:border-destructive/40 transition-all duration-300">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto">
                <problem.icon className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-xl font-bold text-destructive">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-6">
          <div className="max-w-3xl mx-auto p-8 bg-secondary/30 rounded-2xl border border-border/50">
            <h3 className="text-2xl font-bold mb-4">Terdengar Familiar?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Anda melihat potensinya. Anda menginginkan kebebasan. Tapi kesenjangan antara di mana Anda sekarang dan di mana Anda ingin berada terasa tidak dapat diatasi.
            </p>
            <p className="text-xl font-semibold text-primary">
              Bagaimana jika ada jalan pintas?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;