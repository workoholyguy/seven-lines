/**
 * Site-wide content for 7 Lines Truck & Trailer Repair.
 * Import from `@/global` or `@/global/site` across pages, layout, and SEO.
 */

export const site = {
  name: "7 Lines Truck & Trailer Repair",
  shortName: "7 Lines",
  tagline:
    "Full-service commercial truck and trailer repair for the Miami Valley — fast turnaround, transparent communication, honest estimates.",

  contact: {
    phoneDisplay: "(937) 367-0843",
    phoneTel: "tel:+19373670843",
    email: "shop7lines@gmail.com",
    emailMailto: "mailto:shop7lines@gmail.com",
    address: {
      street: "3560 Valley Street",
      city: "Dayton",
      state: "OH",
      zip: "45424",
      /** Single-line mailing address */
      line: "3560 Valley Street, Dayton, OH 45424",
    },
  },

  /** Region and logistics positioning */
  region: {
    primary: "greater Dayton, Ohio area",
    secondary: "Miami Valley region",
    corridors: ["I-70", "I-75"] as const,
  },

  /** Vehicle and equipment focus */
  fleet: {
    classes: "Class 6 through Class 8",
    includes: [
      "semi-trucks",
      "box trucks",
      "flatbeds",
      "reefer units",
      "full range of trailer types",
    ] as const,
  },

  credentials: {
    technicians: "ASE-certified technicians",
  },

  /** Long-form copy broken into sections for reuse on About, SEO, etc. */
  copy: {
    /** Location and corridor access */
    location: `7 Lines Truck & Trailer Repair is a full-service commercial truck and trailer repair facility serving the greater Dayton, Ohio area and the surrounding Miami Valley region. Located at 3560 Valley Street, Dayton, OH 45424, the shop is strategically positioned with convenient access to major freight corridors including I-70 and I-75, making it an ideal stop for both local fleets and over-the-road carriers passing through one of the Midwest's busiest transportation crossroads.`,

    /** Core specialties */
    specialties: `The shop specializes in diagnostics, maintenance, and repair services for Class 6 through Class 8 commercial vehicles, including semi-trucks, box trucks, flatbeds, reefer units, and a full range of trailer types.`,

    /** Service breadth */
    servicesOverview: `Services span everything from routine preventive maintenance — oil changes, brake inspections, tire service, and DOT compliance checks — to complex engine diagnostics, electrical troubleshooting, suspension work, air system repairs, and welding fabrication for trailer structural damage.`,

    /** Mission / downtime */
    mission: `At 7 Lines, minimizing downtime is the top priority. The team understands that every hour a truck sits idle costs money, which is why the shop is committed to fast turnaround times, transparent communication, and honest estimates. Whether it's an emergency roadside breakdown, a scheduled PM service, or a full brake overhaul, every job is handled with the same level of urgency and attention to detail.`,

    /** Audience and promise */
    audience: `7 Lines Truck & Trailer Repair serves owner-operators, independent drivers, and commercial fleet accounts alike, offering competitive pricing and dependable workmanship backed by experienced, ASE-certified technicians.`,
  },
} as const;

export type Site = typeof site;

/** Default `<meta name="description">` — concise; expand per-page as needed */
export const siteDescription =
  "Full-service Class 6–8 truck & trailer repair in Dayton, OH near I-70/I-75. Diagnostics, PM, brakes, DOT, engine, electrical, suspension & welding. (937) 367-0843.";
