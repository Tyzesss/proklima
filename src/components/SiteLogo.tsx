import { Snowflake } from "lucide-react";

import { LOGO_URL, SITE_NAME } from "@/lib/site";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  showName?: boolean;
};

export function SiteLogo({ className, showName = true }: SiteLogoProps) {
  return (
    <>
      {LOGO_URL ? (
        <img
          src={LOGO_URL}
          alt={SITE_NAME}
          className={cn("h-11 w-auto max-w-[12rem] object-contain object-left md:h-12 md:max-w-[14rem]", className)}
          width={224}
          height={48}
          decoding="async"
        />
      ) : (
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-accent text-white shadow-glow">
          <Snowflake className="h-5 w-5" />
        </div>
      )}
      {showName && !LOGO_URL ? (
        <span className="font-bold tracking-tight text-foreground">{SITE_NAME}</span>
      ) : null}
    </>
  );
}
