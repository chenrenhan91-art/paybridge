/**
 * PayBridge 3.2 — Pure Showcase Architecture
 * Photorealistic 2D-Perspective Metallic Card + Three.js Hero Topological Background
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. Complete Bilingual Dictionary (ZH / EN)
     ========================================================================== */
  const I18N = {
    zh: {
      'brand.subtitle': '全球广告与跨境支付服务商',
      'nav.advantages': '平台优势',
      'nav.scenarios': '场景方案',
      'nav.security': '安全合规',
      'nav.workflow': '使用流程',
      'nav.cta': '联系商务',
      'hero.eyebrow': '全球广告服务商 · 多币种秒级发卡引擎',
      'hero.titleLine1': '跨境支付与广告投放',
      'hero.titleLine2': '企业级虚拟卡平台',
      'hero.description':
        '面向跨境电商与投放团队，提供多币种虚拟卡、卡段策略、快速开卡、风控配置、API对接与对账能力。支持全球主流支付场景，帮助团队稳定放量、清晰管理资金流。',
      'hero.primaryCta': '了解解决方案',
      'hero.secondaryCta': '查看使用流程',
      'hero.tag1': '多币种原币结算',
      'hero.tag2': '3s 秒级批量开卡',
      'hero.tag3': 'REST API 全自动化',
      'hero.tag4': 'PCI-DSS 金融级合规',
      'cardStage.status': 'BIN 路由实时在线 · 99.98% 授权通过',
      'cardStage.instantIssue': '切换新卡号展示',
      'cardStage.toggleCvv': '显示/隐藏 CVV',
      'cardStage.copyPan': '复制卡号',
      'cardStage.copiedPan': '✓ 已复制卡号',
      'cardStage.latencyNote': '最近发卡耗时: 1.8s',
      'cardStage.txSub': '3DS 免验证秒级授权通过 · 0 汇损直连',
      'metrics.m1Label': '累计开卡数量',
      'metrics.m1Cap': '覆盖全球主流电商与广告团队',
      'metrics.m2Label': '支持币种',
      'metrics.m2Cap': 'USD / EUR / GBP / HKD / SGD 等原币结算',
      'metrics.m3Label': '服务可用率',
      'metrics.m3Cap': '多活金融级架构与自动故障转移',
      'metrics.m4Label': '平均开卡耗时',
      'metrics.m4Cap': '控制台批量建卡与 API 实时下发',
      'ecosystem.label': '原生适配全球主流广告、电商、物流与 AI 订阅生态',
      'advantages.tag': '平台能力',
      'advantages.title': '平台优势',
      'advantages.subtitle': '围绕跨境支付全链路构建能力，覆盖开卡、充值、支付、风控与财务管理。',
      'advantages.c1Title': '多币种卡',
      'advantages.c1Desc':
        '支持多种币种，按业务需求配置支付方案，降低汇损。直连机构级外汇流动性池，原币扣款零二次转换费。',
      'advantages.c2Title': '卡段丰富',
      'advantages.c2Desc':
        '多号段可选，适配不同投放平台、地区与商户规则。支持美区、港区、欧区、英区多卡组独立隔离。',
      'advantages.c3Title': '高效开卡',
      'advantages.c3Desc':
        '支持秒开卡与一次开多张，满足团队批量投放需求。单次任务可并发创建 500+ 张独立预算虚拟卡。',
      'advantages.c3Micro': '批量任务 #PB-809',
      'advantages.c4Title': '技术可靠',
      'advantages.c4Desc':
        '支持 API 对接与服务平台开卡，提升自动化与运营效率。提供实时 Webhook 授权通知与 3DS 验证码自动推送。',
      'advantages.c5Title': '对账清晰',
      'advantages.c5Desc':
        '统一管理充值、消费与结算数据，财务复盘更高效。支持按投手、店铺、项目标签一键导出月度日结报表。',
      'advantages.c5Micro': 'T+0 自动流水对齐',
      'advantages.c6Title': '场景多样',
      'advantages.c6Desc':
        '覆盖广告投放、物流、VAT、SaaS 订阅等线上多场景支付，一套企业主账户统管全球多团队支出。',
      'advantages.c6Tag1': '广告投放放量',
      'advantages.c6Tag2': '跨境店群采购',
      'advantages.c6Tag3': '国际物流结算',
      'advantages.c6Tag4': '企业 SaaS 订阅',
      'scenarios.tag': '业务覆盖',
      'scenarios.title': '解决方案分场景',
      'scenarios.subtitle': '按业务场景拆解资金链路，用可执行的方案解决实际支付问题。',
      'scenarios.tab1Title': '广告投放',
      'scenarios.tab1Sub': '跨平台投放稳定放量',
      'scenarios.tab2Title': '电商收款与采购',
      'scenarios.tab2Sub': '多站点收付一体化',
      'scenarios.tab3Title': '物流支付',
      'scenarios.tab3Sub': '渠道费用统一结算',
      'scenarios.tab4Title': 'SaaS 订阅',
      'scenarios.tab4Sub': '订阅成本精细化控制',
      'scenarios.menuNote': '提示：点击左侧不同业务场景，实时查看对应的痛点拆解、卡池架构方案与量化收益指标。',
      'scenarios.painLabel': '痛点 · PAIN POINT',
      'scenarios.solutionLabel': '方案 · SOLUTION',
      'scenarios.resultLabel': '结果 · OUTCOME',
      'scenarios.metric1Label': '平均支付授权率',
      'scenarios.metric2Label': '单卡预算颗粒度',
      'scenarios.metric3Label': '财务对账周期',
      'scenarios.workflowBtn': '查看接入流程 →',
      'security.tag': '风险管理',
      'security.title': '安全合规',
      'security.subtitle':
        '以交易安全和可控支出为核心，结合风控策略与权限管理，帮助团队在放量时保持稳定与可追踪。',
      'security.consoleTitle': '实时风控策略引擎（点击体验规则开关）',
      'security.r1Title': '风险规则配置',
      'security.r1Desc': '支持风险规则配置，自动拦截非白名单 MCC 商户，控制盗刷与异常交易风险',
      'security.r2Title': '精细预算管控',
      'security.r2Desc': '自定义充值与日/月/单笔限额，超额自动触发预警，预算管理更精细',
      'security.r3Title': '卡号隔离机制',
      'security.r3Desc': '一户一卡或一店一卡独立隔离机制，降低基础信息泄露与连带封号影响面',
      'security.r4Title': '多线协同支持',
      'security.r4Desc': '管理员、投手、财务分级权限审批，客服、技术、商务多线协同支持',
      'security.p1Title': '交易安全',
      'security.p1Desc': '支持全面客制化风险配置，PCI-DSS 金融级加密传输与实时反欺诈监测。',
      'security.p2Title': '技术服务',
      'security.p2Desc': '故障自愈与快速响应机制，多通道发卡行自动热备切换，保障大促不掉线。',
      'security.p3Title': '商务服务',
      'security.p3Desc': '按场景定制专属解决方案，提供大客户阶梯费率与定制卡段配额支持。',
      'security.p4Title': '客户支持',
      'security.p4Desc': '多语种跨时区服务，7×24 小时专属客户成功经理与技术对接群秒级响应。',
      'workflow.tag': '快速接入',
      'workflow.title': '使用流程',
      'workflow.subtitle': '4 步完成从注册到支付，快速接入跨境业务场景。',
      'workflow.s1Badge': '≈ 5 min',
      'workflow.s1Title': '注册认证',
      'workflow.s1Desc': '在线注册企业或个人主账号，极速完成线上 KYB / KYC 实名认证。',
      'workflow.s2Badge': '快速到账',
      'workflow.s2Title': '入账充值',
      'workflow.s2Desc': '支持多币种在线充值，主钱包极速入账并自动完成合规审核。',
      'workflow.s3Badge': '秒级出卡',
      'workflow.s3Title': '生成卡片',
      'workflow.s3Desc': '按投放平台或店铺选择所需 BIN 号段，秒速出卡，无需漫长等待。',
      'workflow.s4Badge': '全球通用',
      'workflow.s4Title': '完成支付',
      'workflow.s4Desc': '立即用于广告投放、跨境物流、VAT 缴税及全球 SaaS 订阅等更多场景。',
      'cta.tag': '准备好了吗',
      'cta.title': '让虚拟卡不止于支付',
      'cta.subtitle': '构建更稳定的全球投放资金链路，帮助团队把支付能力升级为增长能力。',
      'cta.contactBtn': '联系商务咨询',
      'cta.secondaryBtn': '了解流程',
      'cta.badge1': '✓ 银行级安全加密',
      'cta.badge2': '✓ 7×24 小时运维',
      'cta.badge3': '✓ 数据隐私保护',
      'footer.tagline': '企业级虚拟卡服务，助力全球跨境支付与广告投放。'
    },
    en: {
      'brand.subtitle': 'Global Ad Spend & Cross-Border Card Platform',
      'nav.advantages': 'Advantages',
      'nav.scenarios': 'Solutions',
      'nav.security': 'Security',
      'nav.workflow': 'How It Works',
      'nav.cta': 'Contact Sales',
      'hero.eyebrow': 'Global Ad Payment Partner · Instant Multi-Currency Card Engine',
      'hero.titleLine1': 'Cross-Border Payments & Ad Spend',
      'hero.titleLine2': 'Enterprise Virtual Card Platform',
      'hero.description':
        'Built for cross-border e-commerce and media buying teams with multi-currency virtual cards, custom BIN strategies, 3-second card issuance, granular risk controls, automated APIs, and unified reconciliation.',
      'hero.primaryCta': 'Explore Solutions',
      'hero.secondaryCta': '4-Step Workflow',
      'hero.tag1': '20+ Native Currencies',
      'hero.tag2': '3s Batch Card Issuance',
      'hero.tag3': 'Full REST API Automation',
      'hero.tag4': 'PCI-DSS Level 1 Security',
      'cardStage.status': 'Live BIN Routing · 99.98% Auth SLA',
      'cardStage.instantIssue': 'Cycle Card Number',
      'cardStage.toggleCvv': 'Show / Hide CVV',
      'cardStage.copyPan': 'Copy PAN',
      'cardStage.copiedPan': '✓ PAN Copied',
      'cardStage.latencyNote': 'Last issuance latency: 1.8s',
      'cardStage.txSub': 'Frictionless 3DS Auth · 0% FX Markup',
      'metrics.m1Label': 'Total Cards Issued',
      'metrics.m1Cap': 'Powering global ad & e-commerce teams',
      'metrics.m2Label': 'Supported Currencies',
      'metrics.m2Cap': 'Native settlement in USD / EUR / GBP / HKD / SGD',
      'metrics.m3Label': 'Service Uptime',
      'metrics.m3Cap': 'Multi-region active-active financial architecture',
      'metrics.m4Label': 'Avg Issuance Time',
      'metrics.m4Cap': 'Batch dashboard & real-time REST API issuance',
      'ecosystem.label': 'Natively Compatible with Global Ad Platforms, Marketplaces, Logistics & SaaS',
      'advantages.tag': 'Platform Capabilities',
      'advantages.title': 'Platform Advantages',
      'advantages.subtitle':
        'End-to-end payment infrastructure spanning card issuance, top-ups, global payouts, risk rules, and automated accounting.',
      'advantages.c1Title': 'Multi-Currency Cards',
      'advantages.c1Desc':
        'Settle directly in 20+ local currencies to eliminate hidden FX conversion fees and protect campaign margins.',
      'advantages.c2Title': 'Rich BIN Segments',
      'advantages.c2Desc':
        'Select dedicated US, HK, EU, and UK card BINs tailored to specific ad platforms, regions, and merchant rules.',
      'advantages.c3Title': 'Instant Batch Issuance',
      'advantages.c3Desc':
        'Issue single or 500+ virtual cards simultaneously in seconds to scale media buying accounts without bottlenecks.',
      'advantages.c3Micro': 'Batch Job #PB-809',
      'advantages.c4Title': 'Reliable API Engine',
      'advantages.c4Desc':
        'Automate card creation, limit updates, real-time webhook notifications, and 3DS OTP forwarding via REST API.',
      'advantages.c5Title': 'Clear Reconciliation',
      'advantages.c5Desc':
        'Unify top-up, spend, and settlement ledgers by media buyer, storefront, or project tag with one-click exports.',
      'advantages.c5Micro': 'T+0 Automated Ledger',
      'advantages.c6Title': 'Versatile Scenarios',
      'advantages.c6Desc':
        'Cover ad campaigns, international logistics, VAT tax filings, and SaaS subscriptions from one master treasury.',
      'advantages.c6Tag1': 'Ad Spend Scaling',
      'advantages.c6Tag2': 'Storefront Sourcing',
      'advantages.c6Tag3': 'Freight Settlement',
      'advantages.c6Tag4': 'Enterprise SaaS',
      'scenarios.tag': 'Business Coverage',
      'scenarios.title': 'Scenario-Based Solutions',
      'scenarios.subtitle':
        'Deconstruct fund flows by business vertical with actionable card pool architectures.',
      'scenarios.tab1Title': 'Ad Media Buying',
      'scenarios.tab1Sub': 'Stable cross-platform scaling',
      'scenarios.tab2Title': 'E-Commerce',
      'scenarios.tab2Sub': 'Multi-storefront unified treasury',
      'scenarios.tab3Title': 'Logistics Payment',
      'scenarios.tab3Sub': 'Centralized freight settlement',
      'scenarios.tab4Title': 'SaaS Subscriptions',
      'scenarios.tab4Sub': 'Granular software cost control',
      'scenarios.menuNote':
        'Tip: Click any business scenario on the left to inspect its pain points, card pool solution, and ROI metrics.',
      'scenarios.painLabel': 'PAIN POINT',
      'scenarios.solutionLabel': 'SOLUTION',
      'scenarios.resultLabel': 'OUTCOME',
      'scenarios.metric1Label': 'Avg Auth Success Rate',
      'scenarios.metric2Label': 'Budget Granularity',
      'scenarios.metric3Label': 'Reconciliation Speed',
      'scenarios.workflowBtn': 'View Integration Steps →',
      'security.tag': 'Risk Management',
      'security.title': 'Security & Compliance',
      'security.subtitle':
        'Built around transaction safety and controllable spend with customizable risk rules and role-based permissions.',
      'security.consoleTitle': 'Live Risk Rule Engine (Click to Toggle Rules)',
      'security.r1Title': 'Custom Risk Rule Engine',
      'security.r1Desc': 'Lock cards to approved MCC merchant categories to prevent unauthorized charges and fraud.',
      'security.r2Title': 'Granular Budget Controls',
      'security.r2Desc': 'Configure per-transaction, daily, and monthly spend caps with automated threshold alerts.',
      'security.r3Title': 'Card Isolation Architecture',
      'security.r3Desc': 'Assign dedicated card numbers per ad account or storefront to eliminate cascading risk.',
      'security.r4Title': 'Multi-Role Collaboration',
      'security.r4Desc': 'Role-based access for admins, media buyers, and finance teams backed by 24/7 support.',
      'security.p1Title': 'Transaction Safety',
      'security.p1Desc': 'PCI-DSS compliant encryption, customizable velocity rules, and real-time anti-fraud guardrails.',
      'security.p2Title': 'Technical Reliability',
      'security.p2Desc': 'Self-healing multi-issuer routing and automated failover keep campaigns running smoothly.',
      'security.p3Title': 'Bespoke Commercial Terms',
      'security.p3Desc': 'Volume-tiered pricing, custom BIN allocation, and tailored credit lines for scaling teams.',
      'security.p4Title': 'Global Customer Support',
      'security.p4Desc': 'Multilingual 24/7 dedicated account managers and instant technical integration channels.',
      'workflow.tag': 'Fast Onboarding',
      'workflow.title': 'How It Works',
      'workflow.subtitle': 'Go from registration to live global payments in 4 streamlined steps.',
      'workflow.s1Badge': '≈ 5 min',
      'workflow.s1Title': 'Register & Verify',
      'workflow.s1Desc': 'Sign up online and complete streamlined digital KYB / KYC verification.',
      'workflow.s2Badge': 'Fast Credit',
      'workflow.s2Title': 'Fund Wallet',
      'workflow.s2Desc': 'Top up your multi-currency master wallet online with rapid compliance clearance.',
      'workflow.s3Badge': '3s Issuance',
      'workflow.s3Title': 'Issue Virtual Cards',
      'workflow.s3Desc': 'Select your target BIN segment and generate single or batch virtual cards in seconds.',
      'workflow.s4Badge': 'Global Ready',
      'workflow.s4Title': 'Pay Worldwide',
      'workflow.s4Desc': 'Use immediately across ad platforms, logistics providers, VAT portals, and SaaS tools.',
      'cta.tag': 'Ready to Scale?',
      'cta.title': 'Make Virtual Cards Your Growth Engine',
      'cta.subtitle':
        'Build a resilient global payment infrastructure and turn treasury efficiency into competitive growth.',
      'cta.contactBtn': 'Contact Sales & Advisory',
      'cta.secondaryBtn': 'Explore Workflow',
      'cta.badge1': '✓ Bank-Grade Encryption',
      'cta.badge2': '✓ 24/7 DevOps Monitoring',
      'cta.badge3': '✓ Strict Data Privacy',
      'footer.tagline': 'Enterprise virtual card infrastructure for global cross-border payments and ad spend.'
    }
  };

  /* ==========================================================================
     2. Scenario Data
     ========================================================================== */
  const SCENARIO_DATA = {
    ads: {
      zh: {
        title: '广告投放 · 跨平台投放稳定放量',
        subtitle: '专为 Meta、Google、TikTok 媒介采买团队打造的高通过率专属卡池与预算隔离体系',
        badge: '推荐卡段: 4582 US / 5329 HK 专属广告段',
        pain: '账号多、卡片分散，支付失败与风控误判频发，影响消耗节奏。',
        solution: '按广告平台与团队拆分卡池，设置限额与规则，结合 API 批量开卡自动分配。',
        result: '支付成功率更稳定，账户与预算管理更清晰，放量效率提升。',
        m1: '99.4%',
        m2: '日限额 / 笔限额实时调控',
        m3: 'T+0 自动归集节省 85% 工时'
      },
      en: {
        title: 'Ad Media Buying · Stable Cross-Platform Scaling',
        subtitle: 'High-acceptance dedicated BIN pools and isolated account budgets for Meta, Google, and TikTok teams',
        badge: 'Recommended BIN: 4582 US / 5329 HK Ad Tiers',
        pain: 'Fragmented cards across hundreds of ad accounts trigger payment declines and false-positive risk flags, disrupting campaign pacing.',
        solution: 'Segment card pools by ad platform and buyer squad, enforce velocity rules, and auto-assign cards via batch API.',
        result: 'Stabilized authorization rates, crystal-clear budget ownership, and faster campaign scaling.',
        m1: '99.4%',
        m2: 'Real-time daily & per-tx caps',
        m3: 'T+0 ledger saves 85% manual work'
      }
    },
    ecom: {
      zh: {
        title: '电商收款与采购 · 多站点收付一体化',
        subtitle: '适配 Amazon、Shopify、独立站多币种店群运营、平台月租与供应链采购',
        badge: '推荐卡段: 4859 EU / 5329 HK 多币种商业卡',
        pain: '多店铺多币种并行，充值、采购、广告支出对账复杂，汇损难控。',
        solution: '按店铺与业务线配置币种卡，统一归集消费流水，匹配订单与利润核算口径。',
        result: '账务对齐效率提升，汇兑成本下降，资金周转更可预测。',
        m1: '20+ 原币直连',
        m2: '一店一卡独立核算',
        m3: '汇损降低 1.8% ~ 2.4%'
      },
      en: {
        title: 'E-Commerce · Multi-Storefront Unified Treasury',
        subtitle: 'Built for Amazon, Shopify, and DTC storefronts managing multi-currency sourcing and platform fees',
        badge: 'Recommended BIN: 4859 EU / 5329 HK Commercial',
        pain: 'Running multiple storefronts across currencies creates messy reconciliation across inventory, platform fees, and FX spread.',
        solution: 'Issue native-currency cards per storefront, centralize transaction feeds, and align card tags with SKU profit centers.',
        result: 'Faster accounting close, lower FX conversion cost, and predictable cash flow.',
        m1: '20+ Native Currencies',
        m2: '1-Store-1-Card Isolation',
        m3: '1.8%–2.4% FX Cost Saved'
      }
    },
    logistics: {
      zh: {
        title: '物流支付 · 渠道费用统一结算',
        subtitle: '覆盖国际快递、海外仓储、尾程派送与欧盟/英国 VAT 税务合规缴纳',
        badge: '推荐卡段: 4582 US / 4859 EU 航运物流专用段',
        pain: '物流服务商分散，账期与费用口径不一致，异常扣费难追溯。',
        solution: '按渠道生成专属卡并设置阈值提醒，沉淀明细流水，形成可追踪支付链路。',
        result: '扣费透明度提升，异常处理更快，结算核对周期缩短。',
        m1: '100% 账单可追溯',
        m2: '单渠道阈值锁死防超扣',
        m3: '结算核对周期缩短 70%'
      },
      en: {
        title: 'Logistics Payment · Centralized Freight Settlement',
        subtitle: 'Streamline global freight forwarders, 3PL warehouses, last-mile carriers, and EU/UK VAT payments',
        badge: 'Recommended BIN: 4582 US / 4859 EU Freight Tier',
        pain: 'Dispersed logistics vendors and inconsistent billing cycles make unexpected surcharges difficult to audit.',
        solution: 'Generate dedicated virtual cards per carrier with threshold alerts and immutable line-item audit trails.',
        result: 'Full billing transparency, instant anomaly detection, and 70% faster freight auditing.',
        m1: '100% Traceable Ledger',
        m2: 'Carrier-specific cap locks',
        m3: '70% Faster Freight Audit'
      }
    },
    saas: {
      zh: {
        title: 'SaaS 订阅 · 订阅成本精细化控制',
        subtitle: '统管研发云服务、AI API（OpenAI/Claude）、营销工具与跨部门软件续费',
        badge: '推荐卡段: 4582 US 企业订阅专属段',
        pain: '工具订阅项目多，自动续费分散，成本上涨后难定位来源。',
        solution: '按部门与工具分配独立卡，设置续费限额与到期预警，统一导出账单。',
        result: '订阅支出可视化，闲置服务更快清理，整体软件成本更可控。',
        m1: '0 僵尸订阅漏扣',
        m2: '按工具/部门定额续费',
        m3: '平均节省 22% 软件开支'
      },
      en: {
        title: 'SaaS Subscriptions · Granular Software Cost Control',
        subtitle: 'Manage cloud infrastructure, AI APIs (OpenAI/Anthropic), marketing tools, and recurring seats',
        badge: 'Recommended BIN: 4582 US Corporate SaaS Tier',
        pain: 'Sprawling SaaS trials and forgotten auto-renewals across departments quietly inflate monthly burn.',
        solution: 'Assign one virtual card per SaaS vendor with hard monthly renewal caps, expiry dates, and department tags.',
        result: 'Complete subscription visibility, instant cancellation of idle tools, and 22% lower software spend.',
        m1: 'Zero Zombie Renewals',
        m2: 'Per-vendor monthly caps',
        m3: 'Avg 22% SaaS Spend Saved'
      }
    }
  };

  let currentLang = localStorage.getItem('pb_lang') || 'zh';
  let currentScenario = 'ads';
  let cvvVisible = false;
  let activeBin = '4582';

  /* ==========================================================================
     3. Three.js Hero Topological Wave Background
     ========================================================================== */
  function initHeroThreeBackground() {
    if (!window.THREE) return;
    const canvas = document.getElementById('heroBgCanvas');
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / 820, 0.1, 1000);
    camera.position.set(0, 18, 38);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, 820);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const cols = 56;
    const rows = 36;
    const geometry = new THREE.PlaneGeometry(86, 56, cols, rows);
    geometry.rotateX(-Math.PI / 2.2);

    const count = geometry.attributes.position.count;
    const originalY = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      originalY[i] = geometry.attributes.position.getY(i);
    }

    const material = new THREE.MeshBasicMaterial({
      color: 0x409eff,
      wireframe: true,
      transparent: true,
      opacity: 0.2
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.y = -6;
    scene.add(mesh);

    const particleGeo = new THREE.BufferGeometry();
    const particleCount = 160;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 80;
      particlePositions[i + 1] = Math.random() * 16 - 4;
      particlePositions[i + 2] = (Math.random() - 0.5) * 50;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x409eff,
      size: 1.4,
      transparent: true,
      opacity: 0.6
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    window.addEventListener('mousemove', (e) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    const clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const pos = geometry.attributes.position;
      for (let i = 0; i < count; i++) {
        const u = (i % (cols + 1)) / cols;
        const v = Math.floor(i / (cols + 1)) / rows;
        const wave1 = Math.sin(u * 7 + elapsed * 1.5) * 1.15;
        const wave2 = Math.cos(v * 6 + elapsed * 1.15) * 1.05;
        const mouseDist = Math.hypot(u - 0.5 - mouseX * 0.35, v - 0.5 - mouseY * 0.35);
        const mouseDent = Math.exp(-mouseDist * 6) * 2.5;
        pos.setY(i, originalY[i] + wave1 + wave2 + mouseDent);
      }
      pos.needsUpdate = true;

      particles.rotation.y = elapsed * 0.03 + mouseX * 0.08;
      camera.position.x = mouseX * 3.5;
      camera.position.y = 18 + mouseY * 2;
      camera.lookAt(0, -2, 0);

      renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / 820;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, 820);
    });
  }

  /* ==========================================================================
     4. Photorealistic 2D-Perspective Metallic Card Interaction
     ========================================================================== */
  const cardEl = document.getElementById('interactiveCard');
  const vcNumberDisplay = document.getElementById('vcNumberDisplay');
  const vcCvv = document.getElementById('vcCvv');
  const vcNetworkLogo = document.getElementById('vcNetworkLogo');
  const vcCurrencyBadge = document.getElementById('vcCurrencyBadge');
  const vcTierTag = document.getElementById('vcTierTag');
  const issueLatencyText = document.getElementById('issueLatencyText');

  if (cardEl) {
    cardEl.addEventListener('mousemove', (e) => {
      const rect = cardEl.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -5.5;
      const rotateY = ((x - centerX) / centerX) * 7;

      cardEl.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-2px)`;
      const gx = ((x / rect.width) * 100).toFixed(1);
      const gy = ((y / rect.height) * 100).toFixed(1);
      cardEl.style.setProperty('--glare-x', `${gx}%`);
      cardEl.style.setProperty('--glare-y', `${gy}%`);
    });

    cardEl.addEventListener('mouseleave', () => {
      cardEl.style.transform = 'rotateX(0deg) rotateY(0deg) translateY(0)';
      cardEl.style.setProperty('--glare-x', '65%');
      cardEl.style.setProperty('--glare-y', '24%');
    });
  }

  function renderPanGroups(binPrefix, g2, g3, g4) {
    if (!vcNumberDisplay) return;
    vcNumberDisplay.innerHTML = `<span>${binPrefix}</span><span>${g2}</span><span>${g3}</span><span>${g4}</span>`;
  }

  function generateNewCardNumber(binPrefix) {
    const g2 = Math.floor(1000 + Math.random() * 9000);
    const g3 = Math.floor(1000 + Math.random() * 9000);
    const g4 = Math.floor(1000 + Math.random() * 9000);
    renderPanGroups(binPrefix, g2, g3, g4);

    const randomCvv = Math.floor(100 + Math.random() * 900);
    if (vcCvv) {
      vcCvv.setAttribute('data-real-cvv', String(randomCvv));
      vcCvv.textContent = cvvVisible ? String(randomCvv) : '***';
    }

    const latency = (1.1 + Math.random() * 1.4).toFixed(1);
    if (issueLatencyText) {
      issueLatencyText.textContent =
        currentLang === 'zh' ? `最近发卡耗时: ${latency}s` : `Last issuance latency: ${latency}s`;
    }
  }

  document.querySelectorAll('.tier-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.tier-pill').forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');

      const theme = pill.getAttribute('data-card-theme');
      activeBin = pill.getAttribute('data-bin') || '4582';
      const network = pill.getAttribute('data-network') || 'VISA INFINITE';

      if (cardEl) cardEl.setAttribute('data-theme', theme);
      if (vcTierTag) {
        vcTierTag.textContent = activeBin === '5329' ? 'WORLD' : activeBin === '4859' ? 'COMMERCIAL' : 'INFINITE';
      }
      if (vcNetworkLogo) {
        if (network.includes('MASTERCARD')) {
          vcNetworkLogo.innerHTML = `<span class="visa-wordmark">Mastercard</span><span class="visa-sub">World Elite</span>`;
        } else {
          vcNetworkLogo.innerHTML = `<span class="visa-wordmark">VISA</span><span class="visa-sub">${activeBin === '4859' ? 'Commercial' : 'Infinite'}</span>`;
        }
      }
      if (vcCurrencyBadge) {
        vcCurrencyBadge.textContent =
          activeBin === '5329' ? 'HKD / USD · MULTI' : activeBin === '4859' ? 'EUR / GBP · SEPA' : 'USD · MULTI-CCY';
      }

      generateNewCardNumber(activeBin);
    });
  });

  const btnInstantIssue = document.getElementById('btnInstantIssue');
  if (btnInstantIssue) {
    btnInstantIssue.addEventListener('click', () => {
      if (cardEl) cardEl.style.transform = 'scale(0.985)';
      setTimeout(() => {
        generateNewCardNumber(activeBin);
        if (cardEl) cardEl.style.transform = 'scale(1)';
      }, 120);
    });
  }

  const btnToggleCvv = document.getElementById('btnToggleCvv');
  if (btnToggleCvv && vcCvv) {
    vcCvv.setAttribute('data-real-cvv', '892');
    btnToggleCvv.addEventListener('click', () => {
      cvvVisible = !cvvVisible;
      vcCvv.textContent = cvvVisible ? vcCvv.getAttribute('data-real-cvv') : '***';
    });
  }

  const btnCopyCard = document.getElementById('btnCopyCard');
  const copyCardText = document.getElementById('copyCardText');
  if (btnCopyCard && copyCardText) {
    btnCopyCard.addEventListener('click', () => {
      const spans = vcNumberDisplay ? Array.from(vcNumberDisplay.querySelectorAll('span')).map((s) => s.textContent) : [];
      const pan = spans.join(' ');
      if (navigator.clipboard && pan) {
        navigator.clipboard.writeText(pan).catch(() => {});
      }
      copyCardText.textContent = I18N[currentLang]['cardStage.copiedPan'];
      setTimeout(() => {
        copyCardText.textContent = I18N[currentLang]['cardStage.copyPan'];
      }, 1600);
    });
  }

  /* ==========================================================================
     5. Language Switching Engine
     ========================================================================== */
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('pb_lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    const dict = I18N[lang];
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    renderScenario(currentScenario);
    updateRuleBadge();
  }

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      applyLanguage(btn.getAttribute('data-lang'));
    });
  });

  // Rotating Live Transaction Webhook Stream
  const LIVE_TX_FEED = [
    { icon: 'FB', merchant: 'Meta Ads Ireland · 4582 **** 8084', amount: '-$1,280.00 USD' },
    { icon: 'GG', merchant: 'Google Ads Dublin · 4582 **** 3921', amount: '-$2,450.00 USD' },
    { icon: 'TT', merchant: 'TikTok For Business · 5329 **** 6610', amount: '-$960.00 USD' },
    { icon: 'AZ', merchant: 'Amazon Web Services · 4582 **** 1109', amount: '-$640.00 USD' },
    { icon: 'DH', merchant: 'DHL Express Europe · 4859 **** 7742', amount: '-€820.00 EUR' }
  ];
  let txIndex = 0;
  setInterval(() => {
    txIndex = (txIndex + 1) % LIVE_TX_FEED.length;
    const item = LIVE_TX_FEED[txIndex];
    const tickerEl = document.getElementById('liveTxTicker');
    const iconEl = document.getElementById('txIcon');
    const merchEl = document.getElementById('txMerchant');
    const amtEl = document.getElementById('txAmount');
    if (tickerEl && iconEl && merchEl && amtEl) {
      tickerEl.style.opacity = '0.5';
      setTimeout(() => {
        iconEl.textContent = item.icon;
        merchEl.textContent = item.merchant;
        amtEl.textContent = item.amount;
        tickerEl.style.opacity = '1';
      }, 180);
    }
  }, 3600);

  /* ==========================================================================
     6. Spotlight Mouse Tracking & Scenario Workbench
     ========================================================================== */
  document.querySelectorAll('.bento-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
  });

  function renderScenario(key) {
    currentScenario = key;
    const data = SCENARIO_DATA[key][currentLang];
    if (!data) return;

    document.getElementById('scStageTitle').textContent = data.title;
    document.getElementById('scStageSubtitle').textContent = data.subtitle;
    document.getElementById('scStageBadge').textContent = data.badge;
    document.getElementById('scPainText').textContent = data.pain;
    document.getElementById('scSolutionText').textContent = data.solution;
    document.getElementById('scResultText').textContent = data.result;
    document.getElementById('scMetric1').textContent = data.m1;
    document.getElementById('scMetric2').textContent = data.m2;
    document.getElementById('scMetric3').textContent = data.m3;

    document.querySelectorAll('.scenario-tab-btn').forEach((btn) => {
      const active = btn.getAttribute('data-scenario') === key;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-selected', String(active));
    });
  }

  document.querySelectorAll('.scenario-tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      renderScenario(btn.getAttribute('data-scenario'));
    });
  });

  /* ==========================================================================
     7. Security Risk Rule Switches & Sticky Header
     ========================================================================== */
  function updateRuleBadge() {
    const total = document.querySelectorAll('.switch-pill').length;
    const active = document.querySelectorAll('.switch-pill.on').length;
    const badge = document.getElementById('activeRuleCountBadge');
    if (badge) {
      badge.textContent =
        currentLang === 'zh' ? `${active} / ${total} 策略已激活` : `${active} / ${total} Rules Active`;
    }
  }

  document.querySelectorAll('.switch-pill').forEach((sw) => {
    sw.addEventListener('click', () => {
      sw.classList.toggle('on');
      const parent = sw.closest('.rule-item');
      if (parent) parent.classList.toggle('enabled', sw.classList.contains('on'));
      updateRuleBadge();
    });
  });

  document.querySelectorAll('.step-card').forEach((card) => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.step-card').forEach((c) => c.classList.remove('active'));
      card.classList.add('active');
    });
  });

  const siteHeader = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (siteHeader) {
      siteHeader.classList.toggle('scrolled', window.scrollY > 16);
    }
  });

  applyLanguage(currentLang);
  initHeroThreeBackground();
})();
