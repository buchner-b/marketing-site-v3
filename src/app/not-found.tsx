import Link from "next/link";

export default function NotFound() {
    return (
        <section
            className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center"
            aria-labelledby="not-found-heading"
        >
            <h1
                id="not-found-heading"
                className="text-6xl font-bold text-primary"
            >
                404
            </h1>
            <p className="mt-4 text-xl text-foreground/70">
                The page you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
                href="/"
                className="mt-8 inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary/90"
            >
                Go back home
            </Link>
        </section>
    );
}
