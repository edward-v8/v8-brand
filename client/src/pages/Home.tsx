import { Card } from "@/components/ui/card";
import logoColor from "@assets/Verify 8 Logo-v2(Color)_1763976002991.png";
import logoHorizontalColor from "@assets/v8_Horizontal_Logo-v2(Color)_1763976002994.png";
import logoNoLabel from "@assets/Verify 8 Logo-v2_noLabel_1763976002995.png";
import logoHorizontalWhite from "@assets/v8_Horizontal_Logo-v2(White)_1763976002995.png";
import logoWhite from "@assets/Verify 8 Logo-v2(White)_1763976002995.png";

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
                  <div className="text-center">
                    <div className="bg-white p-8 rounded-lg border mb-2 flex items-center justify-center min-h-[200px]">
                      <img src={logoColor} alt="Verify8 Logo Color" className="h-32" />
                    </div>
                    <p className="text-sm text-muted-foreground">Primary Logo (Color)</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white p-8 rounded-lg border mb-2 flex items-center justify-center min-h-[200px]">
                      <img src={logoHorizontalColor} alt="Verify8 Horizontal Logo" className="h-16" />
                    </div>
                    <p className="text-sm text-muted-foreground">Horizontal Logo (Color)</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gray-900 p-8 rounded-lg border mb-2 flex items-center justify-center min-h-[200px]">
                      <img src={logoWhite} alt="Verify8 Logo White" className="h-32" />
                    </div>
                    <p className="text-sm text-muted-foreground">Primary Logo (White)</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gray-900 p-8 rounded-lg border mb-2 flex items-center justify-center min-h-[200px]">
                      <img src={logoHorizontalWhite} alt="Verify8 Horizontal Logo White" className="h-16" />
                    </div>
                    <p className="text-sm text-muted-foreground">Horizontal Logo (White)</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white p-8 rounded-lg border mb-2 flex items-center justify-center min-h-[200px]">
                      <img src={logoNoLabel} alt="Verify8 Icon Only" className="h-32" />
                    </div>
                    <p className="text-sm text-muted-foreground">Icon Only (No Label)</p>
                  </div>
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
