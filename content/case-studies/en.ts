import type { ProjectId } from "@/content/projects";
import type { CaseStudyCopy } from ".";

const en: Partial<Record<ProjectId, CaseStudyCopy>> = {
  "saha-santiye": {
    meta: {
      title: "MK OPS: field operations management for telecom and fiber | MK Digital Systems",
      description:
        "MK OPS brings daily work, approvals, crews, materials and progress payments for telecom and fiber field teams into one system, each company in its own space.",
    },
    title: "Bringing field operations into one place",
    lead:
      "Work done in the field, visible in the office at the same time. MK OPS brings telecom and fiber field operations, from daily work entries and approvals to crews, materials and progress payments, into one system that each company uses in its own space.",
    audience: {
      heading: "Whose problem?",
      text:
        "Companies that run many crews, projects and materials at once on telecom and fiber infrastructure work. From crew leaders in the field to operations and accounting in the office, different people see different parts of the job.",
      points: [
        "Field crews and crew leaders working on different projects on the same day",
        "Project and company managers who plan, check and approve the work",
        "The warehouse side tracking materials, vehicles and equipment",
        "The office preparing progress payments and reports",
      ],
    },
    problem: {
      heading: "What was the problem?",
      text:
        "In the field, work moves fast; information ends up scattered across messages, photos and separate spreadsheets. Which crew is doing what and where, which job is waiting for approval, where a material went: often visible only at the end of the day, pieced together by hand.",
      points: [
        "Daily work stays in messages and paper forms",
        "Which job is waiting for approval stays unclear until the end of the day",
        "Material issues don't match the stock",
        "Crew earnings and progress payments are collected by hand at period end",
        "Several companies' data gets mixed up in the same spreadsheets",
      ],
    },
    approach: {
      heading: "How did we approach it?",
      text:
        "We started from the flow of a day in the field rather than from screens: work entries during the day, review and approval in the evening, reports at period end. The aim: whoever sees a piece of information first can enter it directly, and everyone sees only what is useful to them.",
      points: [
        "Thinking in roles: crew leaders, project managers and company managers see different things",
        "Quick entry on the phone in the field, bulk review on the desktop in the office",
        "A clear approval flow: draft, submitted, approved or rejected",
        "Collecting records around progress payment periods",
      ],
    },
    solution: {
      heading: "Each company in its own space",
      text:
        "We built MK OPS as a multi-tenant SaaS that several companies can use, each in its own isolated space. Every company manages its crews, projects, field work and approvals in its own workspace; role-based permissions make sure everyone sees only their own work.",
      points: [
        "Per-company data isolation and role-based permissions",
        "Daily field work entry and approval flow",
        "Material delivery notes and stock tracking",
        "Crew earnings, company share and progress payment periods",
        "Audit log, Excel and PDF reports",
        "Interface in Turkish, English, German, French and Spanish",
      ],
    },
    screens: {
      "ops-approvals": {
        caption: "MK OPS · Overview: project states, period progress payments and approaching vehicle document dates.",
        alt: "MK OPS overview with sample projects, progress payments and vehicle alerts",
      },
      "ops-mobile": {
        caption: "MK OPS · Attendance: worked days, leave, reports and weekly rest in a monthly table.",
        alt: "MK OPS personnel attendance screen with sample monthly records",
      },
      "ops-management": {
        caption: "MK OPS · Warehouse: stock by warehouse and equipment assigned to vehicles.",
        alt: "MK OPS warehouse management screen with sample stock and vehicle equipment",
      },
    },
    ctaText: "If you want to bring field work and office tracking together, tell us how your day runs today and we’ll shape the right approach together.",
    screensNote: "All records on these screens are sample data; they contain no real people, companies or projects.",
    modules: {
      heading: "Core modules",
      items: [
        { title: "Daily work entry and approval", text: "Work done in the field is recorded the same day; a manager approves it or asks for a correction from one list." },
        { title: "Crew and project management", text: "Crews, projects and work items are defined per company; daily entries are made against them." },
        { title: "Material delivery notes and stock", text: "Material issues are recorded with delivery notes; the stock updates from the same records." },
        { title: "Vehicles and equipment", text: "Vehicles and equipment are kept in one place together with the crews." },
        { title: "Progress payment periods", text: "Crew earnings and the company share are calculated per period from the same records." },
        { title: "Company space and roles", text: "Each company works in its own isolated space; company managers, project managers and crew leaders see different screens." },
        { title: "Audit log", text: "Who changed what and when is kept on record." },
        { title: "Reports and languages", text: "Reports export to Excel and PDF; the interface can be used in five languages." },
      ],
    },
  },
  "mk-adisyon": {
    meta: {
      title: "Restaurant ordering and check management | MK Digital Systems",
      description:
        "MK Adisyon connects waiter, kitchen, cashier and management flows in a working web system. Its mobile application is published on Google Play.",
    },
    title: "Managing restaurant operations in one flow, from order to payment",
    lead:
      "MK Adisyon is a two-surface product that keeps the restaurant team on one shared record, from the first table order through kitchen preparation to closing the bill: a working web system and a mobile application published on Google Play.",
    audience: {
      heading: "Whose problem?",
      text:
        "Restaurants and cafés coordinating ordering, preparation, service and payment at the same time. Information entered by a waiter needs to reach the kitchen, cashier and management without being entered again.",
      points: [
        "Service teams following room and table status",
        "Kitchens managing waiting, preparing and ready orders",
        "Cashiers handling split or partial payments",
        "Managers overseeing products, tables, shifts and operations",
      ],
    },
    problem: {
      heading: "What was the problem?",
      text:
        "Restaurant operations move between teams working at different speeds. When order details, table changes and payment status do not live in one record, delays, duplicate entry and misunderstandings become more likely.",
      points: [
        "Different teams seeing different table and order states",
        "Product options, notes and service rounds reaching the kitchen incompletely",
        "Ready orders not reaching the service team at the right time",
        "Per-person or per-item bill splitting slowing down checkout",
      ],
    },
    approach: {
      heading: "How did we approach it?",
      text:
        "We designed task-focused views for each role while keeping every role connected to the same check. A table opened by a waiter, kitchen preparation and cashier payment steps therefore stay in one continuous flow.",
      points: [
        "Task-focused screens for waiter, kitchen, cashier and management roles",
        "One order record followed from the table through payment closure",
        "Explicit state changes such as preparing, ready and served",
        "Layouts suited to the task on phone and desktop screens",
      ],
    },
    solution: {
      heading: "A real web system and a published mobile application",
      text:
        "MK Adisyon has two real product surfaces. The operational features below are verified in the working web system. A separate Android application is published on Google Play, and the two surfaces are described distinctly.",
      parts: {
        web: {
          summary:
            "The working web system brings table, ordering, kitchen, service, cashier and management flows together in role-based views.",
          highlights: [
            "Areas and tables, table opening and guest count",
            "Products, options, notes, service rounds and kitchen dispatch",
            "Waiting, preparing, ready and served order flow",
            "Moving and merging tables, and splitting a bill",
            "Amount-, person- or item-based splits and partial payments",
            "Shifts, products, tables, expenses, finance and activity logs",
          ],
        },
        mobile: {
          summary:
            "MK Adisyon's second product surface is its Android application published on Google Play. Mobile operations and web management are presented as separate contexts.",
          highlights: [
            "A real, developed MK Adisyon product surface",
            "Published on Google Play",
            "A verified application address separate from the web system",
          ],
        },
      },
    },
    screens: {
      "adisyon-cashier": {
        caption: "Web system · Cashier: the open check, payment splits and collection options in one view.",
        alt: "MK Adisyon web cashier screen with sample order and payment data",
      },
      "adisyon-waiter": {
        caption: "Web system · Waiter: the working responsive web interface on a phone; this is not the mobile application.",
        alt: "MK Adisyon responsive web waiter screen with sample table data",
      },
      "adisyon-mobile-app": {
        caption: "Mobile application · MK Adisyon Android app published on Google Play.",
        alt: "Welcome screen of the MK Adisyon mobile application published on Google Play",
      },
      "adisyon-kitchen": {
        caption: "Web application · Kitchen: orders as cards by table, round and station, marked waiting, preparing or ready.",
        alt: "MK Adisyon demo kitchen screen with sample orders",
      },
    },
    screensNote:
      "Records in the web screens are sample data. The phone-framed waiter view is the responsive web interface; the separate mobile app screen is labelled explicitly. “Mavi Adisyon” in the web interface is existing rebrand debt; the public product name is MK Adisyon.",
    ctaText:
      "If you want to bring ordering, kitchen and payment work onto one shared record, let’s review how your restaurant operates today.",
    modules: {
      heading: "Modules verified in the web system",
      items: [
        { title: "Rooms and tables", text: "Areas and tables are tracked by state; opening a table starts with its guest count." },
        { title: "Waiter order flow", text: "Products are added with options, notes and service rounds, then sent to the kitchen." },
        { title: "Kitchen display", text: "Orders move through waiting, preparing and ready states, and readiness is sent back to service." },
        { title: "Table operations", text: "Open tables can be moved or merged, and their items can be split into another bill." },
        { title: "Cashier and payment", text: "Bills can be split by amount, person or item; partial payments and different methods are recorded." },
        { title: "Shift and cash movements", text: "Shift opening, cash in and out, and cash counts remain in the same operational record." },
        { title: "Management", text: "Products, tables, kitchen, waiter, cashier, expenses, finance and activity are followed from management views." },
      ],
    },
  },
  "mk-farm": {
    meta: {
      title: "Farm and livestock operations management | MK Digital Systems",
      description:
        "MK Farm brings livestock, weight, milk, health, breeding, QR, reports and field records into a multi-farm system with offline support.",
    },
    title: "Taking daily farm records from the field to reporting",
    lead:
      "MK Farm brings animal-level operational records into one digital logbook. Owners and staff work with the same current data, from quick entries in the field to management reports.",
    audience: {
      heading: "Whose problem?",
      text:
        "Farms managing beef and dairy animals, staff and daily care records together. They need quick access to animal history in the field and the ability to report on the same record in the office.",
      points: [
        "Owners managing one or more farms",
        "Field staff entering weight, milk, health and breeding records",
        "Managers following animal history and upcoming checks",
        "Teams preparing periodic production and operations reports",
      ],
    },
    problem: {
      heading: "What was the problem?",
      text:
        "When animal details, weighing, milk, treatment and breeding records stay in separate notebooks, history is harder to follow and upcoming work is easier to miss. Field connectivity can also delay recording.",
      points: [
        "Current animal state and history being held in different places",
        "Not reaching the right animal quickly from its ear tag",
        "Missing check dates, medicine withdrawal periods and repeat procedures",
        "Delaying or re-entering field records when the connection drops",
      ],
    },
    approach: {
      heading: "How did we approach it?",
      text:
        "We built the data model around the animal lifecycle, turning daily work into short forms and management needs into filterable reports and alerts. The offline queue is treated as part of field use, not an afterthought.",
      points: [
        "Access separated by farm membership and owner-staff roles",
        "Fast entry to an animal card through ear tags and QR",
        "Separate but connected flows for weight, milk, health and breeding",
        "Controlled synchronization and conflict handling when connectivity returns",
      ],
    },
    solution: {
      heading: "Field records, animal history and reporting in one system",
      text:
        "MK Farm combines multi-farm membership, role-based access and animal lifecycle records with a real API and persistent database. Its responsive PWA supports offline use of previously loaded data and later synchronization of queued records.",
    },
    screens: {
      "farm-dashboard": {
        caption: "Overview: animal count, daily milk, work needing attention, recent weights and reminders.",
        alt: "MK Farm overview with farm summary from local sample data",
      },
      "farm-animals-mobile": {
        caption: "Responsive field view: animal list by ear tag, name, category and breed.",
        alt: "MK Farm phone view with a sample animal list",
      },
      "farm-reports": {
        caption: "Reports: milk production summary and export with date and animal filters.",
        alt: "MK Farm milk production report with local sample data",
      },
    },
    screensNote:
      "These screens use entirely fictional records generated by the product's local demo loader; the people, farm, animals and ear tags shown are not real records.",
    ctaText:
      "If you want field records, animal history and reporting to share one workflow on your farm, let’s review how your team works today.",
    modules: {
      heading: "Core modules",
      items: [
        { title: "Farms and staff", text: "Owner and staff memberships, approval states and the active workspace are managed together." },
        { title: "Animal cards", text: "Identity, ear tag, state and lifecycle details for beef and dairy animals stay on one card." },
        { title: "QR identity", text: "QR display, printing and access through a camera or external scanner open the animal card." },
        { title: "Weight and weighing", text: "Manual or mock-scale entries, measurement history and change from the previous weight are tracked." },
        { title: "Milk production", text: "Morning and evening milk records are entered by animal and date, then combined in period reports." },
        { title: "Health and breeding", text: "Examinations, medicine, veterinary checks and breeding history are connected to the animal card." },
        { title: "Alerts and reports", text: "Upcoming checks and operational exceptions are listed; milk and farm data can be exported." },
        { title: "Offline synchronization", text: "Records remain in a device queue and are sent with version and conflict checks when connectivity returns." },
      ],
    },
  },
};

export default en;
