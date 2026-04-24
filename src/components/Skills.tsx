const groups = [
  {
    label: "Paid Media & Marketplace Advertising",
    items: [
      "Google Ads",
      "Search Ads 360",
      "Amazon Advertising",
      "Meta Ads",
      "LinkedIn Ads",
      "TikTok Ads",
      "Criteo",
      "Programmatic DSPs",
      "PPC & Display",
      "Shopping Campaigns",
      "Bid Strategy",
      "Keyword Optimization",
      "Budget Pacing",
      "Retargeting",
      "Lookalikes",
      "Creative Testing",
    ],
  },
  {
    label: "Analytics & Experimentation",
    items: [
      "GA4",
      "Google Tag Manager",
      "Adobe Analytics",
      "Power BI",
      "Tableau",
      "SQL",
      "Python",
      "A/B & Multivariate Testing",
      "Attribution Modeling",
      "Incrementality",
      "CRO",
      "Web Analytics",
      "Funnel Analytics",
    ],
  },
  {
    label: "Ecommerce & MarTech",
    items: [
      "Google Merchant Center",
      "Meta Catalog",
      "Shopify",
      "WordPress",
      "HubSpot",
      "Salesforce",
      "Adobe Audience Manager",
      "Email / CRM",
      "Segmentation",
      "Customer Journey Mapping",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-800">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
        Toolkit
      </h2>
      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        {groups.map((g) => (
          <div key={g.label} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h3 className="font-semibold text-zinc-100">{g.label}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <span
                  key={i}
                  className="text-xs px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
