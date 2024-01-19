const app = Vue.createApp({
    data() {
        return {

            name: "Njeri Cooper" ,
            contact: "hello@njeri.codes | 517-858-2899",
            summary: "Self-driven software engineer. Focused on Javascript, Python, cloud technologies, and DevOps. I'm most enthusiastic about solving problems from a full stack perspective.",
            currentJob: "Web Developer, Youth Villages | 2021-Present",
            currentDesc: "Lead web developer on a local government-backed project that reduces gun violence and helps heal disenfranchised communities with therapy and job resources. Helped resolve multi-brand web accessibility issues by using APIs. This change directly decreased media storage and hosting costs by 50%",
            freelance:"Freelance Software Developer (Serverless) | 2018-Present",
            freelanceDesc:"Building quality web sites and web apps for clients in a timely manner utilizing WordPress, Gatsby, Eleventy, MERNStack",
            prevJob1: "UI / UX / Mobile Developer, St. Jude | 2016-2018",
            prevJob1Desc:"Led the planning, design, development, testing,and production deployment process for a new iteration for St.Jude's mobile app utilizing Apple's User Interface guidelines to set the tone for the design system and swift.The impact of this while launching it in partnership with Twitch totaled to $11 million raised for St.Jude.",
            skills: " (SMACSS, BEM, Build Tools), ES6 and Human Interaction Design.",
            icon1: "https://images.unsplash.com/photo-1635776063043-ab23b4c226f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50",
         /*
            icon1: 'https://images.unsplash.com/photo-1635776063043-ab23b4c226f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80', */
            icon1Alt: "",
            qrCode: "https://ucarecdn.com/3ce559f5-2718-4b38-af18-e2d653f27542/-/preview/586x270/-/quality/smart/-/format/auto/",
            qrCodeAlt: "",
            technologies: "Technologies: React, Vue, Node, MySQL, WordPress, Gatsby, jQuery, Microsoft Power BI, Adobe Creative Suite, git, GitHub Actions",
            languages: "Languages: JavaScript, PHP, HTML, CSS",
            other: "Other: CRMs, DonorDrive, SalesForce MC, APIs, CDNs, CI/CD"
        }
    }
})

/* paste at bottom of html div in body tag 

    <script src="./assets/scripts/resume.js"></script>
    <script>
        const mountedApp = app.mount('#app')
    </script>*/