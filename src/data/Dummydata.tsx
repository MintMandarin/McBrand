import images from "@scr/assets/images";



interface Country {
    name: string;
    code: string;
    callingCode: string;
    flag: string;
}

interface Dropdownoptions {
    label: string;
    value: string;
}

interface SocialAccountprops {
    logo: any,
    name: string,
}

interface Event {
    id: any,
    winner: string,
    event: string,
    Event: string,
    date: string,
    Location: string,
    medal: any,

}

interface leader {
    id: any,
    name: string,
    username: string,
    image: any,
    number: string,
}

interface Notification {
    id: any,
    title: string,
    message: string,
    time: string
}

export interface selectlanguageprops {
    code: string,
    label: string,
}

export interface thanksscubscriptionprops {
    featureText: string,
}
export interface PolicyItem {
    id: string;
    title?: string;
    content?: string;
}



export const Selectlanguages: selectlanguageprops[] = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Spanish' },
    { code: 'zh', label: 'Chinese' },


]


export const eventData: Event[] = [
    {
        id: 1,
        winner: "Winner",
        Event: "Event",
        event: "Tennis Match 3v1",
        date: "19 Feb 2024",
        Location: "Gymnasium Park",
        medal: images.Goldmedal,

    },
    {
        id: 2,
        winner: "Winner",
        Event: "Challenge",
        event: "Tennis Match 1v1",
        date: "12 - 19 Feb 2024",
        Location: "Gymnasium Park",
        medal: images.Bronzemedal,

    },
    {
        id: 3,
        winner: "Winner",
        Event: "Event",
        event: "Tennis Match 1v2",
        date: "20 Feb 2024",
        Location: "Gymnasium Park",
        medal: images.Goldmedal,


    },
    {
        id: 4,
        winner: "Winner",
        Event: "Challenge",
        event: "Tennis Match 2v1",
        date: "16-24 Feb 2024",
        Location: "Gymnasium Park",
        medal: images.Bronzemedal,


    },
    {
        id: 5,
        winner: "Winner",
        Event: "Challenge",
        event: "Tennis Match 1v1",
        date: "16-24 Feb 2024",
        Location: "Gymnasium Park",
        medal: images.Bronzemedal,


    },
    {
        id: 6,
        winner: "Winner",
        Event: "Challenge",
        event: "Tennis Match 1v1",
        date: "16-24 Feb 2024",
        Location: "Gymnasium Park",
        medal: images.Bronzemedal,


    },
    {
        id: 7,
        winner: "Winner",
        Event: "Challenge",
        event: "Tennis Match 1v1",
        date: "16-24 Feb 2024",
        Location: "Gymnasium Park",
        medal: images.Bronzemedal,


    }
];
export const premiumplans: thanksscubscriptionprops[] = [
    { featureText: 'Get unlimited profile suggestions', },
    { featureText: 'Get access to local events', },
    { featureText: 'See participants In events', },
    { featureText: 'Discount on leagues', },
    { featureText: 'Access to exclusive events', },

]

export const Monthlyfeatures: thanksscubscriptionprops[] = [
    { featureText: 'Access to core content, monthly newsletter.', },
    { featureText: 'All Basic features + exclusive content', },
    { featureText: 'All Standard features + personalized content', },
];

export const Yearlyfeatures: thanksscubscriptionprops[] = [
    { featureText: 'Same as Basic Plan, with an annual report .', },
    { featureText: 'Same as Standard Plan, plus an annual consultation ', },
    { featureText: 'Same as Premium Plan, plus an annual ', },
];

export const languageoptions: Dropdownoptions[] = [
    { value: '1', label: 'English', },
    { value: '2', label: 'Spanish', },
    { value: '3', label: 'Chinese', },
];
export const Genderoptions: Dropdownoptions[] = [
    { label: 'Male', value: '1' },
    { label: 'Female', value: '2' },
    { label: 'Others', value: '3' },
];

export const SocialAccountsData: SocialAccountprops[] = [

    { logo: images.facebooklogo, name: 'Facebook' },
    { logo: images.instagramlogo, name: 'Instagram' },
    { logo: images.spotifylogo, name: 'Spotify' },
    // Add more social accounts as needed
];


export const Tremsandcontionsdata: PolicyItem[] = [
    {
        id: '1',
        title: 'Information We Collect',
        content: `
          Personal Information:: When you create an account, we collect personal information such as your name, email address, phone number, and profile details.
          Location Data:: With your consent, we collect precise geolocation data from your mobile device to enhance your experience.
          Usage Data:: We collect information about your interactions with our app, including browsing history, search queries, and engagement with content.
          Social Media Information:: If you log in through social media accounts, we may access your profile information from those platforms.
      `,
    },
    {
        id: '2',
        title: 'How We Use Your Information',
        content: `
         Personalization:: To personalize your experience and provide tailored content and recommendations.
         Analytics:: To perform analytics to improve our services, understand user behavior, and develop new features.
         Location-Based Services:: To provide specific features and advertisements, if you have opted in.
      `,
    },
    {
        id: '3',
        title: 'Sharing Your Information',
        content: `
        Service Providers:: We share your data with third-party service providers who assist us in operating our app, conducting our business, or providing services to you.
        Legal Requirements:: We may disclose your information to comply with legal obligations or protect our rights.
        Affiliates and Partners:: We may share information with our affiliates and partners to improve our services and ensure user safety.
      `,
    },
    {
        id: '4',
        title: 'Data Retention',
        content: `
        Active Use:: We retain your personal information for as long as your account is active.
        Account Closure:: After you close your account, we keep your data for a three-month period to investigate any potential misconduct. Thereafter, your data is deleted, except for information required to comply with legal obligations or resolve disputes.
      `,
    },
    {
        id: '5',
        title: 'Cookies and Tracking Technologies',
        content: `
        Cookies:: We use cookies to remember your preferences, enhance site functionality, and track usage patterns.
        Web Beacons and Pixel Tags:: These technologies help us understand user interactions with our emails and advertisements.
      `,
    },
    {
        id: '6',
        title: 'Your Rights',
        content: `
        Access and Update:: You can access and update your personal information through your account settings.
        Delete Your Data:: You can delete your account, which will remove your profile from our service.
        Withdraw Consent:: You can withdraw your consent for data processing at any time by adjusting your settings or contacting us.
      `,
    },
    {
        id: '7',
        title: 'Security',
        content: `
        We implement industry-standard security measures to protect your data. However, no system is completely secure, and we cannot guarantee the absolute security of your information.
      `,
    },
    {
        id: '8',
        title: 'Changes to This Policy',
        content: `
        We may update this Privacy Policy periodically. You will be notified of any significant changes, and continued use of our app implies acceptance of the revised policy.
      `,
    },
    {
        id: '9',
        title: 'Contact Us',
        content: `
        If you have any questions or concerns about this Privacy Policy, please contact us at [support@example.com].
      `,
    },
];

export const privacyPolicyData: PolicyItem[] = [

    {
        id: '1',
        title: 'Updated at 2024-06-11',
        content: ''
    },
    {
        id: '2',
        title: 'General Terms',
        content: 'By accessing and placing an order with Athlink, you confirm that you are in agreement with and bound by the terms of service contained in the Terms & Conditions outlined below. These terms apply to the entire website and any email or other type of communication between you and Athlink.\n\nUnder no circumstances shall Athlink team be liable for any direct, indirect, special, incidental or consequential damages, including, but not limited to, loss of data or profit, arising out of the use, or the inability to use, the materials on this site, even if Athlink team or an authorized representative has been advised of the possibility of such damages. If your use of materials from this site results in the need for servicing, repair or correction of equipment or data, you assume any costs thereof.\n\nAthlink will not be responsible for any outcome that may occur during the course of usage of our resources. We reserve the rights to change prices and revise the resources usage policy in any moment. This Privacy Policy was created with Termify.io',
    },
    {
        id: '3',
        title: 'License',
        content: 'Athlink grants you a revocable, non-exclusive, non-transferable, limited license to download, install and use the app strictly in accordance with the terms of this Agreement.\n\nThese Terms & Conditions are a contract between you and Athlink (referred to in these Terms & Conditions as "Athlink", "us", "we" or "our"), the provider of the Athlink website and the services accessible from the Athlink website (which are collectively referred to in these Terms & Conditions as the "Athlink Service").\n\nYou are agreeing to be bound by these Terms & Conditions. If you do not agree to these Terms & Conditions, please do not use the Athlink Service. In these Terms & Conditions, "you" refers both to you as an individual and to the entity you represent. If you violate any of these Terms & Conditions, we reserve the right to cancel your account or block access to your account without notice',
    },
    {
        id: '4',
        title: 'Meanings',

    },
    {
        id: '5',
        title: 'For this Terms & Conditions:',
        content: '-Cookie: small amount of data generated by a website and saved by your web browser. It is used to identify your browser, provide analytics, remember information about you such as your language preference or login information.\n  -Company: when this policy mentions “Company,” “we,” “us,” or “our,” it refers to Athlink, that is responsible for your information under this Terms & Conditions.\n  -Country: where Athlink or the owners/founders of Athlink are based, in this case is United States\n  -Device: any internet connected device such as a phone, tablet, computer or any other device that can be used to visit Athlink and use the services.\n  -Service: refers to the service provided by Athlink as described in the relative terms (if available) and on this platform.\n  -Third-party service: refers to advertisers, contest sponsors, promotional and marketing partners, and others who provide our content or whose products or services we think may interest you.\n  -Website: Athlink."’s" site, which can be accessed via this URL: \n  -You: a person or entity that is registered with Athlink to use the Services.',
    },
    {
        id: '6',
        title: 'Restrictions',
        content: 'You agree not to, and you will not permit others to:\n\n  -License, sell, rent, lease, assign, distribute, transmit, host, outsource, disclose or otherwise commercially exploit the app or make the platform available to any third party.\n  -Modify, make derivative works of, disassemble, decrypt, reverse compile or reverse engineer any part of the app.\n  -Remove, alter or obscure any proprietary notice (including any notice of copyright or trademark) of Athlink or its affiliates, partners, suppliers or the licensors of the app.',
    },
    {
        id: '7',
        title: 'Return and Refund Policy',
        content: "Thanks for shopping at Athlink. We appreciate the fact that you like to buy the stuff we build. We also want to make sure you have a rewarding experience while you’re exploring, evaluating, and purchasing our products.\n\nAs with any shopping experience, there are terms and conditions that apply to transactions at Athlink. We’ll be as brief as our attorneys will allow. The main thing to remember is that by placing an order or making a purchase at Athlink, you agree to the terms along with Athlink.'’s' Privacy Policy.\n\nIf, for any reason, You are not completely satisfied with any good or service that we provide, don't hesitate to contact us and we will discuss any of the issues you are going through with our product",
    },
    {
        id: '8',
        title: 'Your Suggestions',
        content: 'Any feedback, comments, ideas, improvements or suggestions (collectively, "Suggestions") provided by you to Athlink with respect to the app shall remain the sole and exclusive property of Athlink.\n\nAthlink shall be free to use, copy, modify, publish, or redistribute the Suggestions for any purpose and in any way without any credit or any compensation to you.',
    },
    {
        id: '9',
        title: 'Your Consent',
        content: "We've updated our Terms & Conditions to provide you with complete transparency into what is being set when you visit our site and how it's being used. By using our app, registering an account, or making a purchase, you hereby consent to our Terms & Conditions",
    },
    {
        id: '10',
        title: 'Links to Other Websites',
        content: 'This Terms & Conditions applies only to the Services. The Services may contain links to other websites not operated or controlled by Athlink. We are not responsible for the content, accuracy or opinions expressed in such websites, and such websites are not investigated, monitored or checked for accuracy or completeness by us. Please remember that when you use a link to go from the Services to another website, our Terms & Conditions are no longer in effect. Your browsing and interaction on any other website, including those that have a link on our platform, is subject to that website’s own rules and policies. Such third parties may use their own cookies or other methods to collect information about you.',
    },
    {
        id: '12',
        title: 'Cookies',
        content: 'Athlink uses "Cookies" to identify the areas of our website that you have visited. A Cookie is a small piece of data stored on your computer or mobile device by your web browser. We use Cookies to enhance the performance and functionality of our app but are non-essential to their use. However, without these cookies, certain functionality like videos may become unavailable or you would be required to enter your login details every time you visit the app as we would not be able to remember that you had logged in previously. Most web browsers can be set to disable the use of Cookies. However, if you disable Cookies, you may not be able to access functionality on our website correctly or at all. We never place Personally Identifiable Information in Cookies.',
    },
    {
        id: '13',
        title: 'Changes To Our Terms & Conditions',
        content: 'You acknowledge and agree that <?=Athlink;?> may stop (permanently or temporarily) providing the Service (or any features within the Service) to you or to users generally at <?=Athlink;?>’s sole discretion, without prior notice to you. You may stop using the Service at any time. You do not need to specifically inform <?=Athlink;?> when you stop using the Service. You acknowledge and agree that if <?=Athlink;?> disables access to your account, you may be prevented from accessing the Service, your account details or any files or other materials which is contained in your account.\n\nIf we decide to change our Terms & Conditions, we will post those changes on this page, and/or update the Terms & Conditions modification date below.',
    },
    {
        id: '14',
        title: 'Modifications to Our app',
        content: 'Athlink reserves the right to modify, suspend or discontinue, temporarily or permanently, the app or any service to which it connects, with or without notice and without liability to you.',
    },
    {
        id: '15',
        title: 'Updates to Our app',
        content: 'Athlink may from time to time provide enhancements or improvements to the features/ functionality of the app, which may include patches, bug fixes, updates, upgrades and other modifications ("Updates").\n\nUpdates may modify or delete certain features and/or functionalities of the app. You agree that Athlink has no obligation to (i) provide any Updates, or (ii) continue to provide or enable any particular features and/or functionalities of the app to you.\n\nYou further agree that all Updates will be (i) deemed to constitute an integral part of the app, and (ii) subject to the terms and conditions of this Agreement',
    },
    {
        id: '16',
        title: 'Third-Party Services',
        content: "We may display, include or make available third-party content (including data, information, applications and other products services) or provide links to third-party websites or services ('Third- Party Services').\n\nYou acknowledge and agree that Athlink shall not be responsible for any Third-Party Services, including their accuracy, completeness, timeliness, validity, copyright compliance, legality, decency, quality or any other aspect thereof. Athlink does not assume and shall not have any liability or responsibility to you or any other person or entity for any Third-Party Services.\n\nThird-Party Services and links thereto are provided solely as a convenience to you and you access and use them entirely at your own risk and subject to such third parties' terms and conditions.",
    },
    {
        id: '17',
        title: 'Updated at 2024-06-11',

    },
    {
        id: '18',
        title: 'Term and Termination',
        content: "This Agreement shall remain in effect until terminated by you or Athlink.\n\nAthlink may, in its sole discretion, at any time and for any or no reason, suspend or terminate this Agreement with or without prior notice.\n\nThis Agreement will terminate immediately, without prior notice from Athlink, in the event that you fail to comply with any provision of this Agreement. You may also terminate this Agreement by deleting the app and all copies thereof from your computer.\n\nUpon termination of this Agreement, you shall cease all use of the app and delete all copies of the app from your computer.\nTermination of this Agreement will not limit any of Athlink's rights or remedies at law or in equity in case of breach by you (during the term of this Agreement) of any of your obligations under the present Agreement.",
    },
    {
        id: '19',
        title: 'Copyright Infringement Notice',
        content: 'If you are a copyright owner or such owner’s agent and believe any material on our app constitutes an infringement on your copyright, please contact us setting forth the following information: (a) a physical or electronic signature of the copyright owner or a person authorized to act on his behalf; (b) identification of the material that is claimed to be infringing; (c) your contact information, including your address, telephone number, and an email; (d) a statement by you that you have a good faith belief that use of the material is not authorized by the copyright owners; and (e) the a statement that the information in the notification is accurate, and, under penalty of perjury you are authorized to act on behalf of the owner.',
    },
    {
        id: '20',
        title: 'Indenification',
        content: "You agree to indemnify and hold Athlink and its parents, subsidiaries, affiliates, officers, employees, agents, partners and licensors (if any) harmless from any claim or demand, including reasonable attorneys' fees, due to or arising out of your: (a) use of the app; (b) violation of this Agreement or any law or regulation; or (c) violation of any right of a third party.",
    },
    {
        id: '21',
        title: 'No Warranties',
        content: "The app is provided to you 'AS IS' and 'AS AVAILABLE' and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, Athlink, on its own behalf and on behalf of its affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the app, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, Athlink provides no warranty or undertaking, and makes no representation of any kind that the app will meet your requirements, achieve any intended results, be compatible or work with any other software, , systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.\n\nWithout limiting the foregoing, neither Athlink nor any Athlink's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the app, or the information, content, and materials or products included thereon; (ii) that the app will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the app; or (iv) that the app, its servers, the content, or e-mails sent from or on behalf of Athlink are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.\n\nSome jurisdictions do not allow the exclusion of or limitations on implied warranties or the limitations on the applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to you.",
    },
    {
        id: '22',
        title: 'Limitation of Liability',
        content: 'Notwithstanding any damages that you might incur, the entire liability of Athlink and any of its suppliers under any provision of this Agreement and your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by you for the app.\n\nTo the maximum extent permitted by applicable law, in no event shall Athlink or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, for loss of data or other information, for business interruption, for personal injury, for loss of privacy arising out of or in any way related to the use of or inability to use the app, third-party software and/or third-party hardware used with the app, or otherwise in connection with any provision of this Agreement), even if Athlink or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.\n\nSome states/jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so the above limitation or exclusion may not apply to you',
    },
    {
        id: '23',
        title: 'Severability',
        content: 'If any provision of this Agreement is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.\n\nThis Agreement, together with the Privacy Policy and any other legal notices published by Athlink on the Services, shall constitute the entire agreement between you and Athlink concerning the Services. If any provision of this Agreement is deemed invalid by a court of competent jurisdiction, the invalidity of such provision shall not affect the validity of the remaining provisions of this Agreement, which shall remain in full force and effect. No waiver of any term of this Agreement shall be deemed a further or continuing waiver of such term or any other term, and Athlink."’s" failure to assert any right or provision under this Agreement shall not constitute a waiver of such right or provision. YOU AND Athlink AGREE THAT ANY CAUSE OF ACTION ARISING OUT OF OR RELATED TO THE SERVICES MUST COMMENCE WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES. OTHERWISE, SUCH CAUSE OF ACTION IS PERMANENTLY BARRED.',
    },
    {
        id: '24',
        title: 'Waiver',
        content: "Except as provided herein, the failure to exercise a right or to require performance of an obligation under this Agreement shall not effect a party's ability to exercise such right or require such performance at any time thereafter nor shall be the waiver of a breach constitute waiver of any subsequent breach.\n\nNo failure to exercise, and no delay in exercising, on the part of either party, any right or any power under this Agreement shall operate as a waiver of that right or power. Nor shall any single or partial exercise of any right or power under this Agreement preclude further exercise of that or any other right granted herein. In the event of a conflict between this Agreement and any applicable purchase or other terms, the terms of this Agreement shall govern.",
    },
    {
        id: '25',
        title: 'Amendments to this Agreement',
        content: "Athlink reserves the right, at its sole discretion, to modify or replace this Agreement at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.\nBy continuing to access or use our app after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use Athlink.",
    },
    {
        id: '26',
        title: 'Entire Agreement',
        content: "The Agreement constitutes the entire agreement between you and Athlink regarding your use of the app and supersedes all prior and contemporaneous written or oral agreements between you and Athlink.\nYou may be subject to additional terms and conditions that apply when you use or purchase other Athlink's  services, which Athlink will provide to you at the time of such use or purchase.",
    },
    {
        id: '27',
        title: 'Intellectual Property',
        content: 'The app and its entire contents, features and functionality (including but not limited to all information, software, text, displays, images, video and audio, and the design, selection and arrangement thereof), are owned by Athlink, its licensors or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret and other intellectual property or proprietary rights laws. The material may not be copied, modified, reproduced, downloaded or distributed in any way, in whole or in part, without the express prior written permission of Athlink, unless and except as is expressly provided in these Terms & Conditions. Any unauthorized use of the material is prohibited.',
    },
    {
        id: '28',
        title: 'Agreement to Arbitrate',
        content: 'This section applies to any dispute EXCEPT IT DOESN’T INCLUDE A DISPUTE RELATING TO CLAIMS FOR INJUNCTIVE OR EQUITABLE RELIEF REGARDING THE ENFORCEMENT OR VALIDITY OF YOUR OR Athlink."’s" INTELLECTUAL PROPERTY RIGHTS. The term “dispute” means any dispute, action, or other controversy between you and Athlink concerning the Services or this agreement, whether in contract, warranty, tort, statute, regulation, ordinance, or any other legal or equitable basis. “Dispute” will be given the broadest possible meaning allowable under law.',
    },
    {
        id: '29',
        title: 'Notice of Dispute',
        content: 'In the event of a dispute, you or Athlink must give the other a Notice of Dispute, which is a written statement that sets forth the name, address, and contact information of the party giving it, the facts giving rise to the dispute, and the relief requested. You must send any Notice of Dispute via email to: . Athlink will send any Notice of Dispute to you by mail to your address if we have it, or otherwise to your email address. You and Athlink will attempt to resolve any dispute through informal negotiation within sixty (60) days from the date the Notice of Dispute is sent. After sixty (60) days, you or Athlink may commence arbitration.',
    },
    {
        id: '30',
        title: 'Binding Arbitration',
        content: 'If you and Athlink don’t resolve any dispute by informal negotiation, any other effort to resolve the dispute will be conducted exclusively by binding arbitration as described in this section. You are giving up the right to litigate (or participate in as a party or class member) all disputes in court before a judge or jury. The dispute shall be settled by binding arbitration in accordance with the commercial arbitration rules of the American Arbitration Association. Either party may seek any interim or preliminary injunctive relief from any court of competent jurisdiction, as necessary to protect the party’s rights or property pending the completion of arbitration. Any and all legal, accounting, and other costs, fees, and expenses incurred by the prevailing party shall be borne by the non-prevailing party.',
    },
    {
        id: '31',
        title: 'Submissions and Privacy',
        content: 'In the event that you submit or post any ideas, creative suggestions, designs, photographs, information, advertisements, data or proposals, including ideas for new or improved products, services, features, technologies or promotions, you expressly agree that such submissions will automatically be treated as non-confidential and non-proprietary and will become the sole property of Athlink without any compensation or credit to you whatsoever. Athlink and its affiliates shall have no obligations with respect to such submissions or posts and may use the ideas contained in such submissions or posts for any purposes in any medium in perpetuity, including, but not limited to, developing, manufacturing, and marketing products and services using such ideas.',
    },
    {
        id: '32',
        title: 'Promotions',
        content: 'Athlink may, from time to time, include contests, promotions, sweepstakes, or other activities (“Promotions”) that require you to submit material or information concerning yourself. Please note that all Promotions may be governed by separate rules that may contain certain eligibility requirements, such as restrictions as to age and geographic location. You are responsible to read all Promotions rules to determine whether or not you are eligible to participate. If you enter any Promotion, you agree to abide by and to comply with all Promotions Rules.\n\nAdditional terms and conditions may apply to purchases of goods or services on or through the Services, which terms and conditions are made a part of this Agreement by this reference.',
    },
    {
        id: '33',
        title: 'Typographical Errors',
        content: 'In the event a product and/or service is listed at an incorrect price or with incorrect information due to typographical error, we shall have the right to refuse or cancel any orders placed for the product and/or service listed at the incorrect price. We shall have the right to refuse or cancel any such order whether or not the order has been confirmed and your credit card charged. If your credit card has already been charged for the purchase and your order is canceled, we shall immediately issue a credit to your credit card account or other payment account in the amount of the charge',
    },
    {
        id: '34',
        title: 'Miscellaneous',
        content: 'If for any reason a court of competent jurisdiction finds any provision or portion of these Terms & Conditions to be unenforceable, the remainder of these Terms & Conditions will continue in full force and effect. Any waiver of any provision of these Terms & Conditions will be effective only if in writing and signed by an authorized representative of Athlink. Athlink will be entitled to injunctive or other equitable relief (without the obligations of posting any bond or surety) in the event of any breach or anticipatory breach by you. Athlink operates and controls the Athlink Service from its offices in United States. The Service is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation. Accordingly, those persons who choose to access the Athlink Service from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable. These Terms & Conditions (which include and incorporate the Athlink Privacy Policy) contains the entire understanding, and supersedes all prior understandings, between you and Athlink concerning its subject matter, and cannot be changed or modified by you. The section headings used in this Agreement are for convenience only and will not be given any legal import',
    },
    {
        id: '35',
        title: 'Disclaimer',
        content: 'Athlink is not responsible for any content, code or any other imprecision.\n\nAthlink does not provide warranties or guarantees.\n\nIn no event shall Athlink be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. Athlink reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice.\n\nThe Athlink Service and its contents are provided "as is" and "as available" without any warranty or representations of any kind, whether express or implied. Athlink is a distributor and not a publisher of the content supplied by third parties; as such, Athlink exercises no editorial control over such content and makes no warranty or representation as to the accuracy, reliability or currency of any information, content, service or merchandise provided through or accessible via the Athlink Service. Without limiting the foregoing, Athlink specifically disclaims all warranties and representations in any content transmitted on or in connection with the Athlink Service or on sites that may appear as links on the Athlink Service, or in the products provided as a part of, or otherwise in connection with, the Athlink Service, including without limitation any warranties of merchantability, fitness for a particular purpose or non-infringement of third party rights. No oral advice or written information given by Athlink or any of its affiliates, employees, officers, directors, agents, or the like will create a warranty. Price and availability information is subject to change without notice. Without limiting the foregoing, Athlink does not warrant that the Athlink Service will be uninterrupted, uncorrupted, timely, or error-free.',
    },
    {
        id: '36',
        title: '',
        content: "Contact Us\n\non't hesitate to contact us if you have any questions.\n\n -Via this Link:  http://athlink.app",
    },


];

export const LeaderProfile: leader[] = [
    {
        id: 1,
        name: "Sebastian",
        username: "@username",
        number: "4",
        image: images.Lead1
    },
    {
        id: 2,
        name: "Jason",
        username: "@username",
        number: "5",
        image: images.Jason
    },
    {
        id: 3,
        name: "Natalie",
        username: "@username",
        number: "6",
        image: images.Natalie
    },
    {
        id: 4,
        name: "Serenity",
        username: "@username",
        number: "7",
        image: images.Serenty
    },
    {
        id: 5,
        name: "Hannah",
        username: "@username",
        number: "8",
        image: images.G2,
    },
    {
        id: 6,
        name: "FabianAllen",
        username: "@username",
        number: "9",
        image: images.Natalie,
    },
    {
        id: 7,
        name: "Lewis",
        username: "@username",
        number: "10",
        image: images.Serenty,
    },
    {
        id: 8,
        name: "Gudakesh",
        username: "@username",
        number: "11",
        image: images.Jason,
    },
    {
        id: 9,
        name: "Motie",
        username: "@username",
        number: "12",
        image: images.Lead1,
    },
];



export const NotificationData: Notification[] = [

    {
        id: 1,
        title: "Registration",
        message: "35% your daily challenge completed ✔️",
        time: "9:25"
    },
    {
        id: 2,
        title: "Registration",
        message: "35% your daily challenge completed ✔️",
        time: "9:25"
    },
    {
        id: 3,
        title: "🧑🏻‍💻 Freind Request",
        message: "Some one Sending You request ❤️",
        time: "9:38"
    },
    {
        id: 4,
        title: "Attention",
        message: "🤡 Your subscription is going to expire very soon. Subscribe now. ⚡",
        time: "9:38"
    },
    {
        id: 5,
        title: "Attention",
        message: "🤡 Your subscription is going to expire very soon. Subscribe now.  🌍",
        time: "9:38"
    },
    {
        id: 6,
        title: "Attention",
        message: "Your subscription is going to expire very soon. Subscribe now.",
        time: "9:38"
    },
    {
        id: 7,
        title: "Attention",
        message: "Your subscription is going to expire very soon. Subscribe now.",
        time: "9:38"
    },
    {
        id: 8,
        title: "Subscription",
        message: "Your subscription is going to expire very soon. Subscribe now.",
        time: "9:38"
    },
    {
        id: 9,
        title: "Athlink",
        message: " 90% Discout Wow. \n Subscribe And Grab Now this offer",
        time: "9:38"
    },
]

export const countries: Country[] = [
    { name: 'Afghanistan', code: 'AF', callingCode: '+93', flag: '🇦🇫' },
    { name: 'Albania', code: 'AL', callingCode: '+355', flag: '🇦🇱' },
    { name: 'Algeria', code: 'DZ', callingCode: '+213', flag: '🇩🇿' },
    { name: 'Andorra', code: 'AD', callingCode: '+376', flag: '🇦🇩' },
    { name: 'Angola', code: 'AO', callingCode: '+244', flag: '🇦🇴' },
    { name: 'Antigua and Barbuda', code: 'AG', callingCode: '+1-268', flag: '🇦🇬' },
    { name: 'Argentina', code: 'AR', callingCode: '+54', flag: '🇦🇷' },
    { name: 'Armenia', code: 'AM', callingCode: '+374', flag: '🇦🇲' },
    { name: 'Australia', code: 'AU', callingCode: '+61', flag: '🇦🇺' },
    { name: 'Austria', code: 'AT', callingCode: '+43', flag: '🇦🇹' },
    { name: 'Azerbaijan', code: 'AZ', callingCode: '+994', flag: '🇦🇿' },
    { name: 'Bahamas', code: 'BS', callingCode: '+1-242', flag: '🇧🇸' },
    { name: 'Bahrain', code: 'BH', callingCode: '+973', flag: '🇧🇭' },
    { name: 'Bangladesh', code: 'BD', callingCode: '+880', flag: '🇧🇩' },
    { name: 'Barbados', code: 'BB', callingCode: '+1-246', flag: '🇧🇧' },
    { name: 'Belarus', code: 'BY', callingCode: '+375', flag: '🇧🇾' },
    { name: 'Belgium', code: 'BE', callingCode: '+32', flag: '🇧🇪' },
    { name: 'Belize', code: 'BZ', callingCode: '+501', flag: '🇧🇿' },
    { name: 'Benin', code: 'BJ', callingCode: '+229', flag: '🇧🇯' },
    { name: 'Bhutan', code: 'BT', callingCode: '+975', flag: '🇧🇹' },
    { name: 'Bolivia', code: 'BO', callingCode: '+591', flag: '🇧🇴' },
    { name: 'Bosnia and Herzegovina', code: 'BA', callingCode: '+387', flag: '🇧🇦' },
    { name: 'Botswana', code: 'BW', callingCode: '+267', flag: '🇧🇼' },
    { name: 'Brazil', code: 'BR', callingCode: '+55', flag: '🇧🇷' },
    { name: 'Brunei', code: 'BN', callingCode: '+673', flag: '🇧🇳' },
    { name: 'Bulgaria', code: 'BG', callingCode: '+359', flag: '🇧🇬' },
    { name: 'Burkina Faso', code: 'BF', callingCode: '+226', flag: '🇧🇫' },
    { name: 'Burundi', code: 'BI', callingCode: '+257', flag: '🇧🇮' },
    { name: 'Cabo Verde', code: 'CV', callingCode: '+238', flag: '🇨🇻' },
    { name: 'Cambodia', code: 'KH', callingCode: '+855', flag: '🇰🇭' },
    { name: 'Cameroon', code: 'CM', callingCode: '+237', flag: '🇨🇲' },
    { name: 'Canada', code: 'CA', callingCode: '+1', flag: '🇨🇦' },
    { name: 'Central African Republic', code: 'CF', callingCode: '+236', flag: '🇨🇫' },
    { name: 'Chad', code: 'TD', callingCode: '+235', flag: '🇹🇩' },
    { name: 'Chile', code: 'CL', callingCode: '+56', flag: '🇨🇱' },
    { name: 'China', code: 'CN', callingCode: '+86', flag: '🇨🇳' },
    { name: 'Colombia', code: 'CO', callingCode: '+57', flag: '🇨🇴' },
    { name: 'Comoros', code: 'KM', callingCode: '+269', flag: '🇰🇲' },
    { name: 'Congo (Congo-Brazzaville)', code: 'CG', callingCode: '+242', flag: '🇨🇬' },
    { name: 'Congo (Democratic Republic of the)', code: 'CD', callingCode: '+243', flag: '🇨🇩' },
    { name: 'Costa Rica', code: 'CR', callingCode: '+506', flag: '🇨🇷' },
    { name: 'Croatia', code: 'HR', callingCode: '+385', flag: '🇭🇷' },
    { name: 'Cuba', code: 'CU', callingCode: '+53', flag: '🇨🇺' },
    { name: 'Cyprus', code: 'CY', callingCode: '+357', flag: '🇨🇾' },
    { name: 'Czech Republic', code: 'CZ', callingCode: '+420', flag: '🇨🇿' },
    { name: 'Denmark', code: 'DK', callingCode: '+45', flag: '🇩🇰' },
    { name: 'Djibouti', code: 'DJ', callingCode: '+253', flag: '🇩🇯' },
    { name: 'Dominica', code: 'DM', callingCode: '+1-767', flag: '🇩🇲' },
    { name: 'Dominican Republic', code: 'DO', callingCode: '+1-809', flag: '🇩🇴' },
    { name: 'Ecuador', code: 'EC', callingCode: '+593', flag: '🇪🇨' },
    { name: 'Egypt', code: 'EG', callingCode: '+20', flag: '🇪🇬' },
    { name: 'El Salvador', code: 'SV', callingCode: '+503', flag: '🇸🇻' },
    { name: 'Equatorial Guinea', code: 'GQ', callingCode: '+240', flag: '🇬🇶' },
    { name: 'Eritrea', code: 'ER', callingCode: '+291', flag: '🇪🇷' },
    { name: 'Estonia', code: 'EE', callingCode: '+372', flag: '🇪🇪' },
    { name: 'Eswatini', code: 'SZ', callingCode: '+268', flag: '🇸🇿' },
    { name: 'Ethiopia', code: 'ET', callingCode: '+251', flag: '🇪🇹' },
    { name: 'Fiji', code: 'FJ', callingCode: '+679', flag: '🇫🇯' },
    { name: 'Finland', code: 'FI', callingCode: '+358', flag: '🇫🇮' },
    { name: 'France', code: 'FR', callingCode: '+33', flag: '🇫🇷' },
    { name: 'Gabon', code: 'GA', callingCode: '+241', flag: '🇬🇦' },
    { name: 'Gambia', code: 'GM', callingCode: '+220', flag: '🇬🇲' },
    { name: 'Georgia', code: 'GE', callingCode: '+995', flag: '🇬🇪' },
    { name: 'Germany', code: 'DE', callingCode: '+49', flag: '🇩🇪' },
    { name: 'Ghana', code: 'GH', callingCode: '+233', flag: '🇬🇭' },
    { name: 'Greece', code: 'GR', callingCode: '+30', flag: '🇬🇷' },
    { name: 'Grenada', code: 'GD', callingCode: '+1-473', flag: '🇬🇩' },
    { name: 'Guatemala', code: 'GT', callingCode: '+502', flag: '🇬🇹' },
    { name: 'Guinea', code: 'GN', callingCode: '+224', flag: '🇬🇳' },
    { name: 'Guinea-Bissau', code: 'GW', callingCode: '+245', flag: '🇬🇼' },
    { name: 'Guyana', code: 'GY', callingCode: '+592', flag: '🇬🇾' },
    { name: 'Haiti', code: 'HT', callingCode: '+509', flag: '🇭🇹' },
    { name: 'Honduras', code: 'HN', callingCode: '+504', flag: '🇭🇳' },
    { name: 'Hungary', code: 'HU', callingCode: '+36', flag: '🇭🇺' },
    { name: 'Iceland', code: 'IS', callingCode: '+354', flag: '🇮🇸' },
    { name: 'India', code: 'IN', callingCode: '+91', flag: '🇮🇳' },
    { name: 'Indonesia', code: 'ID', callingCode: '+62', flag: '🇮🇩' },
    { name: 'Iran', code: 'IR', callingCode: '+98', flag: '🇮🇷' },
    { name: 'Iraq', code: 'IQ', callingCode: '+964', flag: '🇮🇶' },
    { name: 'Ireland', code: 'IE', callingCode: '+353', flag: '🇮🇪' },
    { name: 'Italy', code: 'IT', callingCode: '+39', flag: '🇮🇹' },
    { name: 'Jamaica', code: 'JM', callingCode: '+1-876', flag: '🇯🇲' },
    { name: 'Japan', code: 'JP', callingCode: '+81', flag: '🇯🇵' },
    { name: 'Jordan', code: 'JO', callingCode: '+962', flag: '🇯🇴' },
    { name: 'Kazakhstan', code: 'KZ', callingCode: '+7', flag: '🇰🇿' },
    { name: 'Kenya', code: 'KE', callingCode: '+254', flag: '🇰🇪' },
    { name: 'Kiribati', code: 'KI', callingCode: '+686', flag: '🇰🇷' },
    { name: 'Kuwait', code: 'KW', callingCode: '+965', flag: '🇰🇼' },
    { name: 'Kyrgyzstan', code: 'KG', callingCode: '+996', flag: '🇰🇬' },
    { name: 'Laos', code: 'LA', callingCode: '+856', flag: '🇱🇦' },
    { name: 'Latvia', code: 'LV', callingCode: '+371', flag: '🇱🇻' },
    { name: 'Lebanon', code: 'LB', callingCode: '+961', flag: '🇱🇧' },
    { name: 'Lesotho', code: 'LS', callingCode: '+266', flag: '🇱🇸' },
    { name: 'Liberia', code: 'LR', callingCode: '+231', flag: '🇱🇷' },
    { name: 'Libya', code: 'LY', callingCode: '+218', flag: '🇱🇾' },
    { name: 'Liechtenstein', code: 'LI', callingCode: '+423', flag: '🇱🇮' },
    { name: 'Lithuania', code: 'LT', callingCode: '+370', flag: '🇱🇹' },
    { name: 'Luxembourg', code: 'LU', callingCode: '+352', flag: '🇱🇺' },
    { name: 'Madagascar', code: 'MG', callingCode: '+261', flag: '🇲🇬' },
    { name: 'Malawi', code: 'MW', callingCode: '+265', flag: '🇲🇼' },
    { name: 'Malaysia', code: 'MY', callingCode: '+60', flag: '🇲🇾' },
    { name: 'Maldives', code: 'MV', callingCode: '+960', flag: '🇲🇻' },
    { name: 'Mali', code: 'ML', callingCode: '+223', flag: '🇲🇱' },
    { name: 'Malta', code: 'MT', callingCode: '+356', flag: '🇲🇹' },
    { name: 'Marshall Islands', code: 'MH', callingCode: '+692', flag: '🇲🇭' },
    { name: 'Mauritania', code: 'MR', callingCode: '+222', flag: '🇲🇷' },
    { name: 'Mauritius', code: 'MU', callingCode: '+230', flag: '🇲🇺' },
    { name: 'Mexico', code: 'MX', callingCode: '+52', flag: '🇲🇽' },
    { name: 'Micronesia', code: 'FM', callingCode: '+691', flag: '🇫🇲' },
    { name: 'Moldova', code: 'MD', callingCode: '+373', flag: '🇲🇩' },
    { name: 'Monaco', code: 'MC', callingCode: '+377', flag: '🇲🇨' },
    { name: 'Mongolia', code: 'MN', callingCode: '+976', flag: '🇲🇳' },
    { name: 'Montenegro', code: 'ME', callingCode: '+382', flag: '🇲🇹' },
    { name: 'Morocco', code: 'MA', callingCode: '+212', flag: '🇲🇦' },
    { name: 'Mozambique', code: 'MZ', callingCode: '+258', flag: '🇲🇿' },
    { name: 'Myanmar', code: 'MM', callingCode: '+95', flag: '🇲🇲' },
    { name: 'Namibia', code: 'NA', callingCode: '+264', flag: '🇳🇦' },
    { name: 'Nauru', code: 'NR', callingCode: '+674', flag: '🇳🇷' },
    { name: 'Nepal', code: 'NP', callingCode: '+977', flag: '🇳🇵' },
    { name: 'Netherlands', code: 'NL', callingCode: '+31', flag: '🇳🇱' },
    { name: 'New Zealand', code: 'NZ', callingCode: '+64', flag: '🇳🇿' },
    { name: 'Nicaragua', code: 'NI', callingCode: '+505', flag: '🇳🇮' },
    { name: 'Niger', code: 'NE', callingCode: '+227', flag: '🇳🇪' },
    { name: 'Nigeria', code: 'NG', callingCode: '+234', flag: '🇳🇬' },
    { name: 'North Korea', code: 'KP', callingCode: '+850', flag: '🇰🇵' },
    { name: 'North Macedonia', code: 'MK', callingCode: '+389', flag: '🇲🇰' },
    { name: 'Norway', code: 'NO', callingCode: '+47', flag: '🇳🇴' },
    { name: 'Oman', code: 'OM', callingCode: '+968', flag: '🇴🇲' },
    { name: 'Pakistan', code: 'PK', callingCode: '+92', flag: '🇵🇰' },
    { name: 'Palau', code: 'PW', callingCode: '+680', flag: '🇵🇼' },
    { name: 'Palestine State', code: 'PS', callingCode: '+970', flag: '🇵🇸' },
    { name: 'Panama', code: 'PA', callingCode: '+507', flag: '🇵🇦' },
    { name: 'Papua New Guinea', code: 'PG', callingCode: '+675', flag: '🇵🇬' },
    { name: 'Paraguay', code: 'PY', callingCode: '+595', flag: '🇵🇾' },
    { name: 'Peru', code: 'PE', callingCode: '+51', flag: '🇵🇪' },
    { name: 'Philippines', code: 'PH', callingCode: '+63', flag: '🇵🇭' },
    { name: 'Poland', code: 'PL', callingCode: '+48', flag: '🇵🇱' },
    { name: 'Portugal', code: 'PT', callingCode: '+351', flag: '🇵🇹' },
    { name: 'Qatar', code: 'QA', callingCode: '+974', flag: '🇶🇦' },
    { name: 'Romania', code: 'RO', callingCode: '+40', flag: '🇷🇴' },
    { name: 'Russia', code: 'RU', callingCode: '+7', flag: '🇷🇺' },
    { name: 'Rwanda', code: 'RW', callingCode: '+250', flag: '🇷🇼' },
    { name: 'Saint Kitts and Nevis', code: 'KN', callingCode: '+1-869', flag: '🇰🇳' },
    { name: 'Saint Lucia', code: 'LC', callingCode: '+1-758', flag: '🇱🇨' },
    { name: 'Saint Vincent and the Grenadines', code: 'VC', callingCode: '+1-784', flag: '🇻🇨' },
    { name: 'Samoa', code: 'WS', callingCode: '+685', flag: '🇼🇸' },
    { name: 'San Marino', code: 'SM', callingCode: '+378', flag: '🇸🇲' },
    { name: 'Sao Tome and Principe', code: 'ST', callingCode: '+239', flag: '🇸🇹' },
    { name: 'Saudi Arabia', code: 'SA', callingCode: '+966', flag: '🇸🇦' },
    { name: 'Senegal', code: 'SN', callingCode: '+221', flag: '🇸🇳' },
    { name: 'Serbia', code: 'RS', callingCode: '+381', flag: '🇷🇸' },
    { name: 'Seychelles', code: 'SC', callingCode: '+248', flag: '🇸🇨' },
    { name: 'Sierra Leone', code: 'SL', callingCode: '+232', flag: '🇸🇱' },
    { name: 'Singapore', code: 'SG', callingCode: '+65', flag: '🇸🇬' },
    { name: 'Slovakia', code: 'SK', callingCode: '+421', flag: '🇸🇰' },
    { name: 'Slovenia', code: 'SI', callingCode: '+386', flag: '🇸🇮' },
    { name: 'Solomon Islands', code: 'SB', callingCode: '+677', flag: '🇸🇧' },
    { name: 'Somalia', code: 'SO', callingCode: '+252', flag: '🇸🇴' },
    { name: 'South Africa', code: 'ZA', callingCode: '+27', flag: '🇿🇦' },
    { name: 'South Korea', code: 'KR', callingCode: '+82', flag: '🇰🇷' },
    { name: 'South Sudan', code: 'SS', callingCode: '+211', flag: '🇸🇸' },
    { name: 'Spain', code: 'ES', callingCode: '+34', flag: '🇪🇸' },
    { name: 'Sri Lanka', code: 'LK', callingCode: '+94', flag: '🇱🇰' },
    { name: 'Sudan', code: 'SD', callingCode: '+249', flag: '🇸🇩' },
    { name: 'Suriname', code: 'SR', callingCode: '+597', flag: '🇸🇷' },
    { name: 'Sweden', code: 'SE', callingCode: '+46', flag: '🇸🇪' },
    { name: 'Switzerland', code: 'CH', callingCode: '+41', flag: '🇨🇭' },
    { name: 'Syria', code: 'SY', callingCode: '+963', flag: '🇸🇾' },
    { name: 'Tajikistan', code: 'TJ', callingCode: '+992', flag: '🇹🇯' },
    { name: 'Tanzania', code: 'TZ', callingCode: '+255', flag: '🇹🇿' },
    { name: 'Thailand', code: 'TH', callingCode: '+66', flag: '🇹🇭' },
    { name: 'Timor-Leste', code: 'TL', callingCode: '+670', flag: '🇹🇱' },
    { name: 'Togo', code: 'TG', callingCode: '+228', flag: '🇹🇬' },
    { name: 'Tonga', code: 'TO', callingCode: '+676', flag: '🇹🇴' },
    { name: 'Trinidad and Tobago', code: 'TT', callingCode: '+1-868', flag: '🇹🇹' },
    { name: 'Tunisia', code: 'TN', callingCode: '+216', flag: '🇹🇳' },
    { name: 'Turkey', code: 'TR', callingCode: '+90', flag: '🇹🇷' },
    { name: 'Turkmenistan', code: 'TM', callingCode: '+993', flag: '🇹🇲' },
    { name: 'Tuvalu', code: 'TV', callingCode: '+688', flag: '🇹🇻' },
    { name: 'Uganda', code: 'UG', callingCode: '+256', flag: '🇺🇬' },
    { name: 'Ukraine', code: 'UA', callingCode: '+380', flag: '🇺🇦' },
    { name: 'United Arab Emirates', code: 'AE', callingCode: '+971', flag: '🇦🇪' },
    { name: 'United Kingdom', code: 'GB', callingCode: '+44', flag: '🇬🇧' },
    { name: 'United States', code: 'US', callingCode: '+1', flag: '🇺🇸' },
    { name: 'Uruguay', code: 'UY', callingCode: '+598', flag: '🇺🇾' },
    { name: 'Uzbekistan', code: 'UZ', callingCode: '+998', flag: '🇺🇿' },
    { name: 'Vanuatu', code: 'VU', callingCode: '+678', flag: '🇻🇺' },
    { name: 'Vatican City', code: 'VA', callingCode: '+39', flag: '🇻🇦' },
    { name: 'Venezuela', code: 'VE', callingCode: '+58', flag: '🇻🇪' },
    { name: 'Vietnam', code: 'VN', callingCode: '+84', flag: '🇻🇳' },
    { name: 'Yemen', code: 'YE', callingCode: '+967', flag: '🇾🇪' },
    { name: 'Zambia', code: 'ZM', callingCode: '+260', flag: '🇿🇲' },
    { name: 'Zimbabwe', code: 'ZW', callingCode: '+263', flag: '🇿🇼' }
];


const dummydata = { countries, languageoptions, Genderoptions }

export default dummydata;