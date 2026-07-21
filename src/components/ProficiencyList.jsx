import React from 'react'

const SKILLS = [
  { label: 'Analytical Tools', detail: 'Power BI and MySQL, with strong Excel skills.' },
  { label: 'Programming Languages', detail: 'SQL and Python, including NumPy, Pandas, Matplotlib, and Seaborn.' },
  { label: 'Data Wrangling and Cleaning', detail: 'Collecting, cleaning, and transforming data from multiple sources.' },
  { label: 'Data Visualization', detail: 'Building visualizations that communicate insights to stakeholders.' },
  { label: 'Statistical Analysis', detail: 'Applying statistical methods to analyze and interpret data.' },
  { label: 'AI-Assisted Analytics', detail: 'Using ChatGPT and Claude to speed up EDA/ETL and review code.' },
  { label: 'Prompt Engineering for Data Tasks', detail: 'Writing prompts to generate SQL/Python snippets and dataset summaries.' },
  { label: 'AI-Powered Dashboards & Reporting', detail: 'Using Gamma AI to turn analysis into stakeholder-ready reports.' }
  
]


export default function ProficiencyList() {
  return (
    <ul className="skills-list">
      {SKILLS.map(skill => (
        <li key={skill.label} className="skills-list__item">
          <span className="skills-list__label">{skill.label}</span>
          <span className="skills-list__detail">{skill.detail}</span>
        </li>
      ))}
    </ul>
  )
}
