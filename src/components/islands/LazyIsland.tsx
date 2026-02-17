"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface LazyIslandProps {
    children: ReactNode;
    /** Root margin for IntersectionObserver (default: "200px") */
    rootMargin?: string;
    /** Fallback content while loading */
    fallback?: ReactNode;
    /** CSS class for the wrapper element */
    className?: string;
}

/**
 * LazyIsland — IntersectionObserver wrapper for below-fold interactive components.
 *
 * Usage:
 * ```tsx
 * <LazyIsland>
 *   <DynamicComponent />
 * </LazyIsland>
 * ```
 *
 * For dynamic imports, combine with next/dynamic:
 * ```tsx
 * const DynamicChart = dynamic(() => import("./Chart"), { ssr: false });
 * <LazyIsland><DynamicChart /></LazyIsland>
 * ```
 */
export function LazyIsland({
    children,
    rootMargin = "200px",
    fallback = null,
    className,
}: LazyIslandProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry?.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [rootMargin]);

    return (
        <div ref={ref} className={className}>
            {isVisible ? children : fallback}
        </div>
    );
}
