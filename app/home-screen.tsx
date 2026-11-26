"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import profile from "@/assets/profile-photo.jpg";
import { Button } from "@/components/Button/Button";
import { Navigation, type Language } from "@/components/Navigation/Navigation";
import { brandName, content, contactEmail } from "@/content/site";

const navIds = ["work", "about", "approach", "contact"] as const;

export function HomeScreen() {
  const [language, setLanguage] = useState<Language>("UA");
  const lang = language === "UA" ? "ua" : "en";
  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = language === "UA" ? "uk" : "en";
  }, [language]);

  return (
    <div className="flex min-h-svh flex-col">
      <Navigation
        brandName={brandName}
        language={language}
        onLanguageChange={setLanguage}
        activeId="work"
        items={t.nav.map((item, index) => ({
          id: navIds[index],
          label: item.label,
          href: item.href,
        }))}
      />

      <main className="animate-rise motion-reduce:animate-none flex flex-1 flex-col items-center justify-center gap-stack px-page-sm pt-section pb-section text-center md:px-page-md lg:px-page-lg">
        <Image
          src={profile}
          alt={t.hero.photoAlt}
          width={120}
          height={120}
          priority
          className="size-avatar aspect-avatar rounded-control border border-ink object-cover"
        />

        <div className="flex flex-col items-center gap-8">
          <h1 className="font-display text-heading font-normal lg:text-display">
            <span className="block">
              {t.hero.greeting}
              <em>{t.hero.name}</em>,
            </span>
            <span className="block">{t.hero.role}</span>
          </h1>
          <p className="max-w-prose text-lead">{t.hero.subtitle}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <Button href="#work">{t.hero.primaryAction}</Button>
          <Button href={`mailto:${contactEmail}`} variant="secondary">
            {t.hero.secondaryAction}
          </Button>
        </div>
      </main>
    </div>
  );
}
