import Head from "next/head";
import siteMetadata from "@/data/seoMetaData";

interface SeoProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogTwitterImage?: string;
  ogType?: string;
  children?: string;
  ogImageUrl?: string;
}

const HeadSeo = ({
  title,
  description,
  canonicalUrl,
  ogTwitterImage,
  ogType,
  children,
  ogImageUrl
}: SeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={siteMetadata.description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={siteMetadata.twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={siteMetadata.description} />
      <meta name="twitter:image" content={ogTwitterImage} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={siteMetadata.companyName} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={siteMetadata.description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      {children}
    </Head>
  );
};

export default HeadSeo;
