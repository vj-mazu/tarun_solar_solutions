// Solar Application Configuration

export const config = {
  phone: "+917022673119",
  whatsappMessage: "Hello! I am interested in your Solar Energy services. I would like to know more about: ",
  whatsappLink: (serviceType) => {
    const base = "https://wa.me/917022673119";
    const text = encodeURIComponent(
      `Hello! I am interested in your Solar Energy services. I would like to inquire about ${serviceType} installations.`
    );
    return `${base}?text=${text}`;
  },
  partners: [
    {
      name: "Tata Power Solar",
      tier: "Authorized Channel Partner",
      desc: "India's leading solar manufacturer with 30+ years of trust."
    },
    {
      name: "Waaree Solar",
      tier: "Elite Distributor",
      desc: "India's largest solar module manufacturer with global footprints."
    }
  ],
  experienceYears: 25,
  residentialSubsidyRate: "Up to 40%+",
  residentialSubsidyDetails: "Eligible for government subsidy under PM Surya Ghar Muft Bijli Yojana. 25-year panel warranty.",
  commercialDetails: "No subsidy available. 100% Tax Depreciation, high commercial electricity savings, and 4-5 year payback period."
};
