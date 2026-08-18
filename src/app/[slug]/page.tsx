import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DownloadPage, { metadata as downloadMetadata } from "../download/page";
import InfoPage, { metadata as infoMetadata } from "@/components/InfoPage";

interface SlugPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-dynamic";

function getDecodedSlug(slug: string) {
  try {
    return decodeURIComponent(slug);
  } catch {
    return "";
  }
}

export async function generateMetadata({ params }: SlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = getDecodedSlug(slug);

  if (decodedSlug === "скачать") return downloadMetadata;
  if (decodedSlug === "инфо") return infoMetadata;

  return {};
}

export default async function SlugPage({ params }: SlugPageProps) {
  const { slug } = await params;
  const decodedSlug = getDecodedSlug(slug);

  if (decodedSlug === "скачать") return <DownloadPage />;
  if (decodedSlug === "инфо") return <InfoPage />;

  notFound();
}
