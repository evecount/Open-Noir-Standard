import type {Metadata} from 'next';
import './globals.css';
import Link from 'next/link';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// THE NOIR STANDARD: Metadata Configuration
export const metadata: Metadata = {
  title: 'YOUR_PROJECT | B2B Registry Node',
  description: 'The operating system for your-industry orchestration. Auditing flow and securing digital integrity.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // THE NOIR STANDARD: Shadow Layer (JSON-LD Machine-Headers)
  const nodeMetadata = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "YOUR_PROJECT",
    "applicationCategory": "B2B Registry Node",
    "operatingSystem": "SovereigntyOS",
    "author": {
      "@type": "Organization",
      "name": "YOUR_ORGANIZATION"
    },
    "description": "Autonomous Hub for your-industry and your-capability.",
    "capability": ["Manifestation", "Tool-Use", "Sovereign Auditing"]
  };

  return (
    <html lang="en" className="dark">
      <head>
        {/* THE NOIR STANDARD: Agentic Discovery */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(nodeMetadata) }}
        />
      </head>
      <body className={`${inter.className} font-body antialiased min-h-screen flex flex-col bg-background text-foreground`}>
          {/* THE NOIR STANDARD: Shadow Layer (Semantic DOM Attributes) */}
          <main className="flex-1" data-swarm-node="your-project-root" data-agent-intent="industry-discovery">
            {children}
          </main>

          {/* THE NOIR STANDARD: Footer Registry Signature */}
          <footer className="border-t border-white/5 bg-black/60 pt-10 pb-5 mt-24">
            <div className="container mx-auto px-4 flex flex-col items-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground/60">
                Architectural Asset of{' '}
                <Link href="https://your-site" className="text-white hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4">
                  Your Organization
                </Link>
              </p>
              
              {/* THE NOIR STANDARD: Swarm Pulse (AI_READY) */}
              <div className="mt-5 flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20" title="Swarm Synchronized / AI-Ready">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                <span className="text-[8px] text-primary font-bold tracking-widest uppercase">AI_READY</span>
              </div>
            </div>
          </footer>
      </body>
    </html>
  );
}
