const siteUrl = "https://nexment.org";

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nexment",
    url: siteUrl,
    description:
      "A developer platform to showcase projects, publish technical articles, learn, and connect.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
