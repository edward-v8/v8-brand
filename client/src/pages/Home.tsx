import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";
import logoColor from "@assets/Verify 8 Logo-v2(Color)_1763976002991.png";
import logoHorizontalColor from "@assets/v8_Horizontal_Logo-v2(Color)_1763976002994.png";
import logoNoLabel from "@assets/Verify 8 Logo-v2_noLabel_1763976002995.png";
import logoHorizontalWhite from "@assets/v8_Horizontal_Logo-v2(White)_1763976002995.png";
import logoWhite from "@assets/Verify 8 Logo-v2(White)_1763976002995.png";

function downloadAsset(url: string, filename: string) {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
}

const logos = [
  { src: logoColor, alt: "Verify8 Logo Color", label: "Primary Logo (Color)", bg: "bg-white", filename: "verify8-logo-color.png", imgClass: "h-32" },
  { src: logoHorizontalColor, alt: "Verify8 Horizontal Logo", label: "Horizontal Logo (Color)", bg: "bg-white", filename: "verify8-horizontal-color.png", imgClass: "h-16" },
  { src: logoWhite, alt: "Verify8 Logo White", label: "Primary Logo (White)", bg: "bg-gray-900", filename: "verify8-logo-white.png", imgClass: "h-32" },
  { src: logoHorizontalWhite, alt: "Verify8 Horizontal Logo White", label: "Horizontal Logo (White)", bg: "bg-gray-900", filename: "verify8-horizontal-white.png", imgClass: "h-16" },
  { src: logoNoLabel, alt: "Verify8 Icon Only", label: "Icon Only (No Label)", bg: "bg-white", filename: "verify8-icon.png", imgClass: "h-32" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <img src={logoHorizontalColor} alt="Verify8" className="h-10" />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="mb-8">
            <img src={logoColor} alt="Verify8 Logo" className="h-48 mx-auto mb-6" />
            <p className="text-xl text-muted-foreground">
              Never Trust. Always Verify.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Brand Assets</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Logo Variations</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {logos.map((logo) => (
                    <div key={logo.filename} className="text-center">
                      <div className={`${logo.bg} p-8 rounded-lg border mb-3 flex items-center justify-center min-h-[200px]`}>
                        <img src={logo.src} alt={logo.alt} className={logo.imgClass} />
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm text-muted-foreground">{logo.label}</p>
                        <Button
                          size="sm"
                          variant="outline"
                          data-testid={`button-download-${logo.filename}`}
                          onClick={() => downloadAsset(logo.src, logo.filename)}
                        >
                          <Download className="w-3 h-3 mr-1" />
                          PNG
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Brand Colors</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div>
                    <div className="h-24 rounded-lg bg-[#0BA5C9] mb-2"></div>
                    <p className="text-sm font-medium">Cyan</p>
                    <p className="text-xs text-muted-foreground">#0BA5C9</p>
                  </div>
                  <div>
                    <div className="h-24 rounded-lg bg-[#E8A638] mb-2"></div>
                    <p className="text-sm font-medium">Orange</p>
                    <p className="text-xs text-muted-foreground">#E8A638</p>
                  </div>
                  <div>
                    <div className="h-24 rounded-lg bg-[#6B7280] mb-2"></div>
                    <p className="text-sm font-medium">Gray</p>
                    <p className="text-xs text-muted-foreground">#6B7280</p>
                  </div>
                  <div>
                    <div className="h-24 rounded-lg bg-white border mb-2"></div>
                    <p className="text-sm font-medium">White</p>
                    <p className="text-xs text-muted-foreground">#FFFFFF</p>
                  </div>
                  <div>
                    <div className="h-24 rounded-lg bg-black mb-2"></div>
                    <p className="text-sm font-medium">Black</p>
                    <p className="text-xs text-muted-foreground">#000000</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Typography</h3>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Primary Font: Inter</p>
                  <p className="text-sm text-muted-foreground">Monospace Font: JetBrains Mono</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Tagline</h3>
                <p className="text-xl font-medium">Never Trust. Always Verify.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">About</h3>
                <p className="text-muted-foreground">
                  Verify8 is a Microsoft Solutions Partner helping businesses modernize their IT
                  infrastructure with certified expertise in Infrastructure, Data & AI, and Security.
                  We integrate cloud and AI technologies to make organizations more secure, efficient,
                  and future-ready.
                </p>
              </div>
            </div>
          </Card>

          <div className="text-center text-sm text-muted-foreground">
            <p>For official brand assets and guidelines, visit brand.verify8.com</p>
          </div>
        </div>
      </main>
    </div>
  );
}
