"use client";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    console.error(error);

    return (
        <section
            className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center"
            aria-labelledby="error-heading"
        >
            <h1
                id="error-heading"
                className="text-4xl font-bold text-foreground"
            >
                Something went wrong
            </h1>
            <p className="mt-4 text-lg text-foreground/70">
                An unexpected error occurred. Please try again.
            </p>
            <button
                onClick={reset}
                className="mt-8 inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary/90"
            >
                Try again
            </button>
        </section>
    );
}
