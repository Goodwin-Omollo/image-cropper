"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Separator } from "./ui/separator";

const CodeBlock = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative mt-4 mb-8 rounded-lg bg-zinc-950 p-4 border dark:border-zinc-800">
      <button
        onClick={copyToClipboard}
        className="absolute right-4 top-4 text-zinc-400 hover:text-zinc-50 transition-colors cursor-pointer"
        aria-label="Copy code"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </button>
      <pre className="overflow-x-auto text-sm text-zinc-50 font-mono">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const SetUp = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-12 w-full py-8">
      <div className="flex-1 space-y-8 min-w-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-6">Setup</h1>
          <Separator />
        </div>

        <section>
          <h2 className="text-xl font-semibold mb-4">1. Prerequisites</h2>
          <p className="text-muted-foreground mb-4">
            Ensure you have Bun installed on your machine.
          </p>
          <CodeBlock code="curl -fsSL https://bun.sh/install | bash" />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">2. Installation</h2>
          <p className="text-muted-foreground mb-4">
            Clone the repository and install dependencies:
          </p>
          <CodeBlock
            code={`git clone https://github.com/goodwin-omollo/image-cropper.git\ncd image-cropper\nbun install`}
          />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">3. Development</h2>
          <p className="text-muted-foreground mb-4">
            Launch the development server:
          </p>
          <CodeBlock code={`bun run dev`} />
          <p className="text-muted-foreground mt-4">
            Open{" "}
            <a
              href="http://localhost:3000"
              className="text-primary hover:underline font-medium"
              target="_blank"
              rel="noreferrer"
            >
              http://localhost:3000
            </a>{" "}
            to view the app.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">4. Build & Production</h2>
          <p className="text-muted-foreground mb-4">
            To create an optimized production build:
          </p>
          <CodeBlock code={`bun run build\nbun start`} />
        </section>
      </div>
    </div>
  );
};

export default SetUp;
