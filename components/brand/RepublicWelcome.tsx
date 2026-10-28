"use client";
import { useCallback, useEffect, useRef, useState } from "react";

// Turkey is UTC+3 year-round (no DST). The end instant is exclusive.
const CAMPAIGN_START = Date.parse("2026-10-28T00:00:00+03:00");
const CAMPAIGN_END = Date.parse("2026-10-30T00:00:00+03:00");
const STORAGE_KEY_PREFIX = "republic-welcome:2026-10-29:";
const DISPLAY_SECONDS = 10;
const CLOSE_ANIMATION_MS = 500;
const CLOCK_CHECK_MS = 1000;

const isCampaignActive = () => {
  const now = Date.now();
  return now >= CAMPAIGN_START && now < CAMPAIGN_END;
};

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function RepublicWelcome() {
  const [flagVisible, setFlagVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [remaining, setRemaining] = useState(DISPLAY_SECONDS);
  const forcedRef = useRef(false);
  const skipRef = useRef<HTMLButtonElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  const openWelcome = useCallback(() => {
    lastFocusedRef.current = document.activeElement as HTMLElement | null;
    setClosing(false);
    setRemaining(DISPLAY_SECONDS);
    setOpen(true);
  }, []);

  const closeWelcome = useCallback(() => {
    if (prefersReducedMotion()) {
      setOpen(false);
      return;
    }
    setClosing(true);
  }, []);

  // Eligibility, first-visit auto open, and the midnight cutoff.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const preview = params.get("preview") === "1";
    const test = params.get("test") === "1";
    forcedRef.current = preview || test;

    const sync = () => {
      const active = isCampaignActive();
      setFlagVisible(active || forcedRef.current);
      if (!active && !forcedRef.current) {
        setOpen(false);
        setClosing(false);
      }
    };

    if (preview || test) {
      openWelcome();
    } else if (isCampaignActive()) {
      const key = STORAGE_KEY_PREFIX + window.location.hostname;
      let seen = false;
      try {
        seen = window.localStorage.getItem(key) === "seen";
      } catch {
        /* storage unavailable: treat as first visit */
      }
      if (!seen) {
        openWelcome();
        try {
          window.localStorage.setItem(key, "seen");
        } catch {
          /* storage unavailable: the screen still works */
        }
      }
    }
    sync();
    const clock = window.setInterval(sync, CLOCK_CHECK_MS);
    return () => window.clearInterval(clock);
  }, [openWelcome]);

  // Auto close after the display time.
  useEffect(() => {
    if (!open || closing) return;
    const tick = window.setInterval(() => setRemaining((value) => Math.max(0, value - 1)), 1000);
    const timer = window.setTimeout(closeWelcome, DISPLAY_SECONDS * 1000);
    return () => {
      window.clearInterval(tick);
      window.clearTimeout(timer);
    };
  }, [open, closing, closeWelcome]);

  // Finish the closing animation.
  useEffect(() => {
    if (!closing) return;
    const timer = window.setTimeout(() => setOpen(false), CLOSE_ANIMATION_MS);
    return () => window.clearTimeout(timer);
  }, [closing]);

  // Focus, scroll lock, Escape and Tab trap while open.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    skipRef.current?.focus({ preventScroll: true });
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      } else if (event.key === "Tab") {
        event.preventDefault();
        skipRef.current?.focus({ preventScroll: true });
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      root.style.overflow = previousOverflow;
      const target = lastFocusedRef.current;
      if (target && target.isConnected) target.focus({ preventScroll: true });
    };
  }, [open]);

  return (
    <>
      {open && (
        <section
          className={closing ? "republic-welcome is-closing" : "republic-welcome"}
          data-republic-welcome
        >
          <div className="republic-welcome__backdrop" aria-hidden="true" />
          <div
            className="republic-welcome__dialog"
            role="dialog"
            aria-modal="true"
            aria-label="29 Ekim Cumhuriyet Bayramı kutlaması"
          >
            <picture className="republic-welcome__picture">
              <source media="(max-width: 720px), (orientation: portrait)" srcSet="/campaign/29-ekim-dikey.png" />
              <img
                src="/campaign/29-ekim-kare.png"
                alt="Türkiye Büyük Millet Meclisi kürsüsünde Mustafa Kemal Atatürk; Türk bayraklarıyla 29 Ekim Cumhuriyet Bayramı kutlama afişi."
              />
            </picture>
            <div className="republic-welcome__controls">
              <div className="republic-welcome__timer">
                <span aria-hidden="true">{remaining}</span>
                <span className="republic-welcome__sr">{remaining} saniye sonra kapanır</span>
              </div>
              <button ref={skipRef} className="republic-welcome__skip" type="button" onClick={() => setOpen(false)}>
                Geç
              </button>
            </div>
            <div className="republic-welcome__progress" aria-hidden="true">
              <span />
            </div>
          </div>
        </section>
      )}
      {flagVisible && !open && (
        <button
          className="republic-flag"
          type="button"
          aria-label="29 Ekim kutlamasını yeniden aç"
          onClick={openWelcome}
        >
          <span className="republic-flag__pole" aria-hidden="true" />
          <span className="republic-flag__cloth" aria-hidden="true">
            <span className="republic-flag__moon">☾</span>
            <span className="republic-flag__star">★</span>
          </span>
        </button>
      )}
    </>
  );
}
