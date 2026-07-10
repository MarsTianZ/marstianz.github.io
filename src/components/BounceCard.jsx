import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';


export default function BounceCards({
  className = '',
  images = [],
  containerWidth = 400,
  containerHeight = 400,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = 'elastic.out(1, 0.8)',
  transformStyles = [
    'rotate(10deg) translate(-170px)',
    'rotate(5deg) translate(-85px)',
    'rotate(-3deg)',
    'rotate(-10deg) translate(85px)',
    'rotate(2deg) translate(170px)'
  ],
  enableHover = true,
  onImageClick
}) {
  const containerRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.card',
        { scale: 0 },
        {
          scale: 1,
          stagger: animationStagger,
          ease: easeType,
          delay: animationDelay
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [animationStagger, easeType, animationDelay]);

  const getNoRotationTransform = transformStr => {
    const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr);
    if (hasRotate) {
      return transformStr.replace(/rotate\([\s\S]*?\)/, 'rotate(0deg)');
    } else if (transformStr === 'none') {
      return 'rotate(0deg)';
    } else {
      return `${transformStr} rotate(0deg)`;
    }
  };

  const getPushedTransform = (baseTransform, offsetX) => {
    const translateRegex = /translate\(([-0-9.]+)px\)/;
    const match = baseTransform.match(translateRegex);
    if (match) {
      const currentX = parseFloat(match[1]);
      const newX = currentX + offsetX;
      return baseTransform.replace(translateRegex, `translate(${newX}px)`);
    } else {
      return baseTransform === 'none' ? `translate(${offsetX}px)` : `${baseTransform} translate(${offsetX}px)`;
    }
  };

  const pushSiblings = hoveredIdx => {
    if (!enableHover || !containerRef.current) return;

    const q = gsap.utils.selector(containerRef);

    images.forEach((_, i) => {
      const target = q(`.card-${i}`);
      gsap.killTweensOf(target);

      const baseTransform = transformStyles[i] || 'none';

      if (i === hoveredIdx) {
        const noRotationTransform = getNoRotationTransform(baseTransform);
        gsap.to(target, {
          transform: noRotationTransform,
          duration: 0.4,
          ease: 'back.out(1.4)',
          overwrite: 'auto'
        });
      } else {
        const offsetX = i < hoveredIdx ? -160 : 160;
        const pushedTransform = getPushedTransform(baseTransform, offsetX);

        const distance = Math.abs(hoveredIdx - i);
        const delay = distance * 0.05;

        gsap.to(target, {
          transform: pushedTransform,
          duration: 0.4,
          ease: 'back.out(1.4)',
          delay,
          overwrite: 'auto'
        });
      }
    });
  };

  const resetSiblings = () => {
    if (!enableHover || !containerRef.current) return;

    const q = gsap.utils.selector(containerRef);

    images.forEach((_, i) => {
      const target = q(`.card-${i}`);
      gsap.killTweensOf(target);
      const baseTransform = transformStyles[i] || 'none';
      gsap.to(target, {
        transform: baseTransform,
        duration: 0.4,
        ease: 'back.out(1.4)',
        overwrite: 'auto'
      });
    });
  };

  return (
    <div
      className={`bounceCardsContainer ${className}`}
      ref={containerRef}
      style={{
        position: "relative",
        width: containerWidth,
        height: containerHeight,
      }}
    >
      {images.map((item, idx) => {
        // Logika buat mengenal video YouTube, video lokal, atau foto biasa
        const isYouTube =
          typeof item === "string" &&
          (item.includes("youtube.com") || item.includes("youtu.be"));
        const isLocalVideo =
          typeof item === "string"
            ? item.match(/\.(mp4|webm|ogg)$/i)
            : (item && item.default) || typeof item === "object";

        return (
          <div
            key={idx}
            // 1. Tambahkan class 'card' dan 'card-${idx}' biar animasi GSAP bisa nargetin elemen ini
            className={`card card-${idx} absolute cursor-pointer transform-gpu ${className}`}
            // 2. Perbaiki penulisan style menjadi format object
            style={{
              transform: transformStyles ? transformStyles[idx] : "none",
            }}
            onClick={() => onImageClick && onImageClick(item)}
            onMouseEnter={() => pushSiblings(idx)}
            onMouseLeave={resetSiblings}
          >
            <div className="w-full h-full rounded-2xl overflow-hidden border border-gray-800 bg-gray-900 shadow-xl relative group">
              {/* Ini 'Tameng' transparan biar video gak kepencet langsung */}
              <div className="absolute inset-0 z-10 bg-transparent"></div>

              {isYouTube ? (
                <iframe
                  className="w-full h-full object-cover pointer-events-none"
                  src={item}
                  title={`Preview ${idx}`}
                  frameBorder="0"
                />
              ) : isLocalVideo ? (
                <video
                  className="w-full h-full object-cover pointer-events-none"
                  src={typeof item === "object" ? item.default || item : item}
                  preload="metadata"
                  muted
                />
              ) : (
                <img
                  src={item}
                  alt={`Doc ${idx}`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );}
