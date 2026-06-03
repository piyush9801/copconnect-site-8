import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Check,
  ShieldAlert,
  HeartHandshake,
  Brain,
  Video,
  Gamepad2,
  Lock,
  UserCheck,
  Scale,
  Globe,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import { useRef } from 'react'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

const SKILLS: { Ico: LucideIcon; label: string }[] = [
  { Ico: ShieldAlert, label: 'Cybercrime intervention' },
  { Ico: HeartHandshake, label: 'Victim support' },
  { Ico: Brain, label: 'Cyber psychology' },
  { Ico: Video, label: 'Deepfakes' },
  { Ico: Gamepad2, label: 'Tech & gaming addiction' },
  { Ico: Lock, label: 'Digital safety' },
  { Ico: UserCheck, label: 'Social engineering threats' },
  { Ico: Scale, label: 'Cyber laws & reporting' },
  { Ico: Globe, label: 'Responsible digital citizenship' },
]

const AUDIENCES = [
  'A student',
  'NCC / NSS volunteer',
  'Teacher',
  'Parent',
  'Counselor',
  'Working professional',
  'Doctor',
  'Engineer',
  'LEA (Law Enforcement)',
]

const PARENT_CONCERNS = [
  'Online blackmail',
  'Gaming addiction',
  'Fake friendships',
  'Sextortion',
  'Scams',
  'Deepfakes',
  'Cyberbullying',
]

const PARENT_LEARNINGS = [
  'How children are manipulated online',
  'Early warning signs of digital abuse',
  'How cybercriminals target teenagers',
  'What to do during emergencies',
  'How to build healthy digital habits at home',
]

const IMMEDIATE_BENEFITS = [
  'AICTE NEAT 2.0 + NSD certification (3-year validity)',
  'Cyber Crime Self Defense capability',
  'Confidence to navigate digital space',
  'Awareness and alertness against cybercrime',
  'Golden Hour Protocol knowledge',
  'Cyber law knowledge',
  'CopConnect platform access (Premium)',
]

const SHORT_TERM_BENEFITS = [
  'Victim communication scripts',
  'Cyber Crime Intervention support',
  'Handle interventions successfully',
  'Protect own family and community',
  'Conduct awareness against cyber crimes',
  'Build reputation as cyber crime first responder / cyber self defender',
  'Network with 1,500+ fellow officers',
  'Become a Cyber Ambassador',
]

const LONG_TERM_BENEFITS = [
  'Professional recognition in community',
  'Career differentiation',
  'Social impact (help dozens of families)',
  'Champion the cause',
]

function SkillCard({ Ico, label, i }: { Ico: LucideIcon; label: string; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white/[0.04] border border-white/12 hover:bg-white/[0.08] hover:border-brand-mid/40 transition-colors rounded-2xl px-4 py-3.5 flex items-center gap-3"
    >
      <span className="w-9 h-9 rounded-lg bg-brand-mid/15 flex items-center justify-center flex-shrink-0">
        <Ico className="w-4.5 h-4.5 text-brand-mid" strokeWidth={1.8} />
      </span>
      <span className="text-sm font-semibold text-white">{label}</span>
    </motion.div>
  )
}

function BenefitColumn({ title, items, accent }: { title: string; items: string[]; accent: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
      className="bg-white border border-border rounded-3xl p-7 md:p-8 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(232,101,42,0.28)] transition-all"
    >
      <div className={`text-xs font-bold uppercase tracking-wider mb-4 ${accent}`}>{title}</div>
      <ul className="space-y-3">
        {items.map(item => (
          <li key={item} className="flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-full bg-brand-pale flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-brand" strokeWidth={3} />
            </span>
            <span className="text-sm text-ink-mid leading-snug">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function CCIO() {
  return (
    <>
      {/* Section 1: Hero — cinematic dark */}
      <section id="ccio" className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-28 bg-ink overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_30%,rgba(232,101,42,0.28)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-noise opacity-[0.1] pointer-events-none" />
        <div className="relative max-w-[1320px] mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-brand-mid text-xs font-bold uppercase tracking-[0.18em] mb-5">
              CCIO Program
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.15]">
              <WordsPullUpMultiStyle
                segments={[
                  { text: 'Become the person', className: 'text-white' },
                  { text: 'people turn to during', className: 'text-white' },
                  { text: 'a cyber crisis.', className: 'text-brand-mid italic' },
                ]}
              />
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/65 text-base sm:text-lg leading-relaxed mt-6 max-w-2xl mx-auto"
            >
              CCIO is more than a certification. <span className="font-semibold text-white">It is a life skill.</span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="text-white/55 text-sm sm:text-base mt-3 max-w-2xl mx-auto"
            >
              You become part of a nationwide movement of cyber first responders helping people stay safe online.
            </motion.p>
          </div>

          {/* Skills grid */}
          <div className="mt-14 md:mt-16">
            <div className="text-brand-mid text-xs font-bold uppercase tracking-[0.18em] mb-5 text-center">
              As a CCIO, you learn
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
              {SKILLS.map(({ Ico, label }, i) => (
                <SkillCard key={label} Ico={Ico} label={label} i={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Who it's for + Build your profile */}
      <section className="bg-cream px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <div className="text-brand text-xs font-bold uppercase tracking-[0.18em] mb-4">Who it's for</div>
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.15]">
              Whether you are <span className="italic text-brand">a student or a CEO</span> — you can lead change.
            </h3>
            <p className="text-muted text-base sm:text-lg mt-5 leading-relaxed max-w-md">
              CCIO gives you the knowledge to <span className="font-semibold text-ink">defend yourself</span> and create real social impact.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {AUDIENCES.map((a, i) => (
              <motion.div
                key={a}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="bg-white border border-border rounded-2xl p-4 text-center hover:border-brand-lt transition-colors"
              >
                <div className="font-serif text-base text-ink">{a}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-[1320px] mx-auto mt-14 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {[
            { label: 'Build your profile', Ico: Sparkles },
            { label: 'Help society', Ico: HeartHandshake },
            { label: 'Protect people', Ico: ShieldAlert },
            { label: 'Lead with purpose', Ico: UserCheck },
          ].map(({ label, Ico }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white border border-border rounded-2xl p-5 md:p-6 text-center"
            >
              <span className="w-11 h-11 rounded-full bg-brand-pale flex items-center justify-center mx-auto mb-3">
                <Ico className="w-5 h-5 text-brand" strokeWidth={1.7} />
              </span>
              <div className="font-serif text-base md:text-lg text-ink leading-tight">{label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 3: Why parents are choosing CCIO */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-brand text-xs font-bold uppercase tracking-[0.18em] mb-4">For Families</div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.15]">
              Why parents & teachers are <span className="italic text-brand">choosing CCIO</span>.
            </h2>
            <p className="text-muted text-base sm:text-lg mt-5 leading-relaxed">
              Today's children are growing up in a world their parents never experienced. Most parents only realize something is wrong when it is already too late.
            </p>
          </div>

          {/* Concerns chips */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {PARENT_CONCERNS.map(c => (
              <span key={c} className="bg-brand-pale text-brand text-sm font-semibold rounded-full px-4 py-1.5">
                {c}
              </span>
            ))}
          </div>

          <div className="bg-cream border border-border rounded-3xl p-7 md:p-10 max-w-3xl mx-auto">
            <div className="text-brand text-xs font-bold uppercase tracking-wider mb-4">The CCIO program helps parents understand</div>
            <ul className="space-y-3">
              {PARENT_LEARNINGS.map(l => (
                <li key={l} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-ink-mid text-base leading-snug">{l}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 pt-6 border-t border-border">
              <p className="text-muted text-sm italic leading-relaxed">
                This is not a technical program. It is a life-skills and <span className="font-semibold text-ink">cyber crime intervention</span> program designed for modern families. Because digital safety should begin at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Pricing — two tiers */}
      <section className="bg-cream px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="text-brand text-xs font-bold uppercase tracking-[0.18em] mb-4">Pricing</div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.15]">
              Two ways to <span className="italic text-brand">join the movement</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {/* CCIO Only tier */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="bg-white border border-border rounded-3xl p-8 md:p-10 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.18)] transition-all"
            >
              <div className="text-brand text-xs font-bold uppercase tracking-[0.15em] mb-3">CCIO Program</div>
              <h3 className="font-serif text-2xl sm:text-3xl text-ink leading-tight">
                For citizens, students & professionals
              </h3>
              <p className="text-muted text-sm sm:text-base mt-4 leading-relaxed">
                The complete CCIO certification program — perfect for individuals starting their journey as a Cyber Crime Intervention Officer.
              </p>
              <div className="flex items-baseline gap-2 mt-7">
                <div className="font-serif font-bold text-5xl md:text-6xl text-ink leading-none">₹5,000</div>
                <div className="text-muted text-sm">+ GST</div>
              </div>
              <Link
                to="/sessions"
                className="inline-flex items-center gap-2 bg-ink hover:bg-ink-mid text-white font-semibold text-base rounded-full px-6 py-3.5 mt-6 hover:scale-[1.03] transition-transform"
              >
                Enrol in CCIO
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Parents Package — highlighted */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gradient-to-br from-brand to-[#d4541c] rounded-3xl p-8 md:p-10 text-white relative overflow-hidden hover:-translate-y-1.5 transition-all shadow-[0_30px_60px_-30px_rgba(232,101,42,0.6)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_100%_0%,rgba(255,255,255,0.18)_0%,transparent_60%)] pointer-events-none" />
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ink text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Most Popular
              </span>
              <div className="relative">
                <div className="text-white/80 text-xs font-bold uppercase tracking-[0.15em] mb-3">Parents Package</div>
                <h3 className="font-serif text-2xl sm:text-3xl leading-tight">
                  CCIO + <span className="italic">ScrollControl</span>
                </h3>
                <p className="text-white/85 text-sm sm:text-base mt-4 leading-relaxed">
                  The complete certification + parental safety toolkit for modern families. Defend your home from cyber threats.
                </p>
                <div className="flex items-baseline gap-2 mt-7">
                  <div className="font-serif font-bold text-5xl md:text-6xl leading-none">₹7,500</div>
                  <div className="text-white/80 text-sm">+ GST</div>
                </div>
                <Link
                  to="/sessions"
                  className="inline-flex items-center gap-2 bg-white text-brand font-semibold text-base rounded-full px-6 py-3.5 mt-6 hover:scale-[1.03] transition-transform"
                >
                  Enrol with ScrollControl
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
          <p className="text-center text-xs text-muted mt-6 italic">*Prices exclude applicable taxes</p>
        </div>
      </section>

      {/* Section 5: Benefits timeline */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
            <div className="text-brand text-xs font-bold uppercase tracking-[0.18em] mb-4">What You Get</div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.15]">
              Benefits across <span className="italic text-brand">your CCIO journey</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            <BenefitColumn title="Immediate · Day 1" items={IMMEDIATE_BENEFITS} accent="text-brand" />
            <BenefitColumn title="Short-Term · Months 1–6" items={SHORT_TERM_BENEFITS} accent="text-brand" />
            <BenefitColumn title="Long-Term · Year 1+" items={LONG_TERM_BENEFITS} accent="text-brand" />
          </div>

          <div className="text-center mt-14">
            <Link
              to="/sessions"
              className="inline-flex items-center gap-2 bg-brand hover:bg-[#d4541c] text-white font-semibold text-base sm:text-lg rounded-full px-7 py-3.5 transition-all hover:scale-[1.03] shadow-[0_10px_30px_-10px_rgba(232,101,42,0.5)]"
            >
              Apply to Become a CCIO
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: Program Structure */}
      <section className="bg-ink px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(232,101,42,0.18)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-noise opacity-[0.08] pointer-events-none" />
        <div className="relative max-w-[1320px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="text-brand-mid text-xs font-bold uppercase tracking-[0.18em] mb-4">Program Details</div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-[1.15]">
              Cybercrime Intervention Officer <span className="italic text-brand-mid">(CCIO) Program</span>
            </h2>
            <p className="text-white/65 text-base sm:text-lg mt-5 leading-relaxed">
              A complete instructor-led certification program designed to make you industry-ready as a CCIO.
            </p>
          </div>

          {/* Session details — 4 chip row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
            {[
              { label: 'Live Instructor-Led', value: '8 Sessions × 2.5 hrs' },
              { label: 'eLearning Access', value: '60 Days' },
              { label: 'Certification', value: 'NSD · 3-year validity' },
              { label: 'Exam Attempts', value: '3 (no extra cost)' },
            ].map(({ label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-white/[0.04] border border-white/12 rounded-2xl p-5"
              >
                <div className="text-brand-mid text-[10px] font-bold uppercase tracking-wider mb-2">{label}</div>
                <div className="text-white font-serif text-lg sm:text-xl leading-tight">{value}</div>
              </motion.div>
            ))}
          </div>

          {/* Two columns: Program Structure + Examination */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="bg-white/[0.04] border border-white/12 rounded-3xl p-7 md:p-9"
            >
              <div className="text-brand-mid text-xs font-bold uppercase tracking-wider mb-5">Program Structure</div>
              <ul className="space-y-3">
                {[
                  '8 instructor-led sessions (2.5 hours each)',
                  '100+ slides per session',
                  'Field kit with SOPs, forms, and reference cards per session',
                  'Certification examination',
                  'CCIO Certification valid for 3 years',
                  'CopConnect platform membership eligibility',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-brand-mid/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-brand-mid" strokeWidth={3} />
                    </span>
                    <span className="text-white/80 text-sm leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-white/[0.04] border border-white/12 rounded-3xl p-7 md:p-9"
            >
              <div className="text-brand-mid text-xs font-bold uppercase tracking-wider mb-5">Examination</div>
              <ul className="space-y-3">
                {[
                  'Multiple-choice question format',
                  'Minimum 60% to pass',
                  'Held after course conclusion',
                  "Can't attend? Take the exam with the next batch",
                  '3 attempts total at no additional cost',
                  '2 complimentary attempts included to pass',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-brand-mid/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-brand-mid" strokeWidth={3} />
                    </span>
                    <span className="text-white/80 text-sm leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <p className="text-center text-white/40 text-xs mt-8 italic">*Prices exclude applicable taxes</p>
        </div>
      </section>
    </>
  )
}
