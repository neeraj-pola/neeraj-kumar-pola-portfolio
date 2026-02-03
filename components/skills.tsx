"use client"

import { useParallax } from "@/hooks/use-parallax"
import {
  SiPython,
  SiC,
  SiR,
  SiJavascript,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiApacheairflow,
  SiApachespark,
  SiMongodb,
  SiSnowflake,
  SiFastapi,
  SiN8N,
  SiDatabricks,
} from "react-icons/si"
import { FaDatabase, FaJava, FaAws } from "react-icons/fa"
import { VscAzure } from "react-icons/vsc"
import { AiOutlineOpenAI } from "react-icons/ai"
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineMicrophone,
  HiOutlineCircleStack,
  HiOutlineChartBar,
  HiOutlineRocketLaunch,
  HiOutlineBeaker,
} from "react-icons/hi2"

export default function Skills() {
  const parallaxOffset = useParallax(0.02)

  /* -------------------- Skill Groups -------------------- */
  const skillGroups = [
    {
      label: "Languages",
      skills: [
        { name: "Python", icon: SiPython },
        { name: "SQL", icon: FaDatabase },
        { name: "Java", icon: FaJava },
        { name: "C", icon: SiC },
        { name: "R", icon: SiR },
        { name: "JavaScript", icon: SiJavascript },
      ],
    },
    {
      label: "ML & AI",
      skills: [
        { name: "PyTorch", icon: SiPytorch },
        { name: "TensorFlow", icon: SiTensorflow },
        { name: "Scikit-learn", icon: SiScikitlearn },
        { name: "RAG", icon: FaDatabase },
        { name: "LLMs", icon: AiOutlineOpenAI },
        { name: "n8n", icon: SiN8N },
      ],
    },
    {
      label: "Cloud & Infra",
      skills: [
        { name: "AWS", icon: FaAws },
        { name: "Snowflake", icon: SiSnowflake },
        { name: "Azure", icon: VscAzure },
        { name: "GCP", icon: SiGooglecloud },
        { name: "Docker", icon: SiDocker },
        { name: "Kubernetes", icon: SiKubernetes },
      ],
    },
    {
      label: "Data Tools",
      skills: [
        { name: "Spark", icon: SiApachespark },
        { name: "Airflow", icon: SiApacheairflow },
        { name: "FastAPI", icon: SiFastapi },
        { name: "Snowflake", icon: SiSnowflake },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Databricks", icon: SiDatabricks },
      ],
    },
  ]

  /* -------------------- Core Expertise -------------------- */
  const coreAreas = [
    { name: "Natural Language Processing", icon: HiOutlineChatBubbleLeftRight },
    { name: "Multilingual ASR", icon: HiOutlineMicrophone },
    { name: "RAG Systems", icon: HiOutlineCircleStack },
    { name: "Time Series Forecasting", icon: HiOutlineChartBar },
    { name: "Model Deployment", icon: HiOutlineRocketLaunch },
    { name: "Statistical Modeling", icon: HiOutlineBeaker },
  ]

  /* -------------------- Badges -------------------- */
  const badges = [
    {
      name: "AWS Certified Cloud Practitioner",
      image: "/aws_cloud_practioner.png",
      url: "https://www.credly.com/badges/a18217dc-ced8-49eb-9d16-747482c77a89/public_url",
      priority: "high",
    },
    {
      name: "Snowflake Hands-On Essentials: Data Warehouse",
      image: "/snowflake_warehouse.png",
      url: "https://achieve.snowflake.com/83115d00-817d-4ab8-b421-6cd2db6f041a#acc.qbYWNUeu",
      priority: "normal",
    },
    {
      name: "Snowflake Hands-On Essentials: Collaboration & Marketplace",
      image: "/snowflake_marketplace.png",
      url: "https://achieve.snowflake.com/34db1d92-94cd-47d7-911f-76dd700354bd#acc.W7ZBdyJv",
      priority: "normal",
    },
    {
      name: "Snowflake Hands-On Essentials: Data Applications",
      image: "/snowflake_data_applications.png",
      url: "https://achieve.snowflake.com/cf21427a-5dc5-4b14-b191-8785561c7226#acc.yN9Xjg5H",
      priority: "normal",
    },
    {
      name: "Snowflake Hands-On Essentials: Data Lake",
      image: "/snowflake_data_lake.png",
      url: "https://achieve.snowflake.com/af169d2e-4163-49ed-9a4d-2f002a1546a8#acc.bhAfwEFq",
      priority: "normal",
    },
    {
      name: "Snowflake Hands-On Essentials: Data Engineering",
      image: "/snowflake_data_engineering.png",
      url: "https://achieve.snowflake.com/ea8e35e6-f9c7-4136-9604-ad97feef1131#acc.ZAopTsPN",
      priority: "normal",
    },
    {
      name: "Snowflake Hands-On Essentials: Data Science",
      image: "/snowflake_data_science.png",
      url: "https://achieve.snowflake.com/d1773de9-7560-4c0d-88d0-f7ffc4be7b3b#acc.VSvRPfCr",
      priority: "normal",
    },
  ]

  const featuredBadges = badges.filter(b => b.priority === "high")
  const normalBadges = badges.filter(b => b.priority !== "high")

  return (
    <section id="skills" className="relative py-17 px-4 bg-[#FAF9F6]">
      <div
        className="container mx-auto max-w-5xl"
        style={{ transform: `translateY(${-parallaxOffset * 0.5}px)` }}
      >
        <div className="space-y-16">

          {/* Header */}
          <div className="space-y-4">
            <span className="font-mono text-sm text-muted-foreground tracking-wider">
              05 / SKILLS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Technical Stack
            </h2>
          </div>

          {/* Skill Groups */}
          <div className="space-y-12">
            {skillGroups.map((group, index) => (
              <div key={index} className="space-y-5">
                <h3 className="text-sm font-mono text-muted-foreground tracking-wider uppercase">
                  {group.label}
                </h3>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                  {group.skills.map((skill, i) => {
                    const Icon = skill.icon
                    return (
                      <div
                        key={i}
                        className="flex flex-col items-center gap-2 p-4 bg-white border border-border rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.09)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.06),0_0_30px_rgba(250,204,21,0.35)] transition-shadow duration-300"
                      >
                        <Icon className="text-2xl text-foreground" />
                        <span className="text-xs font-medium text-muted-foreground">
                          {skill.name}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Core Expertise */}
          <div className="p-10 bg-primary rounded-2xl shadow-xl shadow-primary/25 space-y-6">
            <h3 className="text-xl font-bold text-primary-foreground">
              Core Areas of Expertise
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              {coreAreas.map((area, i) => {
                const Icon = area.icon
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-1 p-3 bg-white/90 border border-white/40 rounded-xl shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.9),0_0_18px_rgba(250,204,21,0.35)] transition-shadow duration-300"
                  >
                    <Icon className="text-2xl text-foreground" />
                    <span className="text-xs font-medium text-muted-foreground text-center">
                      {area.name}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Badges Earned */}
          <div className="p-10 bg-primary rounded-2xl shadow-xl shadow-primary/25 space-y-10">
            <h3 className="text-xl font-bold text-primary-foreground">
              Certification
            </h3>

            {/* Featured */}
            <div className="flex justify-center">
                {featuredBadges.map((badge, i) => (
                  <a
                    key={i}
                    href={badge.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center justify-center
                      bg-white rounded-xl
                      p-2
                      shadow-[0_16px_50px_rgba(0,0,0,0.3)]
                      hover:shadow-[0_22px_60px_rgba(0,0,0,0.4)]
                      transition-all duration-300
                      hover:-translate-y-1
                    "
                  >
                    <img
                      src={badge.image}
                      alt={badge.name}
                      className="h-60 w-60 object-contain"
                    />
                  </a>
                ))}
              </div>

            {/* Other Badges */}
            <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary-foreground">
              Additional Badges
            </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 gap-8">
                {normalBadges.map((badge, i) => (
                  <a
                    key={i}
                    href={badge.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-white rounded-xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1"
                  >
                    <img
                      src={badge.image}
                      alt={badge.name}
                      className="h-28 w-30 object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>

            <p className="text-xs font-mono text-primary-foreground/70">
              Click any badge to view verification on Credly
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}