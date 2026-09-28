"use client";

import React, { useCallback, useLayoutEffect, useRef } from "react";
import Lenis from "lenis";
import "./ScrollStack.css";

export const ScrollStackItem = ({ children, itemClassName = "" }) => (
  <article className={`scroll-stack-card ${itemClassName}`.trim()}>
    {children}
  </article>
);

export default function ScrollStack({
  children,
  className = "",
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
}) {
  const scrollerRef = useRef(null);
  const cardsRef = useRef([]);
  const frameRef = useRef(null);
  const completedRef = useRef(false);

  const updateCards = useCallback(() => {
    const scroller = scrollerRef.current;
    const cards = cardsRef.current;
    if (!scroller || !cards.length) return;

    const scrollTop = useWindowScroll ? window.scrollY : scroller.scrollTop;
    const height = useWindowScroll ? window.innerHeight : scroller.clientHeight;
    const offset = (value) =>
      value.includes("%")
        ? (parseFloat(value) / 100) * height
        : parseFloat(value);
    const elementTop = (element) =>
      useWindowScroll
        ? element.getBoundingClientRect().top + window.scrollY
        : element.offsetTop;
    const stackTop = offset(stackPosition);
    const scaleEnd = offset(scaleEndPosition);
    const end = scroller.querySelector(".scroll-stack-end");
    const pinEnd = elementTop(end) - height / 2;
    let topCard = 0;

    cards.forEach((card, index) => {
      if (scrollTop >= elementTop(card) - stackTop - itemStackDistance * index)
        topCard = index;
    });

    cards.forEach((card, index) => {
      const top = elementTop(card);
      const pinStart = top - stackTop - itemStackDistance * index;
      const scaleFinish = top - scaleEnd;
      const progress = Math.max(
        0,
        Math.min(1, (scrollTop - pinStart) / (scaleFinish - pinStart)),
      );
      const scale = 1 - progress * (1 - (baseScale + index * itemScale));
      const translateY =
        scrollTop < pinStart
          ? 0
          : Math.min(scrollTop, pinEnd) -
            top +
            stackTop +
            itemStackDistance * index;
      const rotation = index * rotationAmount * progress;
      const blur = index < topCard ? (topCard - index) * blurAmount : 0;

      card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale}) rotate(${rotation}deg)`;
      card.style.filter = blur ? `blur(${blur}px)` : "";

      if (index === cards.length - 1) {
        const complete = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (complete && !completedRef.current) onStackComplete?.();
        completedRef.current = complete;
      }
    });
  }, [
    baseScale,
    blurAmount,
    itemScale,
    itemStackDistance,
    onStackComplete,
    rotationAmount,
    scaleEndPosition,
    stackPosition,
    useWindowScroll,
  ]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = [...scroller.querySelectorAll(".scroll-stack-card")];
    cardsRef.current = cards;
    cards.forEach((card, index) => {
      if (index < cards.length - 1)
        card.style.marginBottom = `${itemDistance}px`;
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis(
      useWindowScroll
        ? {}
        : {
            wrapper: scroller,
            content: scroller.querySelector(".scroll-stack-inner"),
          },
    );
    const frame = (time) => {
      lenis.raf(time);
      frameRef.current = requestAnimationFrame(frame);
    };

    lenis.on("scroll", updateCards);
    frameRef.current = requestAnimationFrame(frame);
    updateCards();

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      lenis.destroy();
      cardsRef.current = [];
    };
  }, [itemDistance, updateCards, useWindowScroll]);

  return (
    <div
      className={`scroll-stack-scroller ${className}`.trim()}
      ref={scrollerRef}
    >
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
}
