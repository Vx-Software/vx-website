"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/footer1";

const lastUpdated = "February 2026";

const termsSections = [
  {
    title: "Overview",
    body:
      "These Terms & Conditions govern how you access and use VX Software Solutions websites, platforms, SaaS products, and services. By continuing, you agree to the terms below.",
  },
  {
    title: "1. Scope of Services",
    body:
      "We deliver SaaS products, custom software, web and mobile development, IT consulting, integrations, support, and related services. Specific features and deliverables are defined in proposals, SOWs, or order forms.",
  },
  {
    title: "2. Eligibility & Accounts",
    list: [
      "You confirm you are authorized to contract on behalf of yourself or your organization.",
      "You will provide accurate information and keep credentials confidential.",
      "You are responsible for all activity under your account until access is revoked or credentials are reset.",
    ],
  },
  {
    title: "3. Acceptable Use",
    list: [
      "Do not upload unlawful, infringing, or harmful content.",
      "Do not attempt to hack, probe, or reverse engineer the platform.",
      "Do not send spam or unauthorized automated messages.",
      "Use the services only in compliance with applicable laws and contracts.",
    ],
  },
  {
    title: "4. Subscriptions, Fees, and Billing",
    list: [
      "Fees follow the signed proposal, SOW, or invoice; taxes are additional where applicable.",
      "Recurring plans may auto-renew unless cancelled within the notice period stated in your agreement.",
      "Late or missing payments may lead to suspension or termination of access.",
      "Unless your contract states otherwise, payments are non-refundable once work begins or a billing cycle has started.",
    ],
  },
  {
    title: "5. Intellectual Property",
    list: [
      "Pre-existing IP, code, designs, and know-how remain owned by VX Software Solutions.",
      "Client data and client-provided materials remain the property of the client.",
      "Deliverables may include licensed or open-source components subject to their respective licenses.",
      "No resale, sublicensing, or copying of our products or brand assets without written consent.",
    ],
  },
  {
    title: "6. Data Protection & Privacy",
    list: [
      "We apply reasonable technical and organizational measures to safeguard data.",
      "We do not sell personal data; processing is limited to providing and improving the service.",
      "Backups and retention follow the data handling terms in your agreement and our Privacy Policy.",
      "You are responsible for lawful collection of end-user data and providing required notices/consents.",
    ],
  },
  {
    title: "7. Third-Party Services",
    body:
      "Payment gateways, SMS/email providers, hosting, analytics, or other integrations are operated by third parties. Their uptime, policies, and data handling are governed by their own terms, and we are not liable for their performance.",
  },
  {
    title: "8. Availability, Support, and Maintenance",
    list: [
      "We target high availability but do not guarantee uninterrupted service.",
      "Planned maintenance windows may be announced; emergency maintenance may occur without notice.",
      "Support response and resolution targets apply only if an SLA or support plan is in place.",
    ],
  },
  {
    title: "9. Warranties and Disclaimers",
    list: [
      "Services are provided on an \"as is\" and \"as available\" basis.",
      "We do not guarantee that the services will meet all requirements or be error-free.",
      "Experimental, beta, or preview features may change or be withdrawn at any time.",
    ],
  },
  {
    title: "10. Limitation of Liability",
    list: [
      "To the maximum extent allowed by law, we are not liable for indirect, consequential, or special damages, including loss of revenue, profits, data, or business opportunities.",
      "Our aggregate liability for claims arising out of these Terms or the services is limited to the fees paid to us for the three (3) months immediately preceding the claim, unless a different cap is stated in your contract.",
    ],
  },
  {
    title: "11. Confidentiality",
    body:
      "Both parties will protect confidential business, technical, and financial information shared under these Terms and will use it only to perform obligations here, except where disclosure is required by law.",
  },
  {
    title: "12. Term, Suspension, and Termination",
    list: [
      "Either party may terminate per the notice requirements in the applicable agreement.",
      "We may suspend or terminate access for non-payment, security risk, legal violation, or breach of these Terms.",
      "Upon termination, access ceases and outstanding fees become immediately due. Post-termination data handling follows the retention section below.",
    ],
  },
  {
    title: "13. Data Retention and Deletion",
    list: [
      "Operational data may be retained for a limited period (typically 30–90 days) after termination for backup, audit, or legal purposes.",
      "You may request export of your data during the active term; post-termination exports are subject to availability and may incur fees.",
      "After the retention window, data may be irreversibly deleted unless law requires longer retention.",
    ],
  },
  {
    title: "14. Compliance and Export Controls",
    body:
      "You will comply with applicable laws, including data protection, anti-corruption, and export control regulations. You will not use the services in sanctioned jurisdictions where prohibited.",
  },
  {
    title: "15. Changes to These Terms",
    body:
      "We may update these Terms to reflect changes in services, legal requirements, or policies. Continued use after updates constitutes acceptance. Material changes may be communicated via the site or email.",
  },
  {
    title: "16. Governing Law and Dispute Resolution",
    body:
      "These Terms are governed by the laws of India. Courts located in Hyderabad, Telangana, have jurisdiction, unless a different venue is agreed in a signed contract.",
  },
  {
    title: "17. Contact",
    contact: {
      company: "VX Software Solutions",
      email: "remind@vxsoftwaresolutions.com",
      address: "Flat 102, Namas Building, #945, Road No-48, Ayyappa Society, Madhapur, Hyderabad 500081",
    },
  },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="w-full min-h-screen bg-[#0C0C0C] text-white">
      <Navbar />
      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 px-3 sm:px-6 lg:px-8 xl:px-4">
        <div className="w-full bg-[#1423C933] border-[0.8px] border-[#1423C9] px-3 sm:px-6 py-6 sm:py-9 rounded-xl mt-6 sm:mt-8 text-center">
          <p className="font-sans text-xl sm:text-2xl lg:text-3xl uppercase font-semibold">Terms & Conditions</p>
          <p className="font-sans text-sm sm:text-base mt-2 opacity-80">Last Updated: {lastUpdated}</p>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4">
          {termsSections.map((section, index) => (
            <div
              key={section.title}
              className="flex flex-col gap-2 w-full bg-[#121015] border-[0.8px] border-[#232323] px-3 sm:px-4 lg:px-6 py-4 sm:py-6 rounded-xl"
            >
              <p className="font-sans text-[#1423C9] text-lg sm:text-xl font-semibold">
                {section.title}
              </p>
              {section.body && (
                <p className="text-base sm:text-lg font-sans font-medium leading-relaxed">{section.body}</p>
              )}
              {section.list && (
                <ul className="space-y-2 ml-1 sm:ml-2">
                  {section.list.map((item) => (
                    <li
                      key={item}
                      className="text-base sm:text-lg font-sans font-medium leading-relaxed flex items-start"
                    >
                      <span className="text-[#1423C9] mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.contact && (
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-[#1423C9] font-semibold">Company:</span>
                    <span className="text-base sm:text-lg font-sans font-medium">{section.contact.company}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-[#1423C9] font-semibold">Email:</span>
                    <span className="text-base sm:text-lg font-sans font-medium">{section.contact.email}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[#1423C9] font-semibold">Address:</span>
                    <pre className="text-base sm:text-lg font-sans font-medium leading-relaxed whitespace-pre-line">
                      {section.contact.address}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="w-full bg-[#D8FF2933] border-[0.8px] border-[#D8FF29] px-3 sm:px-6 py-4 sm:py-6 rounded-xl">
          <div className="flex items-start gap-3">
            <div className="text-[#D8FF29] text-xl mt-1">⚠️</div>
            <div>
              <p className="font-sans text-[#D8FF29] text-lg font-semibold mb-2">Important Notice</p>
              <p className="text-base sm:text-lg font-sans font-medium leading-relaxed">
                By continuing to use our website or services, you acknowledge that you have read and agree to these Terms & Conditions. For the most current version, visit this page or contact us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
