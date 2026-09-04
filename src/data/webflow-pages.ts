import AboutMeBody from "../webflow/pages/about-me.html?raw";
import BracketproBody from "../webflow/pages/bracketpro.html?raw";
import BracketproPrivacyPolicyBody from "../webflow/pages/bracketpro-privacy-policy.html?raw";
import BracketproSupportBody from "../webflow/pages/bracketpro-support.html?raw";
import CaseStudyDesignSystemBody from "../webflow/pages/case-study-design-system.html?raw";
import CaseStudyEdtechSearchBody from "../webflow/pages/case-study-edtech-search.html?raw";
import CaseStudyMarketResearchAppBody from "../webflow/pages/case-study-market-research-app.html?raw";
import CaseStudyOneDrawingToolThreeExperiencesBody from "../webflow/pages/case-study-one-drawing-tool-three-experiences.html?raw";
import GetInTouchBody from "../webflow/pages/get-in-touch.html?raw";
import IndexBody from "../webflow/pages/index.html?raw";
import JustforfunBody from "../webflow/pages/justforfun.html?raw";
import MiscBody from "../webflow/pages/misc.html?raw";
import MyDesignApproachJohnCalkinsBody from "../webflow/pages/my-design-approach-john-calkins.html?raw";
import MyResumeBody from "../webflow/pages/my-resume.html?raw";
import WebsiteDesignBody from "../webflow/pages/website-design.html?raw";

export type WebflowPage = {
  slug: string;
  route: string;
  title: string;
  wfPage: string;
  wfSite: string;
  bodyClass: string;
  extraHead: string;
  body: string;
};

export const webflowPages = {
  "about-me": {
    slug: "about-me",
    route: "/about-me",
    title: "About Me | John Calkins",
    wfPage: "63b9ae7846576d89cea0decf",
    wfSite: "5fb3cd7d7c2e46b8bec64467",
    bodyClass: "",
    extraHead: "<meta content=\"About Me | John Calkins\" property=\"og:title\">\n<meta content=\"About Me | John Calkins\" name=\"twitter:title\">",
    body: AboutMeBody,
  },
  "bracketpro": {
    slug: "bracketpro",
    route: "/bracketpro",
    title: "BracketPro",
    wfPage: "68b21d0bed8b84dc2e0f5a9b",
    wfSite: "5fb3cd7d7c2e46b8bec64467",
    bodyClass: "body-3",
    extraHead: "<meta content=\"BracketPro\" property=\"og:title\">\n<meta content=\"BracketPro\" name=\"twitter:title\">",
    body: BracketproBody,
  },
  "bracketpro-privacy-policy": {
    slug: "bracketpro-privacy-policy",
    route: "/bracketpro-privacy-policy",
    title: "BracketPro | Privacy Policy",
    wfPage: "68b232a6f88f48be797157ce",
    wfSite: "5fb3cd7d7c2e46b8bec64467",
    bodyClass: "body-3",
    extraHead: "<meta content=\"BracketPro | Privacy Policy\" property=\"og:title\">\n<meta content=\"BracketPro | Privacy Policy\" name=\"twitter:title\">",
    body: BracketproPrivacyPolicyBody,
  },
  "bracketpro-support": {
    slug: "bracketpro-support",
    route: "/bracketpro-support",
    title: "BracketPro | Support",
    wfPage: "68b233f0987831d84944955b",
    wfSite: "5fb3cd7d7c2e46b8bec64467",
    bodyClass: "body-3",
    extraHead: "<meta content=\"BracketPro | Support\" property=\"og:title\">\n<meta content=\"BracketPro | Support\" name=\"twitter:title\">",
    body: BracketproSupportBody,
  },
  "case-study-design-system": {
    slug: "case-study-design-system",
    route: "/case-study-design-system",
    title: "Case Study | Creating an Enterprise Design System from Scratch",
    wfPage: "63bc7b2ff0ba5d71baeef8f1",
    wfSite: "5fb3cd7d7c2e46b8bec64467",
    bodyClass: "",
    extraHead: "<meta content=\"Case Study |  Creating an Enterprise Design System from Scratch\" property=\"og:title\">\n<meta content=\"Case Study |  Creating an Enterprise Design System from Scratch\" name=\"twitter:title\">",
    body: CaseStudyDesignSystemBody,
  },
  "case-study-edtech-search": {
    slug: "case-study-edtech-search",
    route: "/case-study-edtech-search",
    title: "Case Study | Rethinking a Better Search Page for an Edtech Product",
    wfPage: "63b883f9d5dfaa1a6740480e",
    wfSite: "5fb3cd7d7c2e46b8bec64467",
    bodyClass: "",
    extraHead: "<meta content=\"Case Study | Rethinking a Better Search Page for an Edtech Product\" property=\"og:title\">\n<meta content=\"Case Study | Rethinking a Better Search Page for an Edtech Product\" name=\"twitter:title\">",
    body: CaseStudyEdtechSearchBody,
  },
  "case-study-market-research-app": {
    slug: "case-study-market-research-app",
    route: "/case-study-market-research-app",
    title: "Case Study | Redesigning a Market Research Product &amp; Design System",
    wfPage: "63bc4c5db01e241fa866a644",
    wfSite: "5fb3cd7d7c2e46b8bec64467",
    bodyClass: "",
    extraHead: "<meta content=\"Case Study | Redesigning a Market Research Product &amp; Design System\" property=\"og:title\">\n<meta content=\"Case Study | Redesigning a Market Research Product &amp; Design System\" name=\"twitter:title\">",
    body: CaseStudyMarketResearchAppBody,
  },
  "case-study-one-drawing-tool-three-experiences": {
    slug: "case-study-one-drawing-tool-three-experiences",
    route: "/case-study-one-drawing-tool-three-experiences",
    title: "Case Study | One Drawing Tool. Three Experiences.",
    wfPage: "686d9024c047c2fa7ec53493",
    wfSite: "5fb3cd7d7c2e46b8bec64467",
    bodyClass: "",
    extraHead: "<meta content=\"Case Study | One Drawing Tool. Three Experiences.\" property=\"og:title\">\n<meta content=\"Case Study | One Drawing Tool. Three Experiences.\" name=\"twitter:title\">",
    body: CaseStudyOneDrawingToolThreeExperiencesBody,
  },
  "get-in-touch": {
    slug: "get-in-touch",
    route: "/get-in-touch",
    title: "Get In Touch | John Calkins Design",
    wfPage: "63bc7403e4acccd5334d3a8d",
    wfSite: "5fb3cd7d7c2e46b8bec64467",
    bodyClass: "",
    extraHead: "<meta content=\"Get In Touch | John Calkins Design\" property=\"og:title\">\n<meta content=\"Get In Touch | John Calkins Design\" name=\"twitter:title\">",
    body: GetInTouchBody,
  },
  "index": {
    slug: "index",
    route: "/",
    title: "John Calkins | Product Designer",
    wfPage: "62bb0eff8326f5246c94738a",
    wfSite: "5fb3cd7d7c2e46b8bec64467",
    bodyClass: "body",
    extraHead: "",
    body: IndexBody,
  },
  "justforfun": {
    slug: "justforfun",
    route: "/justforfun",
    title: "Misc Designs | John Calkins Design",
    wfPage: "63bc59f59d4b04852398e2bd",
    wfSite: "5fb3cd7d7c2e46b8bec64467",
    bodyClass: "",
    extraHead: "<meta content=\"Misc Designs | John Calkins Design\" property=\"og:title\">\n<meta content=\"Misc Designs | John Calkins Design\" name=\"twitter:title\">",
    body: JustforfunBody,
  },
  "misc": {
    slug: "misc",
    route: "/misc",
    title: "Misc Designs | John Calkins Design",
    wfPage: "6872aa2ff48c8590a9da5c56",
    wfSite: "5fb3cd7d7c2e46b8bec64467",
    bodyClass: "",
    extraHead: "<meta content=\"Misc Designs | John Calkins Design\" property=\"og:title\">\n<meta content=\"Misc Designs | John Calkins Design\" name=\"twitter:title\">",
    body: MiscBody,
  },
  "my-design-approach-john-calkins": {
    slug: "my-design-approach-john-calkins",
    route: "/my-design-approach-john-calkins",
    title: "My Design Approach | John Calkins",
    wfPage: "6877ecdd8923a73c706e85c1",
    wfSite: "5fb3cd7d7c2e46b8bec64467",
    bodyClass: "",
    extraHead: "<meta content=\"My Design Approach | John Calkins\" property=\"og:title\">\n<meta content=\"My Design Approach | John Calkins\" name=\"twitter:title\">",
    body: MyDesignApproachJohnCalkinsBody,
  },
  "my-resume": {
    slug: "my-resume",
    route: "/my-resume",
    title: "My Resume",
    wfPage: "6862c9b2b928d48971c28bae",
    wfSite: "5fb3cd7d7c2e46b8bec64467",
    bodyClass: "",
    extraHead: "<meta content=\"My Resume\" property=\"og:title\">\n<meta content=\"My Resume\" name=\"twitter:title\">",
    body: MyResumeBody,
  },
  "website-design": {
    slug: "website-design",
    route: "/website-design",
    title: "Website Design | John Calkins Design",
    wfPage: "63b8a30d0f5b78a649443c1f",
    wfSite: "5fb3cd7d7c2e46b8bec64467",
    bodyClass: "",
    extraHead: "<meta content=\"Website Design | John Calkins Design\" property=\"og:title\">\n<meta content=\"Website Design | John Calkins Design\" name=\"twitter:title\">",
    body: WebsiteDesignBody,
  },
} satisfies Record<string, WebflowPage>;
